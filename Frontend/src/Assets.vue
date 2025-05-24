<template>
  <img :src="src.base64Image" alt="Base64 Image" />
</template>

<script>
export default {
  data() {
    return {
      src: {
        base64Image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA..." // Replace with actual Base64 string
      }
    };
  }
};
</script>