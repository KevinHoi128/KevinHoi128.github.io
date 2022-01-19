<template>
  <v-row justify="center" class="mb-2 mx-2">
    <v-col cols="auto">
      <div class="captcha">
        <input
          v-for="(c, index) in ct"
          :key="index"
          ref="input"
          v-model="ct[index]"
          :style="{ borderBottomColor: index <= cIndex ? '#fff' : '#000' }"
          :disabled="loading"
          @input="
            (e) => {
              onInput(e.target.value, index)
            }
          "
          @keydown.delete="
            (e) => {
              onKeydown(e.target.value, index)
            }
          "
          @focus="onFocus"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      ct: ['', '', '', ''],
      loading: false,
    }
  },
  computed: {
    ctSize() {
      return this.ct.length
    },
    cIndex() {
      let i = this.ct.findIndex((item) => item === '')
      i = (i + this.ctSize) % this.ctSize
      return i
    },
    lastCode() {
      return this.ct[this.ctSize - 1]
    },
  },
  watch: {
    cIndex() {
      this.resetCaret()
    },
    lastCode(val) {
      if (val) {
        this.$refs.input[this.ctSize - 1].blur()
        this.emitCaptcha()
      }
    },
  },
  mounted() {
    this.resetCaret()
  },
  methods: {
    onInput(val, index) {
      val = val.replace(/\s/g, '')
      if (index === this.ctSize - 1) {
        this.ct[this.ctSize - 1] = val[0]
      } else if (val.length > 1) {
        let i = index
        for (i = index; i < this.ctSize && i - index < val.length; i++) {
          this.ct[i] = val[i]
        }
        this.resetCaret()
      }
    },
    resetCaret() {
      this.$refs.input[this.ctSize - 1].focus()
    },
    onFocus() {
      let index = this.ct.findIndex((item) => item === '')
      index = (index + this.ctSize) % this.ctSize
      this.$refs.input[index].focus()
    },
    onKeydown(val, index) {
      if (val === '') {
        if (index > 0) {
          this.ct[index - 1] = ''
          this.$refs.input[index - 1].focus()
        }
      }
    },
    emitCaptcha() {
      this.$emit('emitCode', this.ct.join(''))
    },

    reset() {
      this.ct = this.ct.map((item) => '')
      this.resetCaret()
    },
  },
}
</script>

<style scoped>
.captcha {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
input {
  margin-right: 20px;
  width: 45px;
  text-align: center;
  border: none;
  border-bottom: 1px solid #eee;
  color: white;
  /* outline: none; */
  font-size: 24px;
}
input:last-of-type {
  margin-right: 0;
}
input:focus {
  outline: none !important;
  border: 1px solid #fff;
  box-shadow: 0 0 10px #fff;
}
/* input:disabled {
  color: #000;
  background-color: #fff;
} */
</style>