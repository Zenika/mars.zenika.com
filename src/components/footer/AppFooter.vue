<template>
	<div v-if="data" class="section-footer">
		<div class="footer-content">
			<div class="contact">
        <a v-if="data.address" class="contact-item address">
					<i class="material-icons">location_on</i>
					<p>{{data.address}}</p>
				</a>
				<a v-if="data.phone" class="contact-item phone" :href="'tel:' + data.phone">
					<i class="material-icons">phone</i>
					<p>{{data.phone}}</p>
				</a>
				<a v-if="data.mail" class="contact-item email" :href="'mailto:' + data.mail">
					<i class="material-icons">email</i>
					<p>{{data.mail}}</p>
				</a>
				<div class="contact-item">
					<i class="material-icons">language</i>
					<p>
						<a target="_blank" href="https://www.zenika.com/">zenika.com</a> 
						<a target="_blank" href="https://www.nantes.zenika.com/">nantes.zenika.com</a>
					</p>
					
				</div>
			</div>
			<div class="social">
				<p class="social-networks-title">Réseaux sociaux</p>
				<div class="social-networks">
					<a v-if="data.twitter" target="_blank" class="link" :href="data.twitter">
						<img class="logo pointer" src="static/assets/img/twitter.svg">
					</a>
					<a class="link" target="_blank" v-if="data.github" :href="data.github">
						<img class="logo pointer" src="static/assets/img/github.svg">
					</a>
					<a class="link" target="_blank" v-if="data.linkedin" :href="data.linkedin">
						<img class="logo pointer" src="static/assets/img/linkedin.svg">
					</a>
					<a class="link" target="_blank" v-if="data.facebook" :href="data.facebook">
						<img class="logo pointer" src="static/assets/img/facebook.svg">
					</a>
						<a class="link" target="_blank" v-if="data.meetup" :href="data.meetup">
						<img class="logo pointer" src="static/assets/img/meetup.svg">
					</a>
				</div>
			</div>
			<div class="other-infos">
				<img class="grea-place-to-work-img" src="static/assets/img/great-place-to-work.png" />
				<p class="copyright">Copyright 2006-2018 Zenika - <router-link class="legal-notices" to="legal-notices">Mentions légales</router-link></p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('footer', [
    'data'
  ])
}
</script>

<style lang="scss" scoped>
@import '~variables/vars.scss';

.section-footer {
	width: 100%;
	background: $black-color;

	.footer-content {
		padding: 30px 50px;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		flex-flow: row wrap;

    & > * {
      flex-basis: 33%;
    }

    .social {
			text-align: center;
    }

		.social-networks {
			display: flex;
      justify-content: center;

			.link {
				height: 40px;
				width: auto;
				padding: 0 10px;

				.logo {
					height: 100%;
				}
			}
		}

		.other-infos {
			display: flex;
			flex-direction: column;
      text-align: right;

			.grea-place-to-work-img {
				max-width: 150px;
				margin: 10px 0;
				margin-left: auto;

        // margin: 25px auto 15px;
			}

			.copyright {
				margin: 10px 0;

				.legal-notices {
					color: white;
				}
			}
		}

		.contact {
			.contact-item {
				display: flex;
				align-items: center;

				&.address, &.phone, &.email {
					color: white;
					text-decoration: none;
				}

				i {
					margin-right: 10px;
				}

				p {
					margin: 10px 0;
				}

				a {
					color: white;
				}
			}
		}
	}
}

@media (max-width: 1100px) {
  .section-footer {
    .footer-content {
      flex-direction: column;
      align-items: center;

      .contact {
        text-align: center;

        .contact-item {
          justify-content: center;
        }
      }

      .other-infos {
        text-align: center;

        .grea-place-to-work-img {
          margin: 30px auto 10px auto;
        }
      }
    }
  }
}
</style>
