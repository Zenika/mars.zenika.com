<template>
  <div class="section-container section-testimonials">
    <h1 class="title">Témoignages</h1>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="item in items" class="swiper-slide">
          <div class="testimonial-wrapper">
            <div class="flex-align testimonial-header">
              <img class="testimonial-picture" :src="item.picture" />
              <h2 class="testimonial-author">{{item.author}} - {{item.position}} chez {{item.company}}</h2>
            </div>
            <div class="testimonial-content">« {{item.content}} »</div>
          </div>
        </div>
      </div>
      <div class="swiper-button-next">
        <i class="material-icons">keyboard_arrow_right</i>
      </div>
      <div class="swiper-button-prev">
        <i class="material-icons">keyboard_arrow_left</i>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      slider: null
    }
  },
  mounted () {
    this.slider = new Swiper('.swiper-container', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 30,
      loop: true
    })
  },
  computed: mapState('testimonials', [
    'items'
  ])
}
</script>

<style scoped lang="scss">
@import '~variables/vars.scss';
@import '~swiper/dist/css/swiper.min.css';

.section-testimonials {
  width: 100%;

  .title {
    text-align: center;
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: $section-title-size;
  }

  .swiper-container {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin: 100px auto;

    .testimonial-header {
      margin-bottom: 30px;

      .testimonial-author {
      }

      .testimonial-picture {
        height: 80px;
        width: auto;
        border-radius: 50%;
        margin-right: 30px;
      }
    }

    .testimonial-wrapper {
      max-width: 1000px;
      margin: auto;

      .testimonial-content {
        font-size: 20px;
				overflow-wrap: break-word;
      }

      @media (max-width: 1500px) {
        & {
          margin: 0 100px;
        }
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      background-image: none;
      height: 50px;
      width: 50px;

      .material-icons {
        font-size: 60px;
        display: block;
      }
    }
  }
}
</style>
