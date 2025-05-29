<template>
    <textarea id="selector"></textarea>
</template>

<script>
import { onMounted } from "vue";
export default {
    props: {
        selector: {
            type: String,
            required: true
        }
    },
    setup(props) {
        onMounted(() => {
            tinymce.init({
                selector: '#selector',
                menubar: false,
                height: "100%",
                minHeight: '300px',
                width: "100%",
                license_key: "gpl",
                resize: false,
                plugins: [
                    "advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor",
                    "searchreplace", "visualblocks", "code", "fullscreen",
                    "insertdatetime", "media", "table", "code", "help", "wordcount"
                ],
                toolbar: "undo redo | formatselect | bold italic underline backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table charmap preview | searchreplace code visualblocks fullscreen | insertdatetime | removeformat | help"
            });
        });

    }
}
</script>