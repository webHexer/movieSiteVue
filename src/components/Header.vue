<template>
  <header :class="showMenu ? 'header open' : 'header'">
    <div v-show="showMenu" class="overlay">
      <router-link to="/" class="header__logo"
        ><span>Movies</span><span>Site</span></router-link
      >
      <div class="header__mobile__links">
        <router-link to="/">Home</router-link>
        <router-link to="/">TV Shows</router-link>
        <router-link to="/">Movies</router-link>
      </div>
    </div>

    <nav class="header__nav">
      <router-link to="/" class="header__logo">
        <span>Movie</span>
        <span>Site</span>
      </router-link>

      <!-- hamburger button -->
      <div class="header__hamburger hide-in-desktop" @click="openMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="header__west-side-container hide-in-mobile">
        <router-link to="/">Home</router-link>
        <router-link to="/">TV Shows</router-link>
        <router-link to="/">Movies</router-link>
      </div>
      <div class="header__east-side-container hide-in-mobile">
        <div class="header__east-side-container__search-box">
          <span><i class="fas fa-search"></i></span>
          <input
            type="text"
            name="search"
            placeholder="Search movies..."
            class="header__east-side-container__search-box__input-box"
          />
        </div>
        <span class="header__east-side-container__divider">|</span>
        <router-link to="/">User</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
    openMobileMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
