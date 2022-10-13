<template>
  <section class="bg-stone-100 text-black">
    <div class="container px-6 py-20 mx-auto">
      <h1 class="text-4xl text-black uppercase text-center">My Skills</h1>
      <p class="text-center text-stone-600 mt-4 mb-16">
        The skills, tools & technologies I use to bring your products to life.
      </p>

      <div
        class="flex flex-col justify-between gap-20 md:gap-0 items-center md:flex-row md:items-start"
      >
        <img
          src="../assets/images/danielle-tate.jpg"
          class="h-auto rounded-md max-w-xs md:max-w-md"
          alt="danielle-tate"
        />

        <!-- Technologies Icons -->
        <div
          class="grid grid-cols-4 gap-10 max-w-sm md:grid-cols-6 md:max-w-xl"
        >
          <div>
            <font-awesome-icon
              icon="fa-brands fa-html5"
              class="text-stone-500 text-5xl"
            />
            <p class="text-xs mt-2 text-stone-700">HTML5</p>
          </div>

          <div>
            <font-awesome-icon
              icon="fa-brands fa-css3-alt"
              class="text-stone-500 text-5xl"
            />
            <p class="text-xs mt-2 text-stone-700">HTML5</p>
          </div>

          <div>
            <font-awesome-icon
              icon="fa-brands fa-square-js"
              class="text-stone-500 text-5xl"
            />
            <p class="text-xs mt-2 text-stone-700">JavaScript</p>
          </div>

          <div>
            <font-awesome-icon
              icon="fa-brands fa-vuejs"
              class="text-stone-500 text-5xl"
            />
            <p class="text-xs mt-2 text-stone-700">Vue.js</p>
          </div>

          <div>
            <font-awesome-icon
              icon="fa-brands fa-react"
              class="text-stone-500 text-5xl"
            />
            <p class="text-xs mt-2 text-stone-700">React</p>
          </div>

          <div>
            <font-awesome-icon
              icon="fa-brands fa-git-alt"
              class="text-stone-500 text-5xl"
            />
            <p class="text-xs mt-2 text-stone-700">Git</p>
          </div>

          <div>
            <font-awesome-icon
              icon="fa-brands fa-github"
              class="text-stone-500 text-5xl"
            />
            <p class="text-xs mt-2 text-stone-700">Github</p>
          </div>
          <div>
            <p class="text-xs mt-2">Tailwind CSS</p>
          </div>
          <div>
            <p class="text-xs mt-2 text-stone-700">SASS</p>
          </div>
          <div>
            <font-awesome-icon
              icon="fa-solid fa-terminal"
              class="text-stone-500 text-3xl"
            />
            <p class="text-xs mt-2 text-stone-700">Terminal</p>
          </div>
          <div>
            <img src="../assets/images/mobile-responsive.svg" alt="" />
            <p class="text-xs mt-2 text-stone-700">Responsive Websites</p>
          </div>
          <div>
            <img src="../assets/images/squarespace.svg" alt="" />
            <p class="text-xs mt-2 text-stone-700">Squarespace</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
};
</script>
