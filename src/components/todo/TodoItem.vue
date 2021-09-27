<template lang="pug">
li.todolist-block__item(v-bind:class="{done: item.completed }")
    input(type="checkbox" v-on:change="item.completed = !item.completed")
    span.number {{index + 1}}
    span.content {{item.title}}
    span.rm(v-on:click="$emit('remove-item',  item.id)") &times
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: Number
  }
};
</script>

<style lang="scss">
.todolist-block__item {
  font-size: 18px;
  line-height: 1.2;
  font-weight: bold;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  border: $black solid 1px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  *:not(:last-child) {
    margin-right: 30px;
  }

  .number {
    color: $color-main;
  }

  input {
    margin-right: 10px;
    color: $color-main;
  }

  .rm {
    border-radius: 50%;
    height: 20px;
    width: 20px;
    color: darkred;
    font-weight: 600;
    text-align: center;
    background-color: lightgray;
    cursor: pointer;
    margin-left: auto;
  }
 &.done {
     text-decoration: line-through;
  }
}
</style>
