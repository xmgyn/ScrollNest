<template>
    <div class="Authenticate-Window">
        <div class="Hero-Image">
            <img src="/login.png" />
        </div>
        <div class="Panel">
            <div class="Slider">
                <div class="option" :class="{ active: isLogin }" @click="isLogin = true">Login</div>
                <div class="option" :class="{ active: !isLogin }" @click="isLogin = false">Signup</div>
            </div>
            <transition>
                <div class="Login" v-if="isLogin">
                    <div class="Text-Head merriweather-Medium">Login</div>
                    <input type="text" class="merriweather-Medium" placeholder="Username"
                        v-model="loginData.username" />
                    <input type="password" class="merriweather-Medium" placeholder="Password"
                        v-model="loginData.password" />
                    <button class="merriweather-Medium" @click="login">Login</button>
                    <div @click="continueWithoutLogin" class="Skip merriweather-Medium">Continue Without Login
                        <svg fill="#684275" version="1.1" baseProfile="tiny" id="Layer_1" xmlns:x="&amp;ns_extend;"
                            xmlns:i="&amp;ns_ai;" xmlns:graph="&amp;ns_graphs;" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" width="100px" height="100px"
                            viewBox="0 0 42 42" xml:space="preserve" stroke="#684275"
                            stroke-width="0.00042000000000000007">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <polygon fill-rule="evenodd"
                                    points="11,38.32 28.609,21 11,3.68 13.72,1 34,21.01 13.72,41 "></polygon>
                            </g>
                        </svg>
                    </div>
                </div>
            </transition>
            <transition>
                <div class="SignUp" v-if="!isLogin">
                    <div class="Text-Head merriweather-Medium">Sign Up</div>
                    <input type="text" class="merriweather-Medium" placeholder="Username"
                        v-model="signupData.username" />
                    <input type="email" class="merriweather-Medium" placeholder="Email" v-model="signupData.email" />
                    <input type="password" class="merriweather-Medium" placeholder="Password"
                        v-model="signupData.password" />
                    <input type="password" class="merriweather-Medium" placeholder="Retype Password"
                        v-model="signupData.confirmPassword" />
                    <button class="merriweather-Medium" @click="signup">Sign Up</button>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLogin: (this.type === "Login") ? true : false,
            loginData: { username: "", password: "" },
            signupData: { username: "", email: "", password: "", confirmPassword: "" }
        };
    },
    methods: {
        toggleForm() {
            this.isLogin = !this.isLogin;
        },
        login() {
            if (!this.loginData.username || !this.loginData.password) {
                this.$emit("updatemsg", "Error", "All fields are required");
                return;
            }
            fetch(`http://localhost:3000/login?Username=${encodeURIComponent(this.loginData.username)}&Password=${encodeURIComponent(this.loginData.password)}`, {
                method: "GET"
            })
            .then(response => {
                if(response.status !== 200) throw new Error(response.statusText)
                return response.json()
            })
            .then(data => {
                this.$emit("token",data.token);
                this.$emit('show');

            })
            .catch(error => this.$emit("updatemsg", "Error", error));
        },
        signup() {
            if (!this.signupData.username || !this.signupData.email || !this.signupData.password) {
                this.$emit("updatemsg", "Error", "All fields are required");
                return;
            }

            if (this.signupData.password !== this.signupData.confirmPassword) {
                this.$emit("updatemsg", "Error", "Password Dont Match");
                return;
            }
            fetch(`http://localhost:3000/signup?Username=${encodeURIComponent(this.signupData.username)}&Email=${encodeURIComponent(this.signupData.email)}&Password=${encodeURIComponent(this.signupData.password)}`, {
                method: "GET"
            })
            .then(response => {
                if(response.status !== 200) throw new Error(response.statusText)
                return response.json()
        })
            .then(data => this.$emit("updatemsg", "Success", data.message))
            .catch(error => this.$emit("updatemsg", "Error", error));


        },
        continueWithoutLogin() {
            this.$emit('show');
        }
    },
    props: ['type']
};
</script>

<style scoped>
div.Authenticate-Window {
    height: 70%;
    width: 55%;
    position: absolute;
    background: #000000a6;
    border-radius: 20px;
    border: 2px solid #8616fd;
    display: grid;
    grid-template-columns: 52% 48%;
}

div.Hero-Image {
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 18px 0px 0px 18px;
    }
}

div.Panel {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
}

div.Slider {
    display: flex;
    border-radius: 20px;
    width: 35%;
    height: 5%;
    color: white;
    border: 2px solid #8616fd;
    cursor: pointer;

    .option {
        width: 50%;
        border-radius: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .active {
        background-color: #8616fd;
    }
}

div.Login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 75%;

    div.Text-Head {
        font-size: 30px;
        color: white;
        margin: 20% auto;
    }

    input {
        width: 80%;
        margin: 0.5% auto;
        color: white;
        padding: 15px;
        font-size: 1rem;
        border-radius: 10px;
        background: #000000;
        border: none;
        border-bottom: 2px solid #8616fd;
    }

    button {
        background: #8616fd;
        color: white;
        margin: 10% auto;
        height: 10%;
        width: 80%;
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }

    div.Skip {
        color: #684275;
        cursor: pointer;
        display: flex;
        align-items: center;
        width: 70%;
        justify-content: center;

        svg {
            height: 100%;
            width: 6%;
            margin: auto 4%;
        }
    }
}

div.SignUp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 75%;

    div.Text-Head {
        font-size: 30px;
        color: white;
        margin: 12% auto;
    }

    input {
        width: 80%;
        margin: 0.5% auto;
        color: white;
        padding: 15px;
        font-size: 1rem;
        border-radius: 10px;
        background: #000000;
        border: none;
        border-bottom: 2px solid #8616fd;
    }

    button {
        background: #8616fd;
        color: white;
        margin: 10% auto;
        height: 10%;
        width: 80%;
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }
}
</style>