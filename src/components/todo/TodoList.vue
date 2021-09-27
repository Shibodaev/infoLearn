<template lang="pug">
ul.todolist-block
    <TodoItem v-for=" (item, i  ) of todos" v-bind:item="item" v-bind:index="i"  :key="item.id" v-on:remove-item="removeItem"/>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  props: ["todos"],
  components: {
    TodoItem
  },
  methods: {
    removeItem(id) {
      this.$emit("remove-item", id);
    },
  }
};
</script>

<style lang="scss">
.todolist-block {
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000;
  width: 100%;
  max-width: 300px;
  margin: 30px auto;
  padding: 0;
}
</style>
