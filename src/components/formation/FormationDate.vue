<template>
  <span>{{ parsedDate }}</span>
</template>

<script>
  export default {
    props: ['date'],
    computed: {
      parsedDate () {
        const date = new Date(this.date)
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        return date.toLocaleDateString('fr-FR', options)
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
