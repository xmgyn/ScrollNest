<template>
    <editor :id="selector"  api-key="2hhu8xzn0cvj6qawy0rwcqjn603f8jbxnfjgh1rmsznhby5n" :init='{
        menubar: false,
        height: "100%",
        min_height: 800,
        width: "100%",
        license_key: "gpl",
        skin: "oxide-dark",
        statusbar: false,
        content_css: "dark",
        resize: false,
        plugins: [
            "advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor",
            "searchreplace", "visualblocks", "code", "fullscreen",
            "insertdatetime", "media", "table", "code", "help", "wordcount"
        ],
        toolbar: getToolbar()
    }'
  />
</template>

<script>
import { onMounted, onUnmounted } from "vue";
import Editor from '@tinymce/tinymce-vue';
export default {
    props: {
        selector: {
            type: String,
            required: true
        }
    },
    components: {
        'editor': Editor
    },
    methods: {
        getToolbar() {
            let toolbar;
            switch (this.selector) {
                case 'Content':
                    toolbar = "undo redo fullscreen | formatselect | bold italic underline backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table charmap preview | searchreplace code visualblocks | insertdatetime | removeformat | help";
                    break;
                default:
                    toolbar = "undo redo | formatselect | bold italic underline backcolor | link charmap preview | insertdatetime";
                    break;
            }  

            return toolbar;
        }
    },
    setup(props) {
        // onMounted(() => {
        //     tinymce.init({
        //         selector: '#selector',
        //         menubar: false,
        //         height: "100%",
        //         min_height: 800,
        //         width: "100%",
        //         license_key: "gpl",
        //         skin: 'oxide-dark',
        //         statusbar: false,
        //         content_css: 'dark',
        //         resize: false,
        //         plugins: [
        //             "advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor",
        //             "searchreplace", "visualblocks", "code", "fullscreen",
        //             "insertdatetime", "media", "table", "code", "help", "wordcount"
        //         ],
        //         toolbar: "undo redo fullscreen | formatselect | bold italic underline backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table charmap preview | searchreplace code visualblocks | insertdatetime | removeformat | help"
        //     });
        // });
        // onUnmounted(() => {
        //     tinymce.remove();
        // });
    }
}
</script>

<style></style>