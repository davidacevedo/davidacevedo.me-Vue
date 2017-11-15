<template>
  <div class="homePageDetailsSkill">
    <h1>{{ skill }}</h1>
  </div>
</template>

<script>
export default {
  props: ['skill'],
  data () {
    return {
      skillName: 'React',
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
