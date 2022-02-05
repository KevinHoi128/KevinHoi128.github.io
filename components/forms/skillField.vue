<template>
  <div class="skill-field">
    <v-row>
      <v-col cols="4" class="text-center">
        <v-progress-circular
          :rotate="360"
          :size="100"
          :width="15"
          :value="marks"
          :color="skillStack.color"
        >
          {{ skillStack.marks }}</v-progress-circular
        >
      </v-col>

      <v-col cols="1"></v-col>

      <v-col cols="7" class="text-center">
        <div class="title">
          {{ skillStack.name }}
        </div>

        <div v-if="skillStack.description !== ''" class="pt-2 description">
          {{ skillStack.description }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ['skillStack'],
  data() {
    return {
      marks: parseInt(JSON.parse(JSON.stringify(this.skillStack.marks))),
      interval: {},
    }
  },

  mounted() {
    this.interval = setInterval(() => {
      if (this.marks >= 100) {
        this.marks = parseInt(JSON.parse(JSON.stringify(this.skillStack.marks)))
        return
      }
      this.marks = this.marks + 10
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: bold;
}

.description {
  text-align: justify;
  text-justify: distribute;
}
</style>