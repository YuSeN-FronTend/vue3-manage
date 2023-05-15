<template>
    <div class="main-box">
        <div class="main-box-middle">
            <div :class="['container', 'container-register', { 'is-txl': isLogin }]">
                <form>
                    <h2 class="title">Create Account</h2>
                    <span class="text">or use email for login</span>
                    <input class="form__input" type="text" placeholder="Name" v-model="registerForm.name" />
                    <input class="form__input" type="text" placeholder="Email" v-model="registerForm.email"/>
                    <input class="form__input" type="password" placeholder="Password" autocomplete="off" v-model="registerForm.password"/>
                    <div class="primary-btn" @click="register">Register</div>
                </form>
            </div>
            <div :class="['container', 'container-login', { 'is-txl is-z200': isLogin }]">
                <form>
                    <h2 class="title">Sign in to Website</h2>
                    <span class="text">or use email for registration</span>
                    <input class="form__input" type="text" placeholder="Email" v-model="loginForm.email"/>
                    <input class="form__input" type="password" placeholder="Password" autocomplete="off" v-model="loginForm.password"/>
                    <div class="primary-btn" @click="login">Login</div>
                </form>
            </div>
            <div :class="['switch', { login: isLogin }]">
                <div class="switch__circle"></div>
                <div class="switch__circle switch__circle_top"></div>
                <div class="switch__container">
                    <h2>{{ isLogin ? 'Hello Friend !' : 'Welcome Back !' }}</h2>
                    <p>
                        {{
                            isLogin
                            ? 'Enter your personal details and start journey with us'
                            : 'To keep connected with us please login with your personal info'
                        }}
                    </p>
                    <div class="primary-btn" @click="isLogin = !isLogin">
                        {{ isLogin ? 'Register' : 'Login' }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, reactive } from 'vue';
let isLogin = ref(false);
let app = getCurrentInstance();
let loginForm = reactive({
    email: '',
    password: '',
})
function login() {
    app?.appContext.config.globalProperties.$router.push('/demo')
}


let registerForm = reactive({
    name: '',
    email: '',
    password: ''
})
function register() { 
    isLogin.value = true
}
</script>

<style lang="scss" scoped>
.main-box {
    height: 100%;
    width: 100%;
    background-color: #ecf0f3;
    display: flex;
    justify-content: center;
    align-items: center;
}
 .main-box-middle {
  position: relative;
  width: 1000px;
  height: 600px;
  padding: 25px;
  background-color: #ecf0f3;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    width: 600px;
    height: 100%;
    padding: 25px;
    background-color: #ecf0f3;
    transition: all 1.25s;
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      color: #a0a5a8;
      .title {
        font-size: 34px;
        font-weight: 700;
        line-height: 3;
        color: #181818;
      }
      .text {
        margin-top: 30px;
        margin-bottom: 12px;
      }
      .form__input {
        width: 350px;
        height: 40px;
        margin: 4px 0;
        padding-left: 25px;
        font-size: 13px;
        letter-spacing: 0.15px;
        border: none;
        outline: none;
        // font-family: 'Montserrat', sans-serif;
        background-color: #ecf0f3;
        transition: 0.25s ease;
        border-radius: 8px;
        box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
        &::placeholder {
          color: #a0a5a8;
        }
      }
    }
  }
  .container-register {
    z-index: 100;
    left: calc(100% - 600px);
  }
  .container-login {
    left: calc(100% - 600px);
    z-index: 0;
  }
  .is-txl {
    left: 0;
    transition: 1.25s;
    transform-origin: right;
  }
  .is-z200 {
    z-index: 200;
    transition: 1.25s;
  }
  .switch {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 400px;
    padding: 50px;
    box-sizing: border-box;
    z-index: 200;
    transition: 1.25s;
    background-color: #ecf0f3;
    overflow: hidden;
    box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #f9f9f9;
    color: #a0a5a8;
    .switch__circle {
      position: absolute;
      width: 500px;
      height: 500px;
      border-radius: 50%;
      background-color: #ecf0f3;
      box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
      bottom: -60%;
      left: -60%;
      transition: 1.25s;
    }
    .switch__circle_top {
      top: -30%;
      left: 60%;
      width: 300px;
      height: 300px;
    }
    .switch__container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: absolute;
      width: 400px;
      padding: 50px 55px;
      transition: 1.25s;
      h2 {
        font-size: 34px;
        font-weight: 700;
        line-height: 3;
        color: #181818;
      }
      p {
        font-size: 14px;
        letter-spacing: 0.25px;
        text-align: center;
        line-height: 1.6;
      }
    }
  }
  .login {
    left: calc(100% - 400px);
    .switch__circle {
      left: 0;
    }
  }
  .primary-btn {
    width: 180px;
    height: 50px;
    border-radius: 25px;
    margin-top: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    letter-spacing: 2px;
    background-color: #4b70e2;
    color: #f9f9f9;
    cursor: pointer;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    &:hover {
      box-shadow: 4px 4px 6px 0 rgb(255 255 255 / 50%),
        -4px -4px 6px 0 rgb(116 125 136 / 50%),
        inset -4px -4px 6px 0 rgb(255 255 255 / 20%),
        inset 4px 4px 6px 0 rgb(0 0 0 / 40%);
    }
  }
}
</style>