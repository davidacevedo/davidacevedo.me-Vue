<template>
  <div class="homePageDetails">
    <p>Hello this is my webpage made in Vue.js!</p>
    <div class="skills">
      <home-page-details-skill skill="React" />
      <home-page-details-skill skill="Vue" />
      <home-page-details-skill skill="D3" />
    </div>
  </div>
</template>

<script>
import HomePageDetailsSkill from 'components/HomePageDetailsSkill';

export default {
  components: { HomePageDetailsSkill },
}
</script>

<style lang="scss" scoped>
  .homePageDetails {
    margin-top: 30px;
  }

  .skills {
    display: flex;
    justify-content: space-between;
  }


</style>
