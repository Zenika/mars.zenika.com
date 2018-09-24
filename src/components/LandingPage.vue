<template>
  <div class="landing-page-wrapper">
    <div class="main-content"  v-show="appDataLoaded">
      <header-section id="header"></header-section>
      <template v-if="appDataLoaded">
        <introduction-section id="introduction"></introduction-section>
        <testimonials-section v-if="items.length" id="testimonials"></testimonials-section>
        <testimonials-ceo v-else id="testimonials"></testimonials-ceo>
      </template>
    </div>
  </div>
</template>

<script>
import HeaderSection from '@/components/header/HeaderSection'
import Loading from '@/components/shared/Loading'
import IntroductionSection from '@/components/introduction/IntroductionSection'
import TestimonialsCeo from '@/components/testimonials/TestimonialsCeo'
import TestimonialsSection from '@/components/testimonials/TestimonialsSection'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['appDataLoaded']),
    ...mapState('testimonials', ['items'])
  },
  components: {
    HeaderSection,
    Loading,
    IntroductionSection,
    TestimonialsCeo,
    TestimonialsSection
  }
}
</script>

<style lang="scss" scoped>
  .landing-page-wrapper {
    min-height: 100vh;
  }
</style>
