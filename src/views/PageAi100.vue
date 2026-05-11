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

<style scoped lang="scss">
@import '../scss/pages/page_ai100.scss';
</style>
