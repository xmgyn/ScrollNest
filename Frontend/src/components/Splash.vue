<template>
    <div class="Splash" :class="{ loader: true, fadeout: !isLoading }">
        <img src="/widescreen.jpg" />
        <div class="Spinner">
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
    name: "LoadingScreen",
    props: ["isLoading"],
    setup(props, { emit }) {
        onMounted(() => {
            const token = localStorage.getItem('token');
            if (token !== "null") {
                emit("token", token);
            }
            fetch('http://localhost:3000/blogs?sno=0&eno=3')
                .then(response => response.json())
                .then(data => {
                    emit("dataArray", data)
                    emit("setLoading");
                }
                )
                .catch(error => console.error('Error:', error));



        });
    }
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
