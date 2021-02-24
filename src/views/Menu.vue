<template>
  <div class="menu-wrapper">
    <div class="menu">
      <div v-for="(event, index) in events" :key="index" class="menu__event">
        <div class="add">
          <fa-icon class="add__icon" icon="plus" />
        </div>
        <div class="event__image" />
        <h1 class="event__title">
          {{ event.name }}
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      events: [
        {
          name: "Travel",
        },
        {
          name: "Birthday",
        },
        {
          name: "Weddings",
        },
        {
          name: "Other",
        },
        {
          name: "Other2",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scopped>
.menu-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    background: $bg url("../assets/bg.jpeg") no-repeat top center;
    background-size: cover;
  }

  background-size: cover;
  backdrop-filter: blur(10px);
  .menu {
    width: 95vw;
    max-width: 95vw;
    height: 80vh;
    max-height: 80vh;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;
    row-gap: 50px;
    padding: 50px;
    // margin-bottom: 20px;
    background-color: $bg;
    @include scroll;
    //od minimalnej szerokosci 600: czyli 600+
    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    .menu__event {
      position: relative;
      border: 2px solid $decorative;
      //   margin-bottom: 20px;
      .add {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb($bg, 0.5);
        border-radius: 50%;
        transition: 0.2s ease;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }

        .add__icon {
          color: $bg;
        }
      }
      .event__image {
        height: 170px;
        background-color: tomato;
        // background: $bg url("../assets/airplane_view.jpg") no-repeat center;
      }
      .event__title {
        font-size: 25px;
        text-align: center;
      }
    }
  }
}
</style>
