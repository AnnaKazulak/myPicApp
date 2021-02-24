<template>
  <div class="home-view">
    <div class="home">
      <h1 class="home__title">Welcome to myPicApp</h1>
      <div class="home__links">
        <router-link to="/Login" class="home__link">Log In</router-link>
        <router-link to="/" class="home__link">Sign In</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      name: "",
    };
  },
  // pobieramy dane
  mounted() {
    this.$db
      .collection("test")
      .doc("test")
      .get()
      .then((snap) => {
        this.name = snap.data().name;
      });
  },
  methods: {
    updateName() {
      this.$db
        .collection("test")
        .doc("test")
        .update({
          name: this.name,
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.home-view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    background: $bg url("../assets/bg.jpeg") no-repeat top center;
    background-size: cover;
    backdrop-filter: blur(10px);
  }
  .home {
    width: 600px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: $bg;
    // backdrop-filter: blur(10px);
    .home__title {
      font-size: 25px;
      border: 1px solid tomato;
      margin-left: 3vw;

      @media (min-width: 600px) {
        font-size: 35px;
        border: 1px solid tomato;
        margin-left: 3vw;
      }
    }
    .home__links {
      display: flex;
      .home__link {
        display: block;
        background: $bg-dark;
        padding: 5px 10px;
        margin: 50px;
        border-radius: 10px;
        color: $bg;
        text-decoration: none;
        font-weight: bold;
        border: 3px solid $bg-dark;
        transition: 0.3s ease;
        @media (min-width: 320px) {
        }
        &:hover {
          background-color: $bg;
          color: $bg-dark;
        }
      }
    }
  }
}
</style>
