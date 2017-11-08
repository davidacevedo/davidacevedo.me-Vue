<template>
  <div class="header">
    <div class="imgContainer">
      <img src="../assets/deerdavid.jpg" />
    </div>
    <h1>Hello, my name is David</h1>
    <h2>I am a frontend developer</h2>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .header {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .imgContainer {
    width: 200px;
    height: 250px;
    background-color: black;
    box-shadow: 0 1px 5px rgba(black, 0.6);
    position: relative;
    
    img {
      height: 100%;
      width: 100%;
    }
  }

  h1 {
    box-shadow: 0 1px 5px rgba(black, 0.2);
    margin-top: 10px;
  }

  h2 {
    box-shadow: 0 1px 5px rgba(black, 0.2);
    margin-top: 10px;
  }
</style>

