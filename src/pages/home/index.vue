<template>
<main>
    <Quiz v-bind:questions="questions"/>
</main>
</template>

<script>
import Quiz from '../../components/Quiz';
export default {
  props: {
    questions: {
      type: Array,
      required: true
    }
  },
  components: {
    Quiz
  },
  data() {
    return {};
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: #465b70;
}
* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
}

</style>