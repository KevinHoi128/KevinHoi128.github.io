<template>
  <div class="resume-time-line">
    <v-row>
      <v-col>
        <v-card class="mt-8">
          <v-card-title class="blue white--text">
            <span class="text-h6">學歷</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="py-4">
            <v-timeline align-top dense>
              <v-timeline-item color="red" small>
                <v-row class="pt-1">
                  <v-col cols="5">
                    <strong>2018/06</strong>
                  </v-col>
                  <v-col cols="7">
                    <strong>澳門理工學院</strong>
                    <div class="text-caption">電腦學學士/本科</div>
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item color="orange" small>
                <v-row class="pt-1">
                  <v-col cols="5">
                    <strong>2014/07</strong>
                  </v-col>
                  <v-col cols="7">
                    <strong>澳門工聯職業技術中學</strong>
                    <div class="text-caption">電腦科/高中</div>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>

        <v-card class="mt-8">
          <v-card-title class="green white--text">
            <span class="text-h6">工作經歷</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="py-4">
            <v-timeline align-top dense>
              <v-timeline-item color="red" small>
                <v-row class="pt-1">
                  <v-col cols="5">
                    <strong>2020/05 - 至今</strong>
                  </v-col>
                  <v-col cols="7">
                    <strong>Alphasolution</strong>
                    <div class="text-caption">Software developer</div>
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item color="orange" small>
                <v-row class="pt-1">
                  <v-col cols="5">
                    <strong>2019/08 - 2020/05</strong>
                  </v-col>
                  <v-col cols="7">
                    <strong>AIA Insurance</strong>
                    <div class="text-caption">
                      Financial Planning Consultant
                    </div>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>

        <v-card class="mt-8">
          <v-card-title class="yellow black--text">
            <span class="text-h6">技術棧</span>
          </v-card-title>
          <v-card-text class="py-4">
            <v-row>
              <v-col cols="6">
                <div class="text-center mb-4 title">前端</div>
                <div
                  v-for="(skillstack, index) in frontEndSkillStack"
                  :key="`${index}+fe`"
                  class="mt-4"
                >
                  <Skill-field :skill-stack="skillstack"></Skill-field>
                </div>

                <div class="text-center mt-8 mb-4 title">後端</div>
                <div
                  v-for="(skillstack, index) in backEndSkillStack"
                  :key="`${index}+be`"
                  class="mt-4"
                >
                  <Skill-field :skill-stack="skillstack"></Skill-field>
                </div>
              </v-col>

              <v-col cols="6">
                <div class="text-center mb-4 title">其他相關技術</div>
                <div
                  v-for="(skillstack, index) in relatedSkillStack"
                  :key="`${index}+re`"
                  class="mt-4"
                >
                  <Skill-field :skill-stack="skillstack"></Skill-field>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card class="mt-8">
          <v-card-title class="purple darken-4 white--text">
            <span class="text-h6">證書及獎項</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="py-4">
            <v-timeline align-top dense>
              <v-timeline-item color="red" small>
                <v-row class="pt-1">
                  <v-col cols="5">
                    <strong>2018/10</strong>
                  </v-col>
                  <v-col cols="7">
                    <v-tooltip left eager>
                      <template #activator="{ on, attrs }">
                        <strong v-bind="attrs" v-on="on" class="hovered"
                          >第四屆中國＂互聯網+＂大學生創新創業比賽銀獎</strong
                        >
                      </template>
                      <v-img
                        max-height="400"
                        max-width="400"
                        src="/img/互聯網+比賽獲獎證書+watermark.jpg"
                      ></v-img>
                    </v-tooltip>
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item color="orange" small>
                <v-row class="pt-1">
                  <v-col cols="5">
                    <strong>2018/06</strong>
                  </v-col>
                  <v-col cols="7">
                    <v-tooltip left eager>
                      <template #activator="{ on, attrs }">
                        <strong v-bind="attrs" v-on="on" class="hovered"
                          >IET Certificate</strong
                        >
                      </template>
                      <v-img
                        max-height="400"
                        max-width="400"
                        src="/img/IET_Certificate+watermark.jpg"
                      ></v-img>
                    </v-tooltip>
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item color="yellow" small>
                <v-row class="pt-1">
                  <v-col cols="5">
                    <strong>2014/07</strong>
                  </v-col>
                  <v-col cols="7">
                    <v-tooltip left eager>
                      <template #activator="{ on, attrs }">
                        <strong v-bind="attrs" v-on="on" class="hovered"
                          >電腦技術員專業資格</strong
                        >
                      </template>
                      <v-img
                        max-height="400"
                        max-width="400"
                        src="/img/電腦技術員專業資格證書+watermark.jpg"
                      ></v-img>
                    </v-tooltip>
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item color="green" small>
                <v-row class="pt-1">
                  <v-col cols="5">
                    <strong>2013/05</strong>
                  </v-col>
                  <v-col cols="7">
                    <v-tooltip left eager>
                      <template #activator="{ on, attrs }">
                        <strong v-bind="attrs" v-on="on" class="hovered"
                          >Microsoft Office Specialist for Office Excel
                          2010</strong
                        >
                      </template>
                      <v-img
                        max-height="400"
                        max-width="400"
                        src="/img/Mircosoft Office specialist+watermark.jpg"
                      ></v-img>
                    </v-tooltip>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>

        <v-card class="mt-8">
          <v-card-title class="indigo darken-4 white--text">
            <span class="text-h6">重點項目/經驗</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="py-4">
            <v-row>
              <v-col cols="12">
                <v-dialog v-model="dialogControlForSecond" max-width="768">
                  <template #activator="{ on, attrs }">
                    <div
                      class="project-title pt-4 text-center"
                      v-bind="attrs"
                      v-on="on"
                    >
                      貿促局 - 投資E道
                    </div>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 black lighten-2">
                      <a
                        href="https://investhere.ipim.gov.mo/"
                        target="_blank"
                        class="a-white"
                        >投資E道</a
                      >
                    </v-card-title>

                    <v-card-text>
                      <v-img src="/img/ipim/IPIM-VoicReco.png" class="mt-8">
                      </v-img>
                      <div class="text-center mb-8">
                        <i>網站無障礙功能 - 語音朗讀</i>
                      </div>

                      <v-img
                        src="/img/ipim/IPIM-online-calculator.png"
                        class="mt-8"
                      >
                      </v-img>
                      <div class="text-center mb-8">
                        <i>線上模擬計算器</i>
                      </div>

                      <v-img
                        src="/img/ipim/IPIM-online-calculator-detail.png"
                        class="mt-8"
                      >
                      </v-img>
                      <div class="text-center mb-8">
                        <i>線上模擬計算器-計算</i>
                      </div>

                      <v-img src="/img/ipim/IPIM-Map.png" class="mt-8"> </v-img>
                      <div class="text-center mb-8">
                        <i>大灣區頁面地圖</i>
                      </div>

                      <v-img
                        src="/img/ipim/IPIM-Map-DoubleBind.png"
                        class="mt-8"
                      >
                      </v-img>
                      <div class="text-center mb-8">
                        <i>大灣區頁面地圖-雙向響應</i>
                      </div>

                      <v-img src="/img/ipim/IPIM-Botsify.png" class="mt-8">
                      </v-img>
                      <div class="text-center mb-8">
                        <i>聊天機械人客服</i>
                      </div>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        text
                        @click="dialogControlForSecond = false"
                      >
                        OK
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <div class="py-8 project-text">
                  <ul>
                    <li>負責開發網站無障礙功能 - 語音朗讀功能的開發。</li>
                    <li>
                      負責<a
                        href="https://investhere.ipim.gov.mo/macau/resources/calculator/calculator_online-mo/"
                        target="_blank"
                        >線上模擬計算器</a
                      >的開發。
                    </li>
                    <li>
                      以Vue.js及SVG開發<a
                        href="https://investhere.ipim.gov.mo/gba/"
                        target="_blank"
                        >大灣區頁面地圖</a
                      >並實現雙向響應功能。
                    </li>
                    <li>接入聊天機械人客服及進行條件式設置。</li>
                  </ul>
                </div>
              </v-col>

              <v-col cols="12">
                <v-dialog v-model="dialogControlForThird" max-width="768">
                  <template #activator="{ on, attrs }">
                    <div
                      class="project-title pt-4 text-center"
                      v-bind="attrs"
                      v-on="on"
                    >
                      與中國銀行合作項目 - 商幫
                    </div>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 black lighten-2">
                      <a
                        href="https://www.shoppoint.mo/"
                        target="_blank"
                        class="a-white"
                        >商幫</a
                      >
                    </v-card-title>

                    <v-card-text>
                      <v-img
                        src="/img/shop.forward-fashion.com.png"
                        class="mt-8"
                      >
                      </v-img>
                      <div class="text-center mb-8">
                        <i>網店首頁</i>
                      </div>

                      <v-img src="/img/Bearbrick-reg.png" class="mt-8"> </v-img>
                      <div class="text-center mb-8">
                        <i>註冊</i>
                      </div>

                      <v-img src="/img/Bearbrick-login.png" class="mt-8">
                      </v-img>
                      <div class="text-center mb-8">
                        <i>登入</i>
                      </div>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        text
                        @click="dialogControlForThird = false"
                      >
                        OK
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <div class="py-8 project-text">
                  <ul>
                    <li>
                      使用的商戶有<a
                        href="https://futurebright.shoppoint.mo/"
                        target="_blank"
                        >佳景集團</a
                      >、<a
                        href="https://vinoveritas.shoppoint.mo/"
                        target="_blank"
                        >VINO VERITAS</a
                      >等。
                    </li>
                    <li>
                      使用Vue.js、Nuxt.js、Buefy開發RWD及SSR頁面並優化SEO，使商品能於社交媒體傳播。
                    </li>
                    <li>使用Vue.js、Nuxt.js、Vuetify開發商家後台。</li>
                    <li>
                      以Node.js、MongoDB進行後端API及數據庫的開發，參與數據結構的訂立並優化API，<strong
                        ><u>使其響應時間平均減少30%。</u></strong
                      >
                    </li>
                    <li>
                      為此項目開發Direct、Moto等功能，使其與市面上流行的網店平台有所區別。並且此項目於目前有<strong
                        ><u>二十餘間本地商戶</u></strong
                      >使用。
                    </li>
                  </ul>
                </div>
              </v-col>

              <v-col cols="12">
                <v-dialog v-model="dialogControlForFirst" max-width="768">
                  <template #activator="{ on, attrs }">
                    <div
                      class="project-title pt-8 text-center"
                      v-bind="attrs"
                      v-on="on"
                      @click="dialogControlForFirst = true"
                    >
                      大中華區Bearbrick限時抽獎項目
                    </div>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 black lighten-2">
                      <a
                        href="https://shop.forward-fashion.com/"
                        target="_blank"
                        class="a-white"
                        >限時抽獎項目</a
                      >
                    </v-card-title>

                    <v-card-text>
                      <v-img
                        src="/img/shop.forward-fashion.com.png"
                        class="mt-8"
                      >
                      </v-img>
                      <div class="text-center mb-8">
                        <i>網店首頁</i>
                      </div>

                      <v-img src="/img/Bearbrick-reg.png" class="mt-8"> </v-img>
                      <div class="text-center mb-8">
                        <i>註冊</i>
                      </div>

                      <v-img src="/img/Bearbrick-login.png" class="mt-8">
                      </v-img>
                      <div class="text-center mb-8">
                        <i>登入</i>
                      </div>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        text
                        @click="dialogControlForFirst = false"
                      >
                        OK
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <div class="py-8 project-text">
                  <ul>
                    <li>
                      此項目圍繞阿里雲計算平台進行開發，最高峰時每秒負載<strong
                        ><u>一千多</u></strong
                      >條請求。
                    </li>
                    <li>
                      在此項目中主要使用Vue.js、Nuxt.js負責開發前端及後台界面、訂單、支付功能等，並在阿里雲使用Function
                      compute、使用CDN降低前端頁面的請求數量，提高負載能力。
                    </li>
                    <li>
                      後端部分以Node.js、MongoDB進行開發並負責核心計算、報表及付款功能等，開發中以Jest進行TDD測試開發，確保開發的功能正確使用，最後於阿里雲使用Function
                      compute deploy以上功能，並在生產環境中確保功能<strong
                        ><u>0錯誤率</u></strong
                      >。
                    </li>
                    <li>開發並對接相關信用卡Pre-auth、Void及Reversal功能。</li>
                  </ul>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SkillField from '@/components/forms/skillField'
export default {
  components: {
    SkillField,
  },
  data() {
    return {
      dialogControlForFirst: false,
      dialogControlForSecond: false,
      dialogControlForThird: false,
      frontEndSkillStack: [
        {
          name: 'Vue.js',
          marks: '85',
          description:
            '主力開發時使用,輔以Nuxt.js、Vuex、Buefy/Bulma、Vuetify開發。',
          color: 'blue',
        },
        {
          name: 'React.js',
          marks: '50',
          description: '曾於修改Strapi CMS源碼時使用，接觸較少。',
          color: 'yellow',
        },
        {
          name: 'JavaScript',
          marks: '85',
          description: '熟悉以es6開發。',
          color: 'blue',
        },
        {
          name: 'HTML5',
          marks: '85',
          description: '',
          color: 'blue',
        },
        {
          name: 'CSS3',
          marks: '80',
          description: '',
          color: 'blue lighten-3',
        },
      ],
      backEndSkillStack: [
        {
          name: 'Node.js',
          marks: '70',
          description: '用於開發後端API。',
          color: 'green darken-3',
        },
        {
          name: 'MongoDB',
          marks: '70',
          description: '數據庫使用,輔以MongooseJS。',
          color: 'green darken-3',
        },
        {
          name: 'PHP',
          marks: '60',
          description: '維護舊項目時使用,輔以Laravel。',
          color: 'green accent-2',
        },
        {
          name: 'SQL',
          marks: '85',
          description: '',
          color: 'blue',
        },
        {
          name: 'Redis',
          marks: '85',
          description: '使用於優化高并發量秒殺活動的商品庫存。',
          color: 'blue',
        },
      ],
      relatedSkillStack: [
        {
          name: 'Git',
          marks: '85',
          description: '使用Gitlab及Gitte托管項目，使用	Git進行版本控制。',
          color: 'blue',
        },
        {
          name: 'Docker',
          marks: '70',
          description: '配合Docker Composer使用。',
          color: 'green darken-3',
        },
        {
          name: 'Jest',
          marks: '85',
          description: '為確保後端API正常、 開發前端Unit Test時使用。',
          color: 'blue',
        },
        {
          name: 'Python',
          marks: '60',
          description:
            '於Botsify設置聊天機械人，使用	selenium開發自動化錄入程式。開發自動化錄入程式。',
          color: 'green accent-2',
        },
        {
          name: '阿里雲',
          marks: '85',
          description: '使用Function Compute、OSS、	MNS、API Gateway開發。',
          color: 'blue',
        },
        {
          name: 'Excel',
          marks: '70',
          description: '熟悉使用各類function及數據清洗。',
          color: 'green darken-3',
        },
        {
          name: 'Linux',
          marks: '85',
          description: '使用Ubuntu及開發Shell script。',
          color: 'blue',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.5rem;
}

.project-title {
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
}

.project-text {
  font-size: 1rem;
}

li {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.a-white {
  color: white;
}

.hovered {
  cursor: pointer;
}
</style>