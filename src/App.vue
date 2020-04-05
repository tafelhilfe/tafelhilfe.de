<template>
  <div id="app">
    <transition :name="$route.meta.transitionName" :mode="$route.meta.transitionMode">
      <router-view />
    </transition>
  </div>
</template>

<script>

  export default {
    name: "app",
  }
</script>
