<template>
  <input class="form-control" :type="type" @input="$emit('input', $event.target.value)" />
</template>
<script>
export default {
  props: ['type']
}
</script>
