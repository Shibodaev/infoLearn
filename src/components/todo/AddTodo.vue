<template lang="pug">
form(@submit.prevent="onSubmit")
    input(type="text" v-model="title")
    button(type="submit") Creaate
</template>

<script>
export default {
  data() {
    return {
      title: " "
    };
  },

  methods: {
    onSubmit() {
      if (this.title.length > 0) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          comleted: false
        };
        this.$emit("add-todo", newTodo);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  height: 40px;
  max-width: 300px;
  margin: 20px auto;
  position: relative;
  font-size: 16px;

  input {
    flex: 2 1 0;
  }

  button {
    flex: 1 1 0;
    background-color: green;
    color: white;
  }
}
</style>
