<template>
  <div class="login-view">
    <div class="login">
      <h1 class="login__title">Login</h1>
      <form @submit.prevent="register" class="login__form">
        <input v-model="email" type="email" placeholder="E-mail" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  // pobieramy dane
  mounted() {},
  methods: {
    async register() {
      console.log("cos");
      const user = await this.$auth.createUserWithEmailAndPassword(
        this.email,
        this.password
      );
      console.log(user);
    },
  },
};
</script>
<style lang="scss" scoped>
.login-view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $bg url("../assets/bg.jpeg") no-repeat top center;
  background-size: cover;
  .login {
    width: 600px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: $bg;
    // backdrop-filter: blur(10px);
    .login__title {
      font-size: 35px;
      margin: 0;
    }
    .login__links {
      display: flex;
      .login__link {
        display: block;
        background: $bg-dark;
        padding: 5px 10px;
        margin: 10px;
        border-radius: 10px;
        color: $bg;
        text-decoration: none;
        font-weight: bold;
        border: 3px solid $bg-dark;
        transition: 0.3s ease;
        &:hover {
          background-color: $bg;
          color: $bg-dark;
        }
      }
    }
  }
}
</style>
