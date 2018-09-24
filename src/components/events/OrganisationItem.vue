<template>
  <a :href="data.link" target="_blank">
    <img class="organisation-pic" :src="data.picture" :title="data.name">
  </a>
</template>

<script>
export default {
  props: [
    'data'
  ]
}
</script>

<style lang="scss" scoped>
@import '~variables/vars.scss';

.organisation-pic {
  margin: 40px;
  cursor: pointer;
  max-height: $organisation-pic-max-height;
  max-width: $organisation-pic-max-width;
  filter: grayscale(100%);
  -webkit-transition: filter 0.3s ease-in-out 0s;
  transition: filter 0.3s ease-in-out 0s;

  &:hover {
    filter: grayscale(0%);
  }

  @media (max-width: 700px) {
    margin: 20px;
  }
}
</style>
