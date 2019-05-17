<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="router"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-right" //初始过渡动画方向
    };
  },
  watch: {
    $route(to, from) {
      // 切换动画
      let isBack = this.$router.isBack; // 监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
    }
  },
};
</script>

<style>
html,body {
  width:100%;
  height:100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  max-width: 15rem;
  margin: auto;
  position: relative;
}

.router {
  position: absolute;
  height: 100%;
  width:100%;
  top: 0;
  /* transition: all 0.377s ease; */
  /* will-change: transform; */
  /* backface-visibility: hidden; */
  /* perspective: 1000; */
}

.slide-left-enter, .slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%)
}

.slide-left-leave-to, .slide-right-enter {
  opacity: 0;
  transform: translateX(-100%)
}

.slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
  transition: 1.5s;
  position: absolute;
  top:0;
}

</style>
