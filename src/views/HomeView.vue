<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import SkillsSection from '../components/SkillsSection.vue';
export default {
  name: 'HomeView',
  components: { HeroSection, AboutSection, SkillsSection },
};
</script>
