<template>
  <!-- Background Img -->
  <section class="bg-hero bg-no-repeat bg-cover bg-fixed">
    <!-- Content Container Div -->
    <div class="container px-6 py-28 mx-auto h-full">
      <h1 class="text-4xl mb-6 text-white uppercase">Hi, I'm Danielle</h1>
      <h2 class="text-xl text-bold mb-4 md:mb-0 text-white">
        I'm a <span class="font-extrabold">developer</span> with an unquenchable
        passion for travel + lifelong learning.
      </h2>
      <h2 class="text-xl text-white">
        I enjoy working on the front-end of the web + finding solutions to
        technology's most thought-provoking problems.
      </h2>
      <button
        type="button"
        class="text-white bg-translucent border border-stone-300 uppercase focus:outline-none hover:bg-stone-700 hover:text-white focus:ring-4 focus:ring-stone-200 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-6 dark:bg-stone-800 dark:text-white dark:border-stone-600 dark:hover:bg-stone-700 dark:hover:border-stone-600 dark:focus:ring-stone-700 my-10 transition duration-300 ease-in-out"
      >
        View my work
      </button>

      <SocialIcons />
    </div>
  </section>
</template>

<script>
import SocialIcons from './SocialIcons.vue';

export default {
  name: 'HeroItem',
  components: {
    SocialIcons,
  },
};
</script>
