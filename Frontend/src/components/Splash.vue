<template>
    <div class="Splash" :class="{ loader: true, fadeout: !isLoading }">
        <img src="/widescreen.jpg" />
        <div class="Spinner">
        </div>
    </div>
</template>

<script>
export default {
    name: "LoadingScreen",
    props: ["isLoading"]
};
</script>

<style scoped>
div.Splash {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    background: #040509;
}

/* .fadeout {
  animation: fadeout 2s forwards;
}
@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
} */

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

div.Spinner {
    width: 56px;
    height: 56px;
    border: 6.7px solid #941dfa;
    animation: spinner-kk2y8v 3s infinite;
    position: absolute;
    bottom: 15%;
}

@keyframes spinner-kk2y8v {
    0% {
        transform: rotate(0deg);
    }

    10%,
    15% {
        transform: rotate(-90deg);
    }

    20%,
    25% {
        transform: rotate(-180deg);
    }

    30%,
    35% {
        transform: rotate(-270deg);
    }

    40%,
    50% {
        transform: rotate(-360deg);
    }

    100% {
        transform: rotate(720deg);
    }
}
</style>
