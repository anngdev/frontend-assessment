<template>
  <header class="hero-section">
    <picture>
      <source media="(max-width: 768px)" :srcset="data.mobileImage">
      <img :src="data.desktopImage" alt="background" class="hero-section__background" />
    </picture>
    <div class="hero-section__overlay"></div>
    <div class="hero-section__content">
      <h1 class="hero-section__title">{{ data.title }}</h1>
      <p class="hero-section__subtitle">{{ data.subtitle }}</p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      validator(val) {
        return (
          typeof val.desktopImage === 'string' &&
          typeof val.mobileImage === 'string' &&
          typeof val.title === 'string' &&
          typeof val.subtitle === 'string'
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@use '../styles/hero-section'
</style>