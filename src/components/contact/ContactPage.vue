<template>
  <!-- EN CONSTRUCTION -->
  <div class="section-container section-contact">
    <h1 class="page-title">Nous contacter</h1>
    <div class="contact-form-success" v-if="success">
      <div class="success">
        <i class="material-icons">done</i>
      </div>
    </div>
    <form class="contact-form" v-if="!success" v-on:submit.prevent="send()">
      <div class="container">
        <span>Bonjour Zenika !</span>
      </div>
      <div class="container">
        <span>Je recherche</span>
        <select class="contact-input" v-model="mail.searchSelected">
          <option value="expertise">de l'expertise</option>
          <option value="formation">une formation</option>
          <option value="zenbox">une ZenBox</option>
          <option value="evenement">un évènement</option>
          <option value="job">un job</option>
        </select>
        <span  v-if="showSur()">&nbsp;sur&nbsp;</span>
        <select class="contact-input formation-select"
                v-if="showFormations()"
                v-model="formationSelected">
          <optgroup label="Sur le sujet">
            <option v-bind:value="formation.title" v-for="formation in formations">{{formation.title}}</option>
          </optgroup>
          <optgroup label="Sur un domaine">
            <option v-bind:value="domaine.title" v-for="domaine in domaines">{{domaine.title}}</option>
          </optgroup>
        </select>
        <select class="contact-input"
                v-if="showDomains()"
                v-model="domainSelected">
          <option v-bind:value="domaine.title" v-for="domaine in domaines">{{domaine.title}}</option>
        </select>
      </div>
      <div class="container">
        <span>Je m'appelle</span>
        <input class="contact-input name" v-model="mail.firstname" type="text" placeholder="Prénom">
        <input class="contact-input name" v-model="mail.lastname" type="text" placeholder="Nom">
      </div>
      <div class="container">
        <span>et vous pouvez me contacter par mail sur</span>
        <input class="contact-input" type="email" v-model="mail.email" placeholder="monadresse@mail.com"
               autocomplete="email">
      </div>
      <div class="container">
        <span>Cordialement</span>
      </div>
      <div class="container right">
        <button type="submit">Envoyer</button>
      </div>
    </form>
  </div>
</template>

<script>
  import contactService from '@/services/contact.service'
  import {mapState} from 'vuex'

  export default {
    components: {},
    computed: {
      ...mapState('formation', [
        'formations'
      ]),
      ...mapState('domaines', [
        'domaines'
      ])
    },
    data () {
      return {
        mail: {
          searchSelected: 'formation',
          email: null,
          firstname: null,
          lastname: null
        },
        formationSelected: null,
        domainSelected: null,
        success: false
      }
    },
    watch: {
      formations: function () {
        this.formationSelected = this.formations[0].title
      },
      domaines: function () {
        this.domainSelected = this.domaines[0].title
      }
    },
    methods: {
      send () {
        switch (true) {
          case this.mail.searchSelected === 'formation':
            this.mail.formation = this.formationSelected
            delete this.mail.domain
            break
          case this.mail.searchSelected === 'expertise':
          case this.mail.searchSelected === 'job':
            this.mail.domain = this.domainSelected
            delete this.mail.formation
            break
        }
        contactService.sendMail(
          this.mail
        ).then(() => {
          this.success = true
        })
      },
      showSur: function () {
        return ['formation', 'expertise', 'job'].indexOf(this.mail.searchSelected) > -1
      },
      showDomains: function () {
        return ['expertise', 'job'].indexOf(this.mail.searchSelected) > -1
      },
      showFormations: function () {
        return ['formation'].indexOf(this.mail.searchSelected) > -1
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~variables/vars.scss';

  .section-contact {
    width: 100%;
    padding-bottom: 0px;
    color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .page-title {
      padding: 0 !important;
    }

    .contact-form {
      background-color: rgba(0, 0, 0, 0.6);
      padding: 40px;
      width: 700px;

      @media (max-width: 982px) {
        width: 80%;
      }
    }

    .contact-form .container {
      display: flex;
      flex-direction: column;
      flex-flow: row wrap;
      margin: auto auto 1rem;

      @media (max-width: 740px) {
        margin-bottom: 30px;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-right: 10px;
      }
      &.right {
        justify-content: flex-end;
      }
      button {
        background: $zenika-color;
        color: #FFF;
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
      }
    }
    .contact-input {
      background-color: rgba(0, 0, 0, 0.3);
      border: 0;
      border-bottom: 3px solid #b31835;
      color: #FFF;
      display: block;
      font-size: 1.25rem;
      height: 40px;
      line-height: 1.5;
      margin-right: 10px;
      margin-top: 10px;
      max-width: 250px;
      min-width: 215px;
      padding: 3px 10px;
      transition: all .15s ease-in-out;

      @media (max-width: 740px) {
        background: #b31835;
        border-radius: 5px;
        border: 0;
        box-sizing: border-box;
        display: block;
        margin-left: 0;
        margin-right: 0;
        max-width: none;
        width: 100%;

        &::placeholder {
          color: #500000;
        }
        &::-webkit-input-placeholder {
          color: #500000;
        }
        &::-moz-placeholder {
          color: #500000;
        }
        &:-ms-input-placeholder {
          color: #500000;
        }
      }

      option {
        background-color: #222;

      }
    }
    .success {
      text-align: center;
      $size: 5em;
      i {
        margin-top: $size / 5;
        font-size: $size;
        background: rgba(0,0,0,0.5);
        border: 20px solid $green-button-color;
        color: $green-button-color;
        border-radius: 50%;
        animation: successAnimation 1s forwards;
      }
      @keyframes successAnimation {
        from {
          font-size: 5em;
          margin-top: $size / 5;
        }
        to {
          font-size: 20em;
          margin-top: $size / 20;
        }
      }
    }
  }
</style>
