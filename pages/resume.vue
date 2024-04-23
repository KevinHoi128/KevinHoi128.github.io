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
import DoomCaptcha from '@/components/doomCaptcha'
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

    this.detectMobile()
      ? (this.doomCaptchaStatus = true)
      : (this.doomCaptchaStatus = false)
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

    detectMobile() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera

      // 检查用户代理字符串中是否包含手机特定的关键词
      if (/android/i.test(userAgent)) {
        return true // 对于Android设备
      }

      // iOS设备
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return true // 对于iOS设备
      }

      // 包含'Windows Phone'的为Windows手机
      if (/Windows Phone/i.test(userAgent)) {
        return true // 对于Windows手机
      }

      // 包含'Mobile'这一个更通用的关键词，捕获其他手机
      if (/Mobile/i.test(userAgent)) {
        return true // 对于其他标记为Mobile的设备
      }

      return false // 默认不是手机
    },
  },
}
</script>

<style lang="scss" scoped></style>
