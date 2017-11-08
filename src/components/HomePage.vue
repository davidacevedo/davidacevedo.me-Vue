<template>
  <div class="home">
    <home-page-header />
  </div>
</template>

<script>
import HomePageHeader from './HomePageHeader';

export default {
  components: { HomePageHeader },
  mounted: () => {
    console.log('mounted');
  }
}
</script>

<style lang="scss" scoped>
  .home {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
</style>
