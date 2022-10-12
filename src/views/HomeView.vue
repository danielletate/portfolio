<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '@/components/AboutSection.vue';
export default {
  name: 'HomeView',
  components: { HeroSection, AboutSection },
};
</script>
