<template>
    <div class="Message" :class=type>
        <svg fill="#FFFFFF" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>error-standard-line</title> <circle class="clr-i-outline clr-i-outline-path-1" cx="18" cy="26.06" r="1.33"></circle><path class="clr-i-outline clr-i-outline-path-2" d="M18,22.61a1,1,0,0,1-1-1v-12a1,1,0,1,1,2,0v12A1,1,0,0,1,18,22.61Z"></path><path class="clr-i-outline clr-i-outline-path-3" d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34ZM18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect> </g></svg>
        <div class="Message-Text merriweather-Medium">{{ msg }}</div>
    </div>
</template>

<script>
export default {
    props: ['type', 'msg']
}
</script>

<style scoped>
div.Message {
    position: fixed;
    right: 0%;
    top: 10%;
    height: 8%;
    width: 15%;
    border-right: 15px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: expand 1s;

    svg {
        height: 55%;
    }
}

@keyframes expand {
    0% {
        width: 0%;

        div {
            opacity: 0;
        }
    }

    100% {
        width: 15%;
    }
}

div.Message-Text {
    font-size: 20px;
    color: white;
    text-wrap-mode: nowrap;
    margin-left: 5%;
}

div.Error {
    background-color: red;
}

div.Success {
    background-color: green;
}
</style>