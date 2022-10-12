<template>
  <div class="flex gap-2">
    <font-awesome-icon
      @click="gotoGithub()"
      icon="fa-brands fa-github"
      size="sm"
      color="white"
      fixed-width
      class="text-2xl border-2 border-gray-600 px-1 py-2 bg-stone-500 rounded-lg transform transition duration-500 hover:scale-105 hover:cursor-pointer hover:bg-stone-400"
    />
    <font-awesome-icon
      @click="gotoLinkedin()"
      icon="fa-brands fa-linkedin"
      size="sm"
      color="white"
      fixed-width
      class="text-2xl border-2 border-gray-600 px-1 py-2 bg-stone-500 rounded-lg transform transition duration-500 hover:scale-105 hover:cursor-pointer hover:bg-stone-400"
    />
  </div>
</template>

<script>
export default {
  name: 'SocialIcons',
  methods: {
    gotoGithub() {
      window.open('https://github.com/danielletate');
    },
    gotoLinkedin() {
      window.open('https://www.linkedin.com/in/danielle-tate-16878a152/');
    },
  },
};

import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faGithub);
library.add(faLinkedin);

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>
