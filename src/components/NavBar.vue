<template>
  <div class="top-0 sticky rounded-md shadow-lg bg-stone-100 z-10">
    <nav
      class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="text-xl font-bold text-gray-800 md:text-2xl hover:text-violet-500"
        >
          <div class="flex gap-2">
            <font-awesome-icon
              icon="fa-solid fa-code"
              fixed-width
              class="text-violet-500"
            />
            <h1 class="text-violet-500 font-normal">Danielle Tate</h1>
          </div>
        </router-link>
        <!-- Mobile Menu Button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-600 transition hover:text-violet-500 focus:outline-none focus:text-violet-300"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 font-bold cursor-pointer text-sm md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 cursor-pointer"
      >
        <li class="text-gray-700 transition duration-300 hover:text-violet-500">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="text-gray-700 transition duration-300 hover:text-violet-500">
          <router-link to="/projects">Projects</router-link>
        </li>
        <li class="text-gray-700 transition duration-300 hover:text-violet-500">
          <router-link to="/resume">Resume</router-link>
        </li>
        <li class="text-gray-700 transition duration-300 hover:text-violet-500">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li class="text-gray-700 transition duration-300 hover:text-violet-500">
          <router-link to="/photos">Photos</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  name: 'NavBar',
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>
