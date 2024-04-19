<template>
  <v-main>
    <v-container fill-height fluid>
      <v-row v-if="!doomCaptchaStatus" justify="center" align="center">
        <v-col cols="auto">DOOM Captcha－完成遊戲後繼續</v-col></v-row
      >
      <v-row v-if="!doomCaptchaStatus" justify="center" align="center">
        <v-col cols="auto"
          ><doom-captcha
            label="完成遊戲繼續"
            :enemies="5"
            countdown="30"
            @captcha-done="onCaptchaDone"
          ></doom-captcha
        ></v-col>
      </v-row>

      <v-row
        v-if="!isCorrectPassword && doomCaptchaStatus"
        justify="center"
        align="center"
      >
        <v-card elevation="2" outlined>
          <v-col cols="auto">
            <v-card-title class="pb-0 justify-center font-weight-bold"
              >輸入密碼以查看履歷</v-card-title
            >
            <Verify-input-field ref="verifyField" @emitCode="checkPassword" />

            <v-col cols="auto" class="text-center">
              提示: 本日日期 (MM/DD)
            </v-col>
          </v-col>
        </v-card>
      </v-row>

      <v-row v-if="isCorrectPassword" justify="center" align="center">
        <v-col cols="auto">
          <Resume-time-line></Resume-time-line>
        </v-col>
      </v-row>

      <v-snackbar
        v-model="snackbarPopupSuccess"
        color="primary"
        outlined
        multi-line
        text
        :timeout="timeout"
      >
        {{ `密碼正確` }}
        <template #action="{ attrs }">
          <v-btn
            color="green"
            text
            v-bind="attrs"
            @click="snackbarPopupSuccess = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>

      <v-snackbar
        v-model="snackbarPopupFailure"
        color="red"
        text
        outlined
        :timeout="timeout"
      >
        {{ `密碼錯誤` }}
        <template #action="{ attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbarPopupFailure = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>

      <v-overlay :opacity="0.8" :value="overlay">
        <v-progress-circular indeterminate size="64">
          Loading...
        </v-progress-circular>
      </v-overlay>
    </v-container>
  </v-main>
</template>

<script>
import VerifyInputField from '@/components/forms/verifyInputField'
import ResumeTimeLine from '@/components/resumeTimeLine'
import DoomCaptcha from '@/components/DoomCaptcha.vue'
export default {
  components: {
    VerifyInputField,
    ResumeTimeLine,
    DoomCaptcha,
  },
  data() {
    return {
      inputPassword: '',
      password: '',
      isCorrectPassword: false,
      timeout: 2000,
      snackbarPopupSuccess: false,
      snackbarPopupFailure: false,
      overlay: false,
      doomCaptchaStatus: false,
    }
  },

  created() {
    this.isCorrectPassword = false
    const date = new Date()
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    this.password = `${month}${day}`
  },

  methods: {
    onCaptchaDone(success) {
      if (success) {
        this.doomCaptchaStatus = true
      }
    },
    checkPassword(code) {
      if (code === this.password) {
        this.overlay = true
        setTimeout(() => {
          this.$nextTick(() => {
            this.overlay = false
            this.isCorrectPassword = true
            this.snackbarPopupSuccess = true
          })
        }, 800)
      } else {
        this.overlay = true
        setTimeout(() => {
          this.$nextTick(() => {
            this.overlay = false
            this.$refs.verifyField.reset()
            this.snackbarPopupFailure = true
          })
        }, 800)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
