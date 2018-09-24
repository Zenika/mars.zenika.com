
<template>
  <div class="wrapper">
    <!-- Zenbox item selection -->
    <div class="left-part">
      <div class="content">
        <div v-if="filteredZenboxItems" v-for="(zenboxItem, index) in filteredZenboxItems" @click="selectZenboxItem(index)" :class="['zenbox-item', {'selected': selectedZenboxItem && zenboxItem === selectedZenboxItem}]">
          <div class="zenbox-item-title">{{zenboxItem.title}}</div>
        </div>
      </div>
    </div>

    <!-- Zenbox selected item visualisation -->
    <div class="right-part">
      <div class="swiper-container-zenbox">
        <div class="swiper-wrapper">
          <div v-for="zenboxCategory in zenboxCategories" class="swiper-slide">
            <div class="zenbox-category-image" :style="'background-image: url(' + zenboxCategory.image + ')'"></div>
          </div>
        </div>
      </div>
      <div v-if="selectedZenboxItem" :class="['selected-zenbox-item', {'black-filter': selectedZenboxItem}]">
        <div class="selected-zenbox-item-content" v-if="selectedZenboxItem">
          <h2 class="title">{{selectedZenboxItem.title}}</h2>
          <div class="other-infos">
            <div v-if="selectedZenboxItem.prerequisites && selectedZenboxItem.prerequisites.length">
              <h4 class="prerequisites">Prérequis
                <div class="tag-list">
                  <div v-for="prerequisite in selectedZenboxItem.prerequisites" class="tag tag-yellow">#{{prerequisite}}</div>
                </div>
              </h4>
            </div>
            <div class="other-infos-wrapper">
              <h4 class="info-item" v-if="selectedZenboxItem.duration">
                <i class="material-icons">access_time</i>{{selectedZenboxItem.duration}}</h4>
              <h4 class="info-item" v-if="selectedZenboxItem.difficulty">Difficulté :
                <i v-for="i in 5" class="material-icons">{{selectedZenboxItem.difficulty >= i ? 'star' : 'star_border'}}</i>
              </h4>
            </div>
          </div>
          <div class="description" v-html="selectedZenboxItem.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Swiper from 'swiper'

export default {
  data () {
    return {
      swiper: null
    }
  },
  computed: {
    ...mapGetters('zenbox', ['filteredZenboxItems']),
    ...mapState('zenbox', [
      'selectedZenboxIndex',
      'selectedZenboxCategoryIndex',
      'zenboxCategories'
    ]),
    selectedZenboxItem () {
      return this.filteredZenboxItems[this.selectedZenboxIndex]
    }
  },
  mounted () {
    this.swiper = new Swiper('.swiper-container-zenbox', {
      observer: true,
      observeParents: true,
      effect: 'fade',
      initialSlide: this.selectedZenboxCategoryIndex
    })
  },
  methods: mapActions('zenbox', ['selectZenboxItem']),
  watch: {
    selectedZenboxCategoryIndex (newIndex) {
      this.swiper.slideTo(newIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~swiper/dist/css/swiper.min.css';
@import '~variables/vars.scss';

.wrapper {
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;

  .left-part {
    flex: 1;
    color: #222;
    height: 100%;

    .content {
      margin: 40px;
      height: calc(100% - 80px);
      overflow-y: auto;
      color: $grey-color;

      .zenbox-item {
        min-height: $zenbox-item-min-height;
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: space-between;
        border-bottom: 1px solid $light-grey-color;
        transition: background-color 0.2s;

        &.selected,
        &:hover {
          background-color: rgba(128, 180, 227, 0.2);
        }

        .zenbox-item-title {
          padding-left: 10px;
        }

        .tag-list {
          justify-content: flex-end;

          .tag {
            margin: 10px;
          }

          .tag-blue {
            color: white;
            background-color: rgba(128, 180, 227, 0.8);
          }
        }
      }

      @media (max-width: 540px) {
        margin: 15px;
        height: calc(100% - 30px);
      }
    }
  }

  .right-part {
    flex: 1;
    overflow: hidden;
    position: relative;

    .swiper-container-zenbox {
      width: 100%;
      height: 100%;

      .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;

        .zenbox-category-image {
          height: 100%;
          width: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }

    .selected-zenbox-item {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 5;
      background-color: rgba(0, 0, 0, 0);
      transition: background-color 0.3s;

      .selected-zenbox-item-content {
        width: 80%;
        height: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .title {
          margin: 0;
          margin-bottom: 20px;
        }

        .other-infos {
          display: flex;
          border-bottom: 1px solid grey;
          display: inline-table;
          margin-bottom: 15px;

          .tag-yellow {
            color: white;
            background-color: rgba(244, 197, 71, 0.6);
          }

          .prerequisites {
            margin-bottom: 20px;
            margin-top: 0;

            .tag-list {
              margin-top: 10px;
            }
          }

          .other-infos-wrapper {
            display: flex;

            .info-item {
              margin-right: 20px;
              display: flex;
              align-items: center;
              margin-top: 0px;
              margin-bottom: 10px;

              i:first-child {
                margin-left: 5px;
              }

              i {
                margin-right: 5px;
                font-size: 16px;
              }
            }
          }
        }
      }
      &.black-filter {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }

    @media (max-width: 982px) {
      display: none;
    }
  }
}
</style>
