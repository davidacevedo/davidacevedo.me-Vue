<template>
  <div class="home">
    <home-page-header />
    <home-page-details />
  </div>
</template>

<script>
import HomePageHeader from 'components/HomePageHeader';
import HomePageDetails from 'components/HomePageDetails';

export default {
  components: { HomePageHeader, HomePageDetails },
}
</script>

<style lang="scss" scoped>
  .home {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
</style>
