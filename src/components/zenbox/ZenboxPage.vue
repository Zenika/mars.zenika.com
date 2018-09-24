<template>
  <div>
    <div class="section-container section-zenbox">
      <div class="page-header">
        <div class="page-header-content">
          <h1 class="page-title">Zenbox</h1>
          <div class="page-description flex-align">
            <img class="fractal-img" src="static/assets/img/fractal2.png" />
            <p v-html="zenboxDescription"></p>
            <img class="fractal-img" src="static/assets/img/fractal1.png" />
          </div>
         <div class="flex-align categories-list-wrapper">
          <div class="category" v-for="zenboxCategory in zenboxCategories">
            <img class="category-icon" :src="zenboxCategory.icon" />
            <h3 v-html="zenboxCategory.name"></h3>
            <p v-html="zenboxCategory.description"></p>
          </div>
        </div>
        </div>
        <div class="next-section pointer" v-scroll-to="'#zenbox'">
          <p class="discover-offers">Découvrir nos offres</p>
          <img class="down-arrow pointer" src="static/assets/img/down-arrow.png" />
        </div>
      </div>

      <div id="zenbox" class="flex-align page-content">
        <div class="zenbox-categories-list">
          <div class="zenbox-category-wrapper" v-for="(zenboxCategory, index) in zenboxCategories">
            <zenbox-category :data="zenboxCategory" @click.native="selectZenboxCategory(index)" :isSelected="selectedZenboxCategoryIndex === index"></zenbox-category>
          </div>
        </div>
        <selected-zenbox-category class="selected-zenbox-category"></selected-zenbox-category>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ZenboxCategory from '@/components/zenbox/ZenboxCategory'
import SelectedZenboxCategory from '@/components/zenbox/SelectedZenboxCategory'

export default {
  methods: mapActions('zenbox', ['selectZenboxCategory']),
  computed: {
    ...mapState('zenbox', ['zenboxCategories', 'selectedZenboxCategoryIndex']),
    ...mapState('pagesDescription', ['zenboxDescription'])
  },
  components: {
    ZenboxCategory,
    SelectedZenboxCategory
  }
}
</script>

<style lang='scss' scoped>
@import '~variables/vars.scss';

.section-zenbox {
  width: 100%;

  .page-header {
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;
    justify-content: center;

    .fractal-img {
      max-width: 17%;
      height: auto;
      width: auto;
      margin: 0 50px;

      @media (max-width: 1280px) {
        display: none;
      }
    }
    .page-header-content {
      width: 100%;

      .page-description {
        width: 70% !important;

        @media (max-width: 982px) {
          width: 80% !important;
        }
      }

      .categories-list-wrapper {
        width: 80%;
        margin: auto;
        margin-top: 0px;
        justify-content: space-around;
        flex-flow: row wrap;

        .category {
          max-width: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          img {
            height: 100px;
          }

          h3 {
            margin-bottom: 0;
          }

          p {
            text-align: center;
          }
        }
      }
    }

    .next-section {
      margin: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .discover-offers {
        font-weight: bold;
        margin-bottom: 10px;
      }

      .down-arrow {
        height: 40px;
        width: 40px;
      }
    }
  }

  .page-content {
    height: $selected-zenbox-category-wrapper-height;

    .zenbox-categories-list {
      min-width: 100px;
      width: 100%;
      height: 100%;
      background: white;
      position: relative;
      flex: 0.1;

      .zenbox-category-wrapper {
        height: 33.3%;
        position: relative;
        cursor: pointer;
        background: white;

        &:not(:first-child) {
          margin-top: 2px;
          margin-bottom: 2px;
        }
      }
    }

    .selected-zenbox-category {
      flex: 0.9;
      height: 100%;
    }
  }
}
</style>
