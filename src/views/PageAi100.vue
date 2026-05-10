<template>
  <div class="cs-page">
    <!-- NAV OFFSET -->
    <div class="cs-nav-offset"></div>

    <!-- HERO -->
    <section class="cs-hero">
      <div class="cs-container">
        <div class="cs-kicker">Case Study · 2024</div>
        <h1 class="cs-h1">AI 智能書包<br /><em>Landing Page</em></h1>
        <p class="cs-sub">
          從行銷文案到上線，負責 Figma
          設計稿繪製與前端切版，涵蓋首頁、國小、國高中三個主頁面，共用一套設計系統。
        </p>

        <div class="cs-meta-row">
          <div v-for="item in metaInfo" :key="item.label">
            <div class="cs-meta-label">{{ item.label }}</div>
            <div class="cs-meta-value">{{ item.value }}</div>
          </div>
        </div>

        <div class="cs-hero-img">
          <img src="../images/img_hero.png" alt="" />
        </div>

        <div class="cs-pill-row">
          <span v-for="p in pills" :key="p" class="cs-pill">{{ p }}</span>
        </div>
      </div>
    </section>
    <!-- 01 DESIGN SYSTEM -->
    <section id="cs-ds" class="cs-section">
      <div class="cs-container">
        <div class="cs-sec-hd">
          <div class="cs-sesc-num">00</div>
          <div>
            <h2 class="cs-sec-title">Key Visual<small>主視覺</small></h2>
          </div>
        </div>

        <div class="cs-think">
          <div class="cs-think-lbl">專案規模</div>
          <p>
            共三個主頁面，共用同一套設計系統。後面深挖首頁的四個核心決策；國小、國高中頁說明如何在同一系統下調整視覺語言。
          </p>
        </div>

        <!-- <div class="cs-visual">
          <img src="../images/img_visual_01.png" alt="" />
        </div> -->

        <div class="cs-overview-grid">
          <div class="cs-ov-card">
            <div class="cs-ov-thumb">
              <div>
                <img src="../images/home.png" alt="" />
              </div>
            </div>
            <div class="cs-ov-meta">
              <div class="cs-badge">深色系</div>
              <p>主畫面</p>
              <span>主敘事</span>
            </div>
          </div>
          <div class="cs-ov-card">
            <div class="cs-ov-thumb">
              <div>
                <img src="../images/elementary.png" alt="" />
              </div>
            </div>
            <div class="cs-ov-meta">
              <div class="cs-badge light">亮色系</div>
              <p>國小</p>
              <span>活潑插圖風</span>
            </div>
          </div>
          <div class="cs-ov-card">
            <div class="cs-ov-thumb">
              <div>
                <img src="../images/senior-high.png" alt="" />
              </div>
            </div>
            <div class="cs-ov-meta">
              <div class="cs-badge">深色系</div>
              <p>國高中</p>
              <span>科技感深色</span>
            </div>
          </div>
        </div>

        <div class="cs-two-col">
          <div class="cs-cross">
            <span class="cs-cross-ic">國中、高中</span>
            <p>國小內容區塊</p>
          </div>
          <div class="cs-cross">
            <span class="cs-cross-ic">國中、高中</span>
            <p>國小內容區塊</p>
          </div>
        </div>
      </div>
    </section>
    <!-- 02 DESIGN SYSTEM -->
    <section id="cs-ds" class="cs-section">
      <div class="cs-container">
        <div class="cs-sec-hd">
          <div class="cs-sesc-num">01</div>
          <div>
            <h2 class="cs-sec-title">Design System<small>配色、字型、元件</small></h2>
          </div>
        </div>

        <div class="cs-think">
          <div class="cs-think-lbl">設計思考</div>
          <p>
            三個頁面視覺語言不同，但共用同一套 Figma 元件庫。先定義 Color Style 和 Text
            Style，再拆分元件，才能讓每頁「看起來不同」但「切版成本一樣低」。
          </p>
        </div>

        <div class="cs-cross">
          <span class="cs-cross-ic">🔗</span>
          <p>
            <strong>同一套系統，三種視覺語言</strong> — 國小頁換活潑配色，國高中頁套深色 theme，但
            button、card、form 結構完全不變，切版只需替換 CSS 變數。
          </p>
        </div>

        <!-- 元件庫 -->
        <div class="cs-block">
          <div class="cs-lbl-sm">元件庫 & 設計 Styles</div>
          <div class="cs-ds-grid">
            <div class="cs-ds-card">
              <div class="cs-ds-hd">Color Styles</div>
              <div class="cs-ds-body">
                <div class="cs-ph h-xs">
                  <img src="../images/senior-high.png" alt="" />
                </div>
              </div>
            </div>
            <div class="cs-ds-card">
              <div class="cs-ds-hd">Text Styles</div>
              <div class="cs-ds-body">
                <div class="cs-ph h-xs">
                  <img src="../images/senior-high.png" alt="" />
                </div>
              </div>
            </div>
            <div class="cs-ds-card">
              <div class="cs-ds-hd">Button — 三態 variants</div>
              <div class="cs-ds-body">
                <div class="cs-ph h-xs">
                  <img src="../images/senior-high.png" alt="" />
                </div>
              </div>
            </div>
            <div class="cs-ds-card">
              <div class="cs-ds-hd">Card & Form Components</div>
              <div class="cs-ds-body">
                <div class="cs-ph h-xs">
                  <img src="../images/senior-high.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

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
              <p>
                設計稿確認後，切版目標是「設計稿長什麼樣，切版就長什麼樣」。BEM 命名對應 Figma
                元件層級，RWD 斷點與 Figma Frame 寬度一一對齊。
              </p>
            </div>

            <!-- RWD 成品 -->
            <div class="cs-block">
              <div class="cs-lbl-sm">RWD 成品截圖對照</div>
              <div class="cs-rwd">
                <div class="cs-rwd-item">
                  <div class="cs-rwd-lbl"><strong>Desktop</strong><span>≥ 1280px</span></div>
                  <div class="cs-ph h-xl">
                    <div>
                      <img src="../images/home.png" alt="" />
                    </div>
                  </div>
                </div>
                <div class="cs-rwd-item">
                  <div class="cs-rwd-lbl"><strong>Tablet</strong><span>768–1279px</span></div>
                  <div class="cs-ph h-lg">
                    <div>
                      <img src="../images/senior-high.png" alt="" />
                    </div>
                  </div>
                </div>
                <div class="cs-rwd-item">
                  <div class="cs-rwd-lbl"><strong>Mobile</strong><span>< 768px</span></div>
                  <div class="cs-ph h-md">
                    <div>
                      <img src="../images/elementary.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr class="cs-hr" />

            <!-- BEM -->
            <!-- <div class="cs-block">
              <div class="cs-lbl-sm">BEM 命名規範</div>
              <div class="cs-code" v-html="bemCode" />
              <div class="cs-ds-grid">
                <div v-for="card in codeCards" :key="card.key" class="cs-ds-card">
                  <div class="cs-ds-hd">{{ card.head }}</div>
                  <div class="cs-ds-body">
                    <div class="cs-ph h-md" @click="triggerFile($event)">
                      <template v-if="!codeImgs[card.key]"
                        ><span class="cs-ph-ic">{{ card.icon }}</span
                        ><span>{{ card.placeholder }}</span></template
                      >
                      <img v-else :src="codeImgs[card.key]" alt="" />
                      <input type="file" accept="image/*" @change="(e) => onCodeImg(e, card.key)" />
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </section>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'CaseStudyAi100',

  data() {
    return {
      metaInfo: [
        { label: '角色', value: 'UI 設計 · 前端切版' },
        { label: '工具', value: 'Figma · HTML / SCSS / VUE' },
        { label: '範圍', value: '3 主頁 · RWD 三斷點' },
        { label: '合作對象', value: '行銷 / 設計 / 工程' },
      ],
      pills: ['Figma Components', 'Design System', 'BEM', 'RWD', '行銷文案轉視覺'],
    }
  },
}
</script>

<style scoped>
/* ── 所有 class 加 cs- 前綴，避免與你現有樣式衝突 ── */

/* tokens */
.cs-page {
  --cs-black: #0f0f0f;
  --cs-g800: #1a1a1a;
  --cs-g700: #2c2c2c;
  --cs-g600: #555;
  --cs-g400: #888;
  --cs-g300: #bbb;
  --cs-g200: #e2e2e2;
  --cs-g100: #f2f2f2;
  --cs-g50: #f8f8f8;
  --cs-white: #fff;
  --cs-en: 'DM Sans', sans-serif;
  --cs-zh: 'Noto Sans TC', sans-serif;
  font-family: var(--cs-zh);
  color: var(--cs-black);
  background: var(--cs-white);
  line-height: 1.7;
}

/* nav offset (配合你的固定 Navbar 高度調整) */
.cs-nav-offset {
  height: 56px;
}

/* container */
.cs-container {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* sections */
.cs-hero {
  padding: 4rem 0 5rem;
  position: relative;
}
.cs-section {
  padding: 5.5rem 0;
  border-top: 1px solid var(--cs-g200);
}

/* fade */
.cs-fade {
  opacity: 0;
  transform: translateY(14px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}
.cs-fade.cs-visible {
  opacity: 1;
  transform: none;
}

/* ── HERO ── */
.cs-kicker {
  font-family: var(--cs-en);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cs-g400);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.cs-kicker::before {
  content: '';
  display: block;
  width: 24px;
  height: 1px;
  background: var(--cs-g300);
}
.cs-h1 {
  font-family: var(--cs-en);
  font-size: clamp(2.2rem, 5.5vw, 3.6rem);
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin-bottom: 0.5rem;
}
.cs-h1 em {
  font-style: italic;
  color: var(--cs-g400);
}
.cs-sub {
  font-size: 15px;
  color: var(--cs-g600);
  max-width: 480px;
  margin: 1.25rem 0 2rem;
  line-height: 1.75;
}
.cs-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2.5rem;
}
.cs-meta-label {
  font-family: var(--cs-en);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cs-g400);
  margin-bottom: 4px;
}
.cs-meta-value {
  font-size: 13px;
  color: var(--cs-g700);
}
.cs-pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.cs-pill {
  font-size: 11px;
  color: var(--cs-g600);
  background: var(--cs-g100);
  padding: 4px 12px;
  border-radius: 100px;
}

/* ── SECTION HEADER ── */
.cs-sec-hd {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}
.cs-sec-num {
  font-family: var(--cs-en);
  font-size: 11px;
  color: var(--cs-g400);
  letter-spacing: 0.08em;
  padding-top: 5px;
}
.cs-sec-title {
  font-family: var(--cs-en);
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: -0.01em;
}
.cs-sec-title small {
  display: block;
  font-family: var(--cs-zh);
  font-size: 13px;
  font-weight: 400;
  color: var(--cs-g600);
  margin-top: 4px;
  letter-spacing: 0;
}

/* ── THINK CARD ── */
.cs-think {
  border-left: 2px solid var(--cs-black);
  padding: 1.25rem 1.5rem;
  background: var(--cs-g50);
  border-radius: 0 6px 6px 0;
  margin-bottom: 2.5rem;
}
.cs-think-lbl {
  font-family: var(--cs-en);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--cs-g400);
  margin-bottom: 0.5rem;
}
.cs-think p {
  font-size: 14px;
  color: var(--cs-g700);
  line-height: 1.8;
}

/* ── OVERVIEW ── */
.cs-overview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 1.5rem;
}
.cs-ov-card {
  border: 1px solid var(--cs-g200);
  border-radius: 6px;
  overflow: hidden;
  transition: border-color 0.2s;
}
.cs-ov-card.dashed {
  border-style: dashed;
}
.cs-ov-card:hover {
  border-color: var(--cs-g400);
}
.cs-ov-thumb {
  height: 200px;
  background: var(--cs-g100);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--cs-g200);
  position: relative;
  overflow: hidden;
}
.cs-ov-thumb.transparent {
  background: transparent;
}
.cs-ov-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cs-ov-thumb input[type='file'] {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
  font-size: 0;
}
.cs-ov-icon {
  font-size: 20px;
  opacity: 0.3;
}
.cs-ov-placeholder {
  font-size: 11px;
  color: var(--cs-g400);
  text-align: center;
  padding: 0 1rem;
}
.cs-ov-meta {
  padding: 8px 10px;
}
.cs-ov-meta p {
  font-family: var(--cs-en);
  font-size: 11px;
  font-weight: 500;
  color: var(--cs-g700);
}
.cs-ov-meta span {
  font-size: 10px;
  color: var(--cs-g400);
}
.cs-badge {
  display: inline-block;
  font-size: 9px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 3px;
  background: var(--cs-g800);
  color: var(--cs-white);
  margin-bottom: 4px;
}
.cs-badge.light {
  background: var(--cs-g100);
  color: var(--cs-g600);
}

/* ── CROSS NOTE ── */
.cs-cross {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: var(--cs-g50);
  border-radius: 6px;
  padding: 1rem 1.25rem;
  margin-bottom: 1rem;
}
.cs-cross-ic {
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 2px;
}
.cs-cross p {
  font-size: 13px;
  color: var(--cs-g600);
  line-height: 1.75;
}
.cs-cross strong {
  color: var(--cs-black);
  font-weight: 500;
}

/* ── DECISION ── */
.cs-decision-list {
  display: flex;
  flex-direction: column;
}
.cs-di {
  display: grid;
  grid-template-columns: 188px 1fr;
  gap: 2rem;
  padding: 2.25rem 0;
  border-bottom: 1px solid var(--cs-g200);
}
.cs-di:first-child {
  padding-top: 0;
}
.cs-di:last-child {
  border-bottom: none;
}
.cs-di-tag {
  font-family: var(--cs-en);
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cs-g400);
  margin-bottom: 5px;
}
.cs-di-page {
  font-size: 11px;
  color: var(--cs-g400);
  margin-bottom: 8px;
}
.cs-di-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--cs-black);
  line-height: 1.45;
}
.cs-brief {
  background: var(--cs-g100);
  border-radius: 4px;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  font-size: 12.5px;
  color: var(--cs-g600);
  line-height: 1.7;
}
.cs-brief strong {
  color: var(--cs-g800);
  font-weight: 500;
}
.cs-verdict {
  font-size: 14px;
  color: var(--cs-g800);
  line-height: 1.85;
  margin-bottom: 1rem;
}
.cs-verdict strong {
  font-weight: 500;
}
.cs-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 0;
}
.cs-chip {
  font-size: 11px;
  color: var(--cs-g600);
  border: 1px solid var(--cs-g200);
  border-radius: 3px;
  padding: 2px 8px;
}
.cs-chip.key {
  color: var(--cs-black);
  border-color: var(--cs-black);
}
.cs-img-wrap {
  margin-top: 1.25rem;
}

/* ── IMAGE PLACEHOLDER ── */
.cs-ph {
  width: 100%;
  background: var(--cs-g100);
  border: 1px dashed var(--cs-g300);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: var(--cs-g400);
  font-size: 11px;
  font-family: var(--cs-en);
  letter-spacing: 0.04em;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: background 0.2s;
}
.cs-ph:hover {
  background: var(--cs-g200);
}
.cs-ph img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}
.cs-ph input[type='file'] {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
  font-size: 0;
}
.cs-ph-ic {
  font-size: 18px;
  opacity: 0.35;
}
.h-xl {
  height: 420px;
}
.h-lg {
  height: 300px;
}
.h-md {
  height: 220px;
}
.h-sm {
  height: 160px;
}
.h-xs {
  height: 130px;
}

/* ── DS / CODE ── */
.cs-ds-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}
.cs-ds-card {
  border: 1px solid var(--cs-g200);
  border-radius: 6px;
  overflow: hidden;
}
.cs-ds-hd {
  padding: 0.6rem 1rem;
  background: var(--cs-g50);
  border-bottom: 1px solid var(--cs-g200);
  font-family: var(--cs-en);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cs-g400);
}
.cs-ds-body {
  padding: 1rem;
}

/* ── RWD ── */
.cs-rwd {
  display: grid;
  grid-template-columns: 2fr 1.2fr 0.75fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: end;
}
.cs-rwd-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.cs-rwd-lbl {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--cs-en);
  font-size: 11px;
}
.cs-rwd-lbl strong {
  color: var(--cs-black);
  font-weight: 500;
}
.cs-rwd-lbl span {
  color: var(--cs-g400);
  font-size: 10px;
}

/* ── CODE BLOCK ── */
.cs-code {
  background: var(--cs-g800);
  color: #d4d4d4;
  border-radius: 6px;
  padding: 1.25rem 1.5rem;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  line-height: 2;
  overflow-x: auto;
  margin-bottom: 1.5rem;
}
.cs-cc {
  color: #666;
}
.cs-ck {
  color: #ccc;
  font-weight: 500;
}

/* ── MISC ── */
.cs-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.cs-lbl-sm {
  font-size: 11px;
  font-family: var(--cs-en);
  color: var(--cs-g400);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}
.cs-block {
  margin-bottom: 2.5rem;
}
.cs-hr {
  border: none;
  border-top: 1px solid var(--cs-g200);
  margin: 3rem 0;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .cs-container {
    padding: 0 1.25rem;
  }
  .cs-overview-grid {
    grid-template-columns: 1fr 1fr;
  }
  .cs-sec-hd {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }
  .cs-sec-num {
    padding-top: 0;
  }
  .cs-di {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .cs-ds-grid,
  .cs-two-col {
    grid-template-columns: 1fr;
  }
  .cs-rwd {
    grid-template-columns: 1fr;
  }
}

.cs-hero-img {
  position: absolute;
  top: 50%;
  right: -250px;
  transform: translateY(-50%);
  /* border: 1px solid red; */
  pointer-events: none;
}

.cs-visual {
  width: 100%;
}
.cs-visual img {
  width: 100%;
  object-fit: contain;
}
</style>
