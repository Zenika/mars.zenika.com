<template>
  <div class="events-counter">
    <h1 class="counter" :id="'counter' + id">0</h1>
    <h1 class="title">{{label}}</h1>
  </div>
</template>

<script>
import CountUp from 'countup.js'

export default {
  props: [
    'eventsCounter',
    'label',
    'id'
  ],
  mounted () {
    this.initCounter()
  },
  watch: {
    eventsCounter (value) {
      if (value) {
        this.initCounter()
      }
    }
  },
  methods: {
    initCounter () {
      const counter = new CountUp(`counter${this.id}`, 0, this.eventsCounter)
      counter.start()
    }
  }
}
</script>

<style scoped lang="scss">
.events-counter {
  padding: 20px 40px;

  .title {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 982px) {
      font-size: 24px;
    }

    i {
      font-size: 60px;
      margin-right: 5px;
    }
  }

  .counter {
    font-size: 100px;
    text-align: center;
    margin: 0;
    line-height: 1;

    @media (max-width: 982px) {
      font-size: 60px;
    }
  }

  @media (max-width: 982px) {
    padding: 20px;
    flex-basis: 50%;
    box-sizing: border-box;
  }
}
</style>
