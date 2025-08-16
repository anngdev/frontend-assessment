<template>
  <hero-section :data="hero" />
  <main class="exercise1">
    <card-section :items="items" />
  </main>

</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import CardSection from '../components/CardSection.vue';

export default {
  components: {
    HeroSection,
    CardSection,
  },
  data() {
    return {
      hero: {
        desktopImage: 'https://placehold.co/1920x650',
        mobileImage: 'https://placehold.co/600x600',
        title: 'Hello Developer!',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      items: [
        { image: 'https://placehold.co/400x300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { image: 'https://placehold.co/400x300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { image: 'https://placehold.co/400x300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>