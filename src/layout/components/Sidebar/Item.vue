<template>
<div>
  <svg-icon v-if="$props.icon" :icon-class="$props.icon" />
  <span>{{ $props.title }}</span>
</div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: ['icon', 'title']
}
</script>
