<template>
  <div class="wrapper">
    <div class="header">
      <h2 class="title">{{data.title}}</h2>
      <chip :color="color(data.type)">{{ data.type }}</chip>
    </div>
    <div class="speakers-list">
      <div class="speaker" v-for="speaker in data.speakers">
        <member-picture class="member-pic" :data="speaker"></member-picture>
        <div>{{speaker.fullName}}</div>
      </div>
    </div>
    <p class="description" v-html="data.description"></p>
    <div class="additional-infos">
      <a v-if="data.event && ['Codelab', 'Talk'].indexOf(data.type) > -1" class="link-event" :href="data.event" target="_blank">
        <i class="material-icons">link</i>
        <p>{{data.entity}}</p>
      </a>
      <znk-button v-else="data.event" :href="data.event">Participer</znk-button>
      <a v-if="data.video" class="video" :href="data.video" target="_blank">
        <i class="material-icons">personal_video</i>
        <p>Voir la vidéo</p>
      </a>
      <div v-if="data.adress" class="adress">
        <i class="material-icons">place</i>
        <p>{{data.adress}}</p>
      </div>
      <div class="row">
        <div v-if="data.datestart" class="date">
          <i class="material-icons">date_range</i>
          <p>{{formattedDate}}</p>
        </div>
        <div v-if="data.datestart && data.dateend" class="hour">
          <i class="material-icons">access_time</i>
          <p>{{formattedHourStart}} - {{formattedHourEnd}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/shared/Button";
import Chip from "@/components/shared/Chip";
import MemberPicture from "@/components/shared/MemberPicture";
import eventMixin from "@/mixins/event.mixin";

export default {
  props: ["data"],
  mixins: [eventMixin],
  computed: {
    // Remove accents & lowercase
    normalizedType() {
      return this.data.type
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    },
    formattedDate() {
      return this.data.datestart.format("DD MMMM YYYY");
    },
    formattedHourStart() {
      return this.data.datestart.format("HH:mm");
    },
    formattedHourEnd() {
      return this.data.dateend.format("HH:mm");
    }
  },
  components: {
    ZnkButton: Button,
    Chip,
    MemberPicture
  }
};
</script>

<style lang="scss" scoped>
@import "~variables/vars.scss";

.wrapper {
  padding: 40px;
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.2);

  .header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;

    .title {
      margin: 0;
    }

    .chip {
      margin-left: 10px;
      margin-right: -40px;
    }
  }

  .description {
    padding-right: 10px;
    height: 200px;
    overflow-y: auto;

    @media (max-width: 924px) {
      height: auto;
      max-height: 200px;
    }
  }

  .additional-infos {
    p {
      margin: 0;
      font-size: 16px;
    }
  }

  .speakers-list {
    display: flex;
    justify-content: space-around;

    .speaker {
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: bold;
      text-align: center;

      .member-pic {
        height: $event-member-pic-size;
        width: $event-member-pic-size;
        margin-bottom: 5px;
      }
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .date,
  .hour,
  .adress,
  .video,
  .link-event {
    font-weight: bold;
    display: flex;
    align-items: center;
    color: white;

    i {
      margin-right: 5px;
    }
  }

  .video,
  .link-event,
  .adress {
    margin-bottom: 7px;
  }

  .date {
    text-transform: capitalize;
  }

  .video,
  .link-event {
    text-decoration: none;
  }

  .button-event {
    padding: 5px 20px;
    color: white;
    background-color: $zenika-color-transparency;
    border: 1px solid $zenika-color;
    display: inline-block;
    margin: 10px 0 20px;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      background-color: $zenika-color;
    }
  }
}
</style>




message = 'success';