<template>
    <section>
        <pre>{{ JSON.stringify(questions, null, 2) }}</pre>
    </section>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style>

</style>