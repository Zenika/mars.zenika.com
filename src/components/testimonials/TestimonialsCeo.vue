<template>
  <div class="section-container section-testimonial-ceo">
    <h2 class="testimonial-author">Carl Azoury <span class="testimonial-role"><span>- </span>CEO et co-fondateur de Zenika</span></h2>
    <div class="testimonial-content">« Nous vivons une période disruptive sans précédent. L’internet des objets, la digitalisation des entreprises, les approches collaboratives, les Smart Nations ainsi que les réseaux sociaux transforment en profondeur les modèles économiques des "corporates" qui sont condamnées à évoluer pour ne pas se faire devancer par des start-up. Notre génération de développeurs est celle de passionné(e)s de technologie, d’innovation et qui codent, aujourd’hui même, le monde de demain »</div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import "~variables/vars.scss";

.title {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: $section-title-size;
}
.section-testimonial-ceo {
  max-width: 60%;
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
  flex-direction: column;
}
.testimonial-role {
  font-size: 0.7em;
  font-style: italic;
  color: #aaaaaa;
}

@media (max-width: 900px) {
  .section-testimonial-ceo {
    max-width: 80%;
  }
  .testimonial-role {
    display: block;

    span {
      display: none;
    }
  }
}
</style>
