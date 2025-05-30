<template>
    <div class="Block">
        <div class="Back merriweather-Medium" @click="$router.back()">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path fill="#000000" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path>
                    <path fill="#000000"
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z">
                    </path>
                </g>
            </svg>
            Back
        </div>
        <div class="Photos">
            <img src="/airplane-flying-low-over-snowy-600nw-2496851013.webp" alt="">
            <img src="/pexels-photo-1371360.jpeg" alt="">
            <img src="/photo-1707343848552-893e05dba6ac.jpg" alt="">
            <img src="/intro-1672072042.jpg" alt="">
        </div>
        <div v-if="blogData" class="Container">
            <div class="Heading merriweather-Medium" v-html="decode(blogData.Heading)"></div>
            <div class="SubHeading merriweather-Medium" v-html="decode(blogData.SubHeading)"></div>
            <div class="Content merriweather-Medium" v-html="decode(blogData.Content)"></div>

            <div class="Meta">
                <span>Likes: {{ blogData.Likes }}</span>
                <span>Views: {{ blogData.Views }}</span>
                <span>Read Time: {{ blogData.ReadTime }} mins</span>
                <span>Date: {{ formatDate(blogData.Date) }}</span>
            </div>

            <div v-if="blogData.editable" class="EditOptions">
                <button @click="editBlog">Edit Blog</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const blogData = ref(null);

const formatDate = (date) => {
    return new Date(date).toLocaleDateString(); // Format date
};

onMounted(async () => {
    const slug = route.params.blogid;
    try {
        const response = await fetch(`http://localhost:3000/blog/${slug}`);
        blogData.value = await response.json();
    } catch (error) {
        console.error('Error fetching blog data:', error);
    }
});

const decode = (str) => {
    return atob(atob(str));
}

const editBlog = () => {
    console.log("Editing blog:", blogData.value.BlogID);
};
</script>

<style scoped>
div.Block {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

div.Back {
    height: 5%;
    width: 10%;
    position: fixed;
    top: 10px;
    left: 10px;
    color: white;
    font-size: 30px;
    background-color: red;
    display: flex;
    justify-content: space-evenly;

    svg {
        height: 100%;
    }
}

div.Container {
    color: white;
    width: 90%;
    text-align: center;
    height: 60%;
}

div.Heading {
    font-size: 50px;
    font-weight: 800;
}

div.SubHeading {
    font-size: 30px;
    font-weight: 600;
}

div.Content {
    font-size: 20px;
    font-weight: 500;
    text-align: left;
    height: 65%;
    overflow-y: scroll;
    scrollbar-color: pink black;
    scrollbar-width: thin;
}

div.Photos {
    column-count: 2;
    overflow: hidden;
    height: 30%;
    width: 50%;
    column-gap: 0px;

    img {
        display: block;
        width: 100%;
        height: 50%;
        object-fit: cover;
    }
}
</style>