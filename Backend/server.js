const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const Grid = require('gridfs-stream');
const { GridFsStorage } = require('multer-gridfs-storage');
const multer = require('multer');

const app = express();
app.use(express.json());
app.use(cors());

const TokenTable = new Map();

mongoose.connect('mongodb://127.0.0.1:27017/ScrollNest', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

// const conn = mongoose.connection;

// conn.once('open', () => {
//     console.log('GridFS Initialized');
//     gfs = Grid(conn.db, mongoose.mongo);
//     gfs.collection('uploads'); // Specify GridFS collection
// });

// // **Define GridFS Storage for File Uploads**
// const storage = new GridFsStorage({
//     url: 'mongodb://127.0.0.1:27017/ScrollNest',
//     file: (req, file) => ({
//         filename: file.originalname,
//         bucketName: 'uploads',
//          metadata: { uploadedBy: req.user ? req.user.UserID : 'Anonymous' } // Optional metadata
//     })
// });

// const upload = multer({ storage });

// Define schemas
const blogSchema = new mongoose.Schema({
    BlogID: { type: mongoose.Schema.Types.ObjectId, auto: true },
    Title: String,
    UserID: { type: mongoose.Schema.Types.ObjectId },
    Date: { type: Date, default: Date.now },
    Heading: Buffer,
    SubHeading: Buffer,
    Content: Buffer,
    Likes: Number,
    Views: Number,
    ReadTime: Number,
}, { collection: 'Blogs' });

const userSchema = new mongoose.Schema({
    UserID: { type: mongoose.Schema.Types.ObjectId, auto: true },
    Username: { type: String, unique: true },
    Email: { type: String, unique: true },
    Password: String,
}, { collection: 'Users' });

const Blog = mongoose.model('Blogs', blogSchema);
const User = mongoose.model('Users', userSchema);

// localhost:3000/blogs?sno=0&eno=2
app.get('/blogs', async (req, res) => {
    try {
        const { sno, eno } = req.query;
        if (!sno || !eno) return res.status(404).json({ error: "No Parameters" });
        const blogs = await Blog.find().skip(Number(sno)).limit(Number(eno) - Number(sno));
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// localhost:3000/blog/6835e6b7491cf34b24008b1c, Authorization: Optional
app.get('/blog/:blogid', async (req, res) => {
    try {
        const blog = await Blog.findOne({ BlogID: req.params.blogid });
        if (!blog) return res.status(404).json({ message: 'Blog Not Found' });
        let editable = false, decoded;
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
            decoded = jwt.verify(token, '26b82d3644045ca481a57a056f50e072344fac0ca33a07a81138b6b7155414ac423eb1bbb99a031b19785395dc2500dd07e349dfa8e076220b73f700195bf0f70c0149a7c2bec998bb1818ebafec8c61413f7a79fe25ae4f6669eadc0ecfccc49af6395c7f5248ea22f1ef06ae140b9460b54a2447f01e13eb962708d0581ecbcb2866c63b31ea54c4aa353c60b775ba5814d9d4d6fe445f9f6c9281d99e0f8e565a8a0a10b9005f1d8edf9f9bed175ad726c077033737ee62f8cf0aa31884bada5d392c9a9742c6c82c0b43328c090eeea25b30b71c96e6014482390541ebe0e7e8813a5d5fc532fccc9d56e80fdfa0d79584ada2ac2d7496017aed61d38ad3');
            const userId = TokenTable.get(token);
            if (userId && userId === decoded.UserID) editable = true;
        }
        res.json({ ...blog.toObject(), editable });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// localhost:3000/blog, type=POST, Authorization: Bearer Token
// Body : {
//     "Title": "Sample Title",
//     "Heading": Binary Data,
//     "SubHeading": Binary Data,
//     "Content": Binary Data,
//     "ReadTime": 10
// }
app.post('/blog', async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(401).json({ message: 'Unauthorized' });

        const token = authHeader.split(' ')[1];
        if (!token) return res.status(401).json({ message: 'Invalid token format' });
        const decoded = jwt.verify(token, '26b82d3644045ca481a57a056f50e072344fac0ca33a07a81138b6b7155414ac423eb1bbb99a031b19785395dc2500dd07e349dfa8e076220b73f700195bf0f70c0149a7c2bec998bb1818ebafec8c61413f7a79fe25ae4f6669eadc0ecfccc49af6395c7f5248ea22f1ef06ae140b9460b54a2447f01e13eb962708d0581ecbcb2866c63b31ea54c4aa353c60b775ba5814d9d4d6fe445f9f6c9281d99e0f8e565a8a0a10b9005f1d8edf9f9bed175ad726c077033737ee62f8cf0aa31884bada5d392c9a9742c6c82c0b43328c090eeea25b30b71c96e6014482390541ebe0e7e8813a5d5fc532fccc9d56e80fdfa0d79584ada2ac2d7496017aed61d38ad3');

        const userId = TokenTable.get(token);
        if (!userId || userId !== decoded.UserID) return res.status(401).json({ message: 'Invalid Token' });

        const newBlog = new Blog({
            Title: req.body.Title,
            UserID: userId,
            Heading: req.body.Heading,
            SubHeading: req.body.SubHeading,
            Content: req.body.Content,
            Likes: 0,
            Views: 0,
            ReadTime: req.body.ReadTime
        });
        await newBlog.save();
        res.status(201).json({ BlogID: newBlog.BlogID });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// app.post('/upload',  upload.array('images', 5), (req, res) => {
//     if (!req.images) {
//         return res.status(400).json({ message: 'No file uploaded!' });
//     }
//     res.json({ file: req.images });
// });


app.put('/blog/:id', async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBlog) return res.status(404).json({ message: 'Blog Not Found' });
        res.json(updatedBlog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// localhost:3000/login?Username=mgyn&Password=enum
app.get('/login', async (req, res) => {
    try {
        const { Username, Password } = req.query;
        const user = await User.findOne({ Username });
        if (!user) return res.status(401).json({ message: 'Invalid Credentials' });

        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid Credentials' });

        const token = jwt.sign({ UserID: user.UserID }, '26b82d3644045ca481a57a056f50e072344fac0ca33a07a81138b6b7155414ac423eb1bbb99a031b19785395dc2500dd07e349dfa8e076220b73f700195bf0f70c0149a7c2bec998bb1818ebafec8c61413f7a79fe25ae4f6669eadc0ecfccc49af6395c7f5248ea22f1ef06ae140b9460b54a2447f01e13eb962708d0581ecbcb2866c63b31ea54c4aa353c60b775ba5814d9d4d6fe445f9f6c9281d99e0f8e565a8a0a10b9005f1d8edf9f9bed175ad726c077033737ee62f8cf0aa31884bada5d392c9a9742c6c82c0b43328c090eeea25b30b71c96e6014482390541ebe0e7e8813a5d5fc532fccc9d56e80fdfa0d79584ada2ac2d7496017aed61d38ad3', { expiresIn: '1h' });
        TokenTable.set(token, `${user.UserID}`);
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// localhost:3000/signup?Username=mgyn&Email=mgyn@pm.me&Password=enum
app.get('/signup', async (req, res) => {
    try {
        const { Username, Email, Password } = req.query;
        let existingUser = await User.findOne({ Username });
        if (existingUser) return res.status(409).json({ message: 'Username Already In Use' });
        existingUser = await User.findOne({ Email });
        if (existingUser) return res.status(409).json({ message: 'Email Already In Use' });

        const hashedPassword = await bcrypt.hash(Password, 10);
        const newUser = new User({ Username, Email, Password: hashedPassword });

        await newUser.save();
        res.json({ message: 'User Created Successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});