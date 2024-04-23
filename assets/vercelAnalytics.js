import Vue from 'vue'
import { inject } from '@vercel/analytics'

Vue.use({
  install(VueInstance) {
    VueInstance.prototype.$injectAnalytics = inject // 作为原型方法添加，以便在组件中通过 this 调用
  },
})
