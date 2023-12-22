<template>
  <HomeView></HomeView>
  <RouterView></RouterView>
</template>

<script>
import HomeView from '@/views/HomeView'

export default {
  name: 'App',
  components: {
    HomeView,
  }
}
</script>

<style>
@import url('@/assets/variables/variables.css');

#app {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

body {
  background: #FFF;
  margin: 0;
  padding: 0;
  font-family: var(--fonte);
  color: var(--preto);
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;

}

h1 {
  font-size: 90px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  color: var(--rosa);
  text-transform: uppercase;
}

h2 {
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

h3 {
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

h4 {
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

p {
  font-size: 18px;
}
</style>
