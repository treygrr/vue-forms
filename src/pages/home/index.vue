<template>
<div>
  <article>
    <Quiz v-bind:questions="questions"/>
  </article>
</div>
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
}

div {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
}

article {
  width: 50vw;
  height: 50vh;
  max-height: 50vh;
  overflow: scroll;
  border: 1px solid #000;
}
</style>