<template>
  <i v-if="$props.icon && $props.icon.includes('el-icon')" :class="[icon, 'sub-el-icon']" />
  <svg-icon v-else-if="$props.icon" :icon-class="$props.icon" />
  <span v-if="$props.title">{{ $props.title }}</span>
</template>

<script>
export default {
  name: 'MenuItem',
  props: ['icon', 'title']
}
</script>
