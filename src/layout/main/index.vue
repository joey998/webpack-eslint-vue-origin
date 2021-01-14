<template>
  <div class="app-main">
    <router-view />
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
 .app-main{
   display: flex;
   flex-grow: 1;
   margin: 0 vm(20);
   height: vh(980)
 }
</style>
