<template>
  <div class="cs-page">

    <!-- NAV OFFSET -->
    <div class="cs-nav-offset"></div>

    <!-- HERO -->
    <section class="cs-hero">
      <div class="cs-container">
        <div class="cs-kicker">Case Study · 2024</div>
        <h1 class="cs-h1">AI 智能書包<br /><em>Landing Page</em></h1>
        <p class="cs-sub">從行銷文案到上線，負責 Figma 設計稿繪製與前端切版，涵蓋首頁、國小、國高中三個主頁面，共用一套設計系統。</p>

        <div class="cs-meta-row">
          <div v-for="item in metaInfo" :key="item.label">
            <div class="cs-meta-label">{{ item.label }}</div>
            <div class="cs-meta-value">{{ item.value }}</div>
          </div>
        </div>

        <div class="cs-pill-row">
          <span v-for="p in pills" :key="p" class="cs-pill">{{ p }}</span>
        </div>
      </div>
    </section>

    <!-- 00 PAGE OVERVIEW -->
    <section class="cs-section">
      <div class="cs-container">
        <div class="cs-sec-hd">
          <div class="cs-sec-num">00</div>
          <div>
            <h2 class="cs-sec-title">Page Overview<small>專案頁面全覽</small></h2>
          </div>
        </div>

        <div class="cs-think">
          <div class="cs-think-lbl">專案規模</div>
          <p>共三個主頁面，共用同一套設計系統。後面深挖首頁的四個核心決策；國小、國高中頁說明如何在同一系統下調整視覺語言。</p>
        </div>

        <div class="cs-overview-grid">
          <div v-for="(pg, i) in overviewPages" :key="i" class="cs-ov-card" :class="{ dashed: pg.dashed }">
            <div class="cs-ov-thumb" :class="{ transparent: pg.dashed }">
              <template v-if="pg.dashed">
                <span class="cs-ov-placeholder">可加入更多截圖</span>
              </template>
              <template v-else>
                <img v-if="thumbSrcs[i]" :src="thumbSrcs[i]" alt="" />
                <span v-else class="cs-ov-icon">{{ pg.icon }}</span>
                <input type="file" accept="image/*" @change="onThumb($event, i)" />
              </template>
            </div>
            <div class="cs-ov-meta">
              <div class="cs-badge" :class="{ light: pg.badgeLight }">{{ pg.badge }}</div>
              <p>{{ pg.name }}</p>
              <span>{{ pg.desc }}</span>
            </div>
          </div>
        </div>

        <div class="cs-two-col">
          <div v-for="note in pageNotes" :key="note.icon" class="cs-cross">
            <span class="cs-cross-ic">{{ note.icon }}</span>
            <p v-html="note.html" />
          </div>
        </div>
      </div>
    </section>

    <!-- 01 DESIGN THINKING -->
    <section id="cs-thinking" class="cs-section">
      <div class="cs-container">
        <div class="cs-sec-hd">
          <div class="cs-sec-num">01</div>
          <div>
            <h2 class="cs-sec-title">Design Thinking<small>設計判斷與決策 — 50%</small></h2>
          </div>
        </div>

        <div class="cs-think">
          <div class="cs-think-lbl">核心方法</div>
          <p>行銷給出文案後，先判斷「這段話想讓用戶做什麼」，再決定版型。以下選出四個最有代表性的決策，每個都有行銷原始需求和我的設計判斷兩層對照。</p>
        </div>

        <div class="cs-decision-list">
          <div v-for="(d, i) in decisions" :key="i" class="cs-di">
            <div class="cs-di-left">
              <div class="cs-di-tag">{{ d.tag }}</div>
              <div class="cs-di-page">{{ d.page }}</div>
              <div class="cs-di-title">{{ d.title }}</div>
            </div>
            <div class="cs-di-right">
              <div class="cs-brief"><strong>行銷給的：</strong>{{ d.brief }}</div>
              <div class="cs-verdict" v-html="d.verdict" />
              <div class="cs-chips">
                <span v-for="chip in d.chips" :key="chip.label" class="cs-chip" :class="{ key: chip.key }">{{ chip.label }}</span>
              </div>
              <!-- 單圖 -->
              <div v-if="d.images.length === 1" class="cs-img-wrap">
                <div class="cs-ph" :class="d.images[0].height" @click="triggerFile($event)">
                  <template v-if="!decisionImgs[i][0]">
                    <span class="cs-ph-ic">{{ d.images[0].icon }}</span>
                    <span>{{ d.images[0].placeholder }}</span>
                  </template>
                  <img v-else :src="decisionImgs[i][0]" alt="" />
                  <input type="file" accept="image/*" @change="onDecisionImg($event, i, 0)" />
                </div>
              </div>
              <!-- 雙圖 -->
              <div v-else class="cs-two-col cs-img-wrap">
                <div v-for="(img, j) in d.images" :key="j">
                  <div class="cs-lbl-sm">{{ img.label }}</div>
                  <div class="cs-ph" :class="img.height" @click="triggerFile($event)">
                    <template v-if="!decisionImgs[i][j]">
                      <span class="cs-ph-ic">{{ img.icon }}</span>
                      <span>{{ img.placeholder }}</span>
                    </template>
                    <img v-else :src="decisionImgs[i][j]" alt="" />
                    <input type="file" accept="image/*" @change="onDecisionImg($event, i, j)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 02 DESIGN SYSTEM -->
    <section id="cs-ds" class="cs-section">
      <div class="cs-container">
        <div class="cs-sec-hd">
          <div class="cs-sec-num">02</div>
          <div>
            <h2 class="cs-sec-title">Design System<small>元件、配色、字型 — 30%</small></h2>
          </div>
        </div>

        <div class="cs-think">
          <div class="cs-think-lbl">設計思考</div>
          <p>三個頁面視覺語言不同，但共用同一套 Figma 元件庫。先定義 Color Style 和 Text Style，再拆分元件，才能讓每頁「看起來不同」但「切版成本一樣低」。</p>
        </div>

        <!-- Figma 全覽 -->
        <div class="cs-block">
          <div class="cs-lbl-sm">Figma 設計稿全覽（首頁 Desktop）</div>
          <div class="cs-ph h-xl" @click="triggerFile($event)">
            <template v-if="!dsImgs.figma"><span class="cs-ph-ic">✏️</span><span>貼上 Figma 整頁設計稿截圖</span></template>
            <img v-else :src="dsImgs.figma" alt="" />
            <input type="file" accept="image/*" @change="e => onDsImg(e, 'figma')" />
          </div>
        </div>

        <hr class="cs-hr" />

        <!-- RWD Figma Frame -->
        <div class="cs-block">
          <div class="cs-lbl-sm">Figma RWD Frame 三斷點對照</div>
          <div class="cs-rwd">
            <div v-for="frame in rwdFigma" :key="frame.key" class="cs-rwd-item">
              <div class="cs-rwd-lbl"><strong>{{ frame.width }}</strong><span>{{ frame.device }}</span></div>
              <div class="cs-ph" :class="frame.height" @click="triggerFile($event)">
                <template v-if="!dsImgs[frame.key]"><span class="cs-ph-ic">{{ frame.icon }}</span><span>{{ frame.placeholder }}</span></template>
                <img v-else :src="dsImgs[frame.key]" alt="" />
                <input type="file" accept="image/*" @change="e => onDsImg(e, frame.key)" />
              </div>
            </div>
          </div>
        </div>

        <hr class="cs-hr" />

        <!-- 元件庫 -->
        <div class="cs-block">
          <div class="cs-lbl-sm">元件庫 & 設計 Styles</div>
          <div class="cs-ds-grid">
            <div v-for="card in dsCards" :key="card.key" class="cs-ds-card">
              <div class="cs-ds-hd">{{ card.head }}</div>
              <div class="cs-ds-body">
                <div class="cs-ph h-xs" @click="triggerFile($event)">
                  <template v-if="!dsImgs[card.key]"><span class="cs-ph-ic">{{ card.icon }}</span><span>{{ card.placeholder }}</span></template>
                  <img v-else :src="dsImgs[card.key]" alt="" />
                  <input type="file" accept="image/*" @change="e => onDsImg(e, card.key)" />
                </div>
              </div>
            </div>
          </div>
          <div class="cs-cross">
            <span class="cs-cross-ic">🔗</span>
            <p><strong>同一套系統，三種視覺語言</strong> — 國小頁換活潑配色，國高中頁套深色 theme，但 button、card、form 結構完全不變，切版只需替換 CSS 變數。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 03 FRONTEND CODE -->
    <section id="cs-code" class="cs-section">
      <div class="cs-container">
        <div class="cs-sec-hd">
          <div class="cs-sec-num">03</div>
          <div>
            <h2 class="cs-sec-title">Frontend Code<small>切版結構與命名規範 — 20%</small></h2>
          </div>
        </div>

        <div class="cs-think">
          <div class="cs-think-lbl">實作原則</div>
          <p>設計稿確認後，切版目標是「設計稿長什麼樣，切版就長什麼樣」。BEM 命名對應 Figma 元件層級，RWD 斷點與 Figma Frame 寬度一一對齊。</p>
        </div>

        <!-- RWD 成品 -->
        <div class="cs-block">
          <div class="cs-lbl-sm">RWD 成品截圖對照</div>
          <div class="cs-rwd">
            <div v-for="frame in rwdLive" :key="frame.key" class="cs-rwd-item">
              <div class="cs-rwd-lbl"><strong>{{ frame.width }}</strong><span>{{ frame.bp }}</span></div>
              <div class="cs-ph" :class="frame.height" @click="triggerFile($event)">
                <template v-if="!codeImgs[frame.key]"><span class="cs-ph-ic">{{ frame.icon }}</span><span>{{ frame.placeholder }}</span></template>
                <img v-else :src="codeImgs[frame.key]" alt="" />
                <input type="file" accept="image/*" @change="e => onCodeImg(e, frame.key)" />
              </div>
            </div>
          </div>
        </div>

        <hr class="cs-hr" />

        <!-- BEM -->
        <div class="cs-block">
          <div class="cs-lbl-sm">BEM 命名規範</div>
          <div class="cs-code" v-html="bemCode" />
          <div class="cs-ds-grid">
            <div v-for="card in codeCards" :key="card.key" class="cs-ds-card">
              <div class="cs-ds-hd">{{ card.head }}</div>
              <div class="cs-ds-body">
                <div class="cs-ph h-md" @click="triggerFile($event)">
                  <template v-if="!codeImgs[card.key]"><span class="cs-ph-ic">{{ card.icon }}</span><span>{{ card.placeholder }}</span></template>
                  <img v-else :src="codeImgs[card.key]" alt="" />
                  <input type="file" accept="image/*" @change="e => onCodeImg(e, card.key)" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'CaseStudyAi100',

  data() {
    return {
      // 頁面縮圖
      thumbSrcs: [null, null, null, null],

      // 決策區圖片：[決策index][圖片index]
      decisionImgs: [
        [null],
        [null, null],
        [null],
        [null, null],
      ],

      // 設計系統圖片
      dsImgs: {
        figma: null,
        figma1440: null,
        figma768: null,
        figma375: null,
        colorStyle: null,
        textStyle: null,
        buttonComp: null,
        cardComp: null,
      },

      // 切版圖片
      codeImgs: {
        desktop: null,
        tablet: null,
        mobile: null,
        html: null,
        css: null,
      },

      // ── 靜態資料 ──────────────────────────────
      metaInfo: [
        { label: '角色',     value: 'UI 設計 · 前端切版' },
        { label: '工具',     value: 'Figma · HTML / SCSS / VUE' },
        { label: '範圍',     value: '3 主頁 · RWD 三斷點' },
        { label: '合作對象', value: '行銷 / 設計 / 工程' },
      ],
      pills: ['Figma Components', 'Design System', 'BEM', 'RWD', '行銷文案轉視覺'],

      overviewPages: [
        { icon: '🏠', badge: 'Deep dive',   badgeLight: false, name: '首頁',     desc: '9 section · 主敘事' },
        { icon: '🎒', badge: 'Same system', badgeLight: true,  name: '國小頁',   desc: '活潑插圖風' },
        { icon: '📚', badge: 'Same system', badgeLight: true,  name: '國高中頁', desc: '科技感深色' },
        { icon: '+',  badge: '+',           badgeLight: true,  name: '學習報告等', desc: '其他子頁面', dashed: true },
      ],

      pageNotes: [
        { icon: '🎒', html: '<strong>國小頁</strong> — 文案強調「冒險、遊戲感」，換上活潑配色（高彩度藍黃）。按鈕、卡片結構不變，只替換 CSS 變數。' },
        { icon: '📚', html: '<strong>國高中頁</strong> — 文案強調「精準、科技」，換深色 theme。我主動發現三塊功能版面過長，提出 Tab 方案（詳見決策 04）。' },
      ],

      decisions: [
        {
          tag: 'Decision 01', page: '首頁 · Hero',
          title: '品牌感 vs 促銷感——如何定第一屏的基調',
          brief: '移除「重磅登場」標語，標題改為「啟動數位學習新時代／邁向學習新未來」，保留主視覺圖，「我已是會員」改為「會員登入」',
          verdict: '行銷主動刪除「重磅登場」代表品牌方向是<strong>專業感而非促銷感</strong>。Hero 版型維持大圖全幅、文字克制，CTA 用主動詞「立即免費體驗」。<br><br>「會員登入」背後是 UX 邏輯——現有用戶不需看 Landing Page，應給快速出口，與新用戶 CTA 在視覺層級上要有明確區分。',
          chips: [{ label: '主動詞 CTA', key: true }, { label: '新／舊用戶分流', key: true }, { label: '全幅大圖', key: false }, { label: '文字克制', key: false }],
          images: [{ icon: '🖼', placeholder: 'Hero section 截圖（Figma 稿 or 成品）', height: 'h-lg' }],
        },
        {
          tag: 'Decision 02', page: '首頁 · 留單表單',
          title: '設計稿先定義狀態，讓切版零溝通成本',
          brief: '「增加打勾，未打勾不可送出，加入服務條款同意 checkbox」——只說了需求，沒有說怎麼設計',
          verdict: '行銷給的是 UX 需求，不是設計規格。我在 Figma 先把 checkbox 的三個狀態做成元件（未勾選 / 已勾選 / 送出錯誤），切版時直接對照設計稿實作 JS 驗證。<br><br>核心邏輯是：<strong>設計師應該比工程師先想到邊界情境</strong>，讓切版只需翻譯設計稿，不需自己定義 UI 狀態。',
          chips: [{ label: '三態元件', key: true }, { label: '先定義邊界情境', key: true }, { label: 'Figma component', key: false }, { label: 'JS 驗證對齊', key: false }],
          images: [
            { label: 'Figma 元件三態', icon: '✅', placeholder: '未勾 / 已勾 / 錯誤 截圖', height: 'h-sm' },
            { label: '成品驗證畫面',   icon: '📋', placeholder: '表單驗證截圖',             height: 'h-sm' },
          ],
        },
        {
          tag: 'Decision 03', page: '首頁 · 口碑區',
          title: '五則評語——為什麼選 carousel 而非條列',
          brief: '五條家長評語，強調「孩子學習興趣、護眼設計、進度掌握」等面向',
          verdict: '五條評語全部條列，版面會長、密度高，用戶傾向直接略過。Carousel 每次只顯示 2–3 則，製造「還有更多好評」的期待感。<br><br>另一個考量：行銷日後新增評語，carousel 只需加資料，不需改排版。這個決策同時解決了<strong>當下閱讀體驗</strong>和<strong>未來維護成本</strong>。',
          chips: [{ label: 'Carousel 降低密度', key: true }, { label: '可擴充資料結構', key: true }, { label: '閱讀心理', key: false }, { label: '維護成本', key: false }],
          images: [{ icon: '💬', placeholder: '口碑區截圖（Figma 稿 or 成品）', height: 'h-lg' }],
        },
        {
          tag: 'Decision 04', page: '國高中頁 · 功能區',
          title: '主動發現版面問題——沒有等行銷說怎麼改',
          brief: '「此三塊排版修改，原本版面過長」——只說了問題，沒有給解法',
          verdict: '行銷標記版面過長，但沒說怎麼改。<strong>設計師的工作是提出解法，不是等指令。</strong><br><br>三個功能塊是同一層級的並列內容，我提出 Tab 切換——同一個視窗完成三個功能的探索，不需大量捲動。Tab 也讓行銷日後新增功能只需加 tab，不影響版面高度。',
          chips: [{ label: '主動提解法', key: true }, { label: 'Tab 縮短頁面', key: true }, { label: '並列內容邏輯', key: false }, { label: '可擴充', key: false }],
          images: [
            { label: '行銷原稿（版面過長）', icon: '📄', placeholder: '原始版面截圖', height: 'h-lg' },
            { label: 'Tab 方案（改版後）',   icon: '✦',  placeholder: 'Tab 改版截圖', height: 'h-lg' },
          ],
        },
      ],

      rwdFigma: [
        { key: 'figma1440', width: '1440px', device: 'Desktop', icon: '🖥', placeholder: '桌機稿', height: 'h-xl' },
        { key: 'figma768',  width: '768px',  device: 'Tablet',  icon: '📱', placeholder: '平板稿', height: 'h-lg' },
        { key: 'figma375',  width: '375px',  device: 'Mobile',  icon: '📱', placeholder: '手機稿', height: 'h-md' },
      ],

      dsCards: [
        { key: 'colorStyle', head: 'Color Styles',           icon: '🎨', placeholder: 'Color Style 截圖',   height: 'h-xs' },
        { key: 'textStyle',  head: 'Text Styles',            icon: '🔤', placeholder: '字型層級截圖',        height: 'h-xs' },
        { key: 'buttonComp', head: 'Button — 三態 variants', icon: '🔲', placeholder: '按鈕元件截圖',        height: 'h-xs' },
        { key: 'cardComp',   head: 'Card & Form Components', icon: '🗂', placeholder: '卡片 / 表單元件截圖', height: 'h-xs' },
      ],

      rwdLive: [
        { key: 'desktop', width: 'Desktop', bp: '≥ 1280px',   icon: '🖥', placeholder: '桌機版截圖', height: 'h-xl' },
        { key: 'tablet',  width: 'Tablet',  bp: '768–1279px', icon: '📱', placeholder: '平板版截圖', height: 'h-lg' },
        { key: 'mobile',  width: 'Mobile',  bp: '< 768px',    icon: '📱', placeholder: '手機版截圖', height: 'h-md' },
      ],

      codeCards: [
        { key: 'html', head: 'HTML 結構 / DevTools',  icon: '🗂', placeholder: 'HTML 結構截圖' },
        { key: 'css',  head: 'CSS / SCSS 命名對應',   icon: '🎨', placeholder: 'CSS 命名截圖'  },
      ],

      bemCode: `<span class="cs-cc">/* ── Block ── */</span>
<span class="cs-ck">.section-hero</span>              <span class="cs-cc">/* 首頁 Hero 整塊 */</span>
<span class="cs-ck">.section-feature</span>           <span class="cs-cc">/* 功能介紹區 */</span>
<span class="cs-ck">.section-testimonial</span>       <span class="cs-cc">/* 口碑評語區 */</span>

<span class="cs-cc">/* ── Element ── */</span>
<span class="cs-ck">.section-hero__title</span>       <span class="cs-cc">/* Hero 標題 */</span>
<span class="cs-ck">.section-hero__cta</span>         <span class="cs-cc">/* Hero CTA 按鈕 */</span>
<span class="cs-ck">.section-feature__card</span>     <span class="cs-cc">/* 功能卡片 */</span>

<span class="cs-cc">/* ── Modifier ── */</span>
<span class="cs-ck">.btn--primary</span>              <span class="cs-cc">/* 主要 CTA */</span>
<span class="cs-ck">.btn--ghost</span>                <span class="cs-cc">/* 次要按鈕 */</span>
<span class="cs-ck">.btn--disabled</span>             <span class="cs-cc">/* 禁用狀態 */</span>

<span class="cs-cc">/* ── JS 狀態 ── */</span>
<span class="cs-ck">.is-active</span>                 <span class="cs-cc">/* Tab 啟用 */</span>
<span class="cs-ck">.is-error</span>                  <span class="cs-cc">/* 表單驗證失敗 */</span>`,
    }
  },

  mounted() {
    // scroll fade-in
    this._observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('cs-visible')
          this._observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.06 })

    this.$el.querySelectorAll('.cs-fade').forEach(el => this._observer.observe(el))
  },

  beforeUnmount() {
    this._observer?.disconnect()
  },

  methods: {
    // 頁面縮圖上傳
    onThumb(e, index) {
      const file = e.target.files[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = ev => { this.thumbSrcs[index] = ev.target.result }
      reader.readAsDataURL(file)
    },

    // 決策圖片上傳
    onDecisionImg(e, dIndex, imgIndex) {
      const file = e.target.files[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = ev => { this.decisionImgs[dIndex][imgIndex] = ev.target.result }
      reader.readAsDataURL(file)
    },

    // 設計系統圖片上傳
    onDsImg(e, key) {
      const file = e.target.files[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = ev => { this.dsImgs[key] = ev.target.result }
      reader.readAsDataURL(file)
    },

    // 切版圖片上傳
    onCodeImg(e, key) {
      const file = e.target.files[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = ev => { this.codeImgs[key] = ev.target.result }
      reader.readAsDataURL(file)
    },

    // 點擊 placeholder 觸發 input
    triggerFile(e) {
      const input = e.currentTarget.querySelector('input[type="file"]')
      input?.click()
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
