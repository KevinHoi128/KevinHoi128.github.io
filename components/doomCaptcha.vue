<template>
  <div>
    <div v-if="captchaLabel" v-html="captchaHtml"></div>
    <iframe
      id="doom_captcha"
      ref="doomCaptcha"
      :src="captchaSrc"
      style="width: 300px; height: 150px; border: 2px black solid"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'DoomCaptcha',
  props: {
    label: {
      type: String,
      default: '',
    },
    enemies: {
      type: Number,
      default: 4,
    },
    countdown: {
      type: String,
      default: '60',
    },
  },
  data() {
    return {
      captchaVersion: 17,
      captchaDone: false,
    }
  },
  computed: {
    captchaSrc() {
      return `https://vivirenremoto.github.io/doomcaptcha/captcha.html?version=${this.captchaVersion}&countdown=${this.countdown}&enemies=${this.enemies}`
    },
    captchaHtml() {
      return this.label ? '<p>' + this.label + '<br></p>' : ''
    },
  },
  mounted() {
    window.addEventListener('message', this.handleCaptchaMessage, false)
    this.$refs.doomCaptcha
      .closest('form')
      .addEventListener('submit', this.handleSubmit)
  },
  beforeDestroy() {
    window.removeEventListener('message', this.handleCaptchaMessage, false)
  },
  methods: {
    handleCaptchaMessage(e) {
      if (e.origin.includes('vivirenremoto.github.io')) {
        this.captchaDone = true
        this.$refs.doomCaptcha.style.borderColor = 'black'
        this.$emit('captcha-done', true)
      }
    },
    // handleSubmit(event) {
    //   if (!this.captchaDone) {
    //     this.$refs.doomCaptcha.style.borderColor = 'red'
    //     event.preventDefault()
    //     return false
    //   }
    // },
  },
}
</script>
