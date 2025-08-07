<script setup lang="ts">
import { showIconPath } from '@/util/gameInfo'
import IconButtonSave from '../icons/control/IconButtonSave.vue'
import IconInfo from '../icons/control/IconInfo.vue'
import IconServer from '../icons/control/IconServer.vue'
import MyButton from './MyButton.vue'

type InfoType = 'game-info' | 'about'

withDefaults(
  defineProps<{
    icon?: string
    title?: string
    subtitle?: string
    infoType?: InfoType
    btn?: {
      text: string
      link: string
    }
  }>(),
  {
    icon: showIconPath.grass,
    infoType: 'game-info'
  }
)

// 定义事件
const emit = defineEmits<{
  (e: 'btn-click', url: string): void
}>()
</script>

<template lang="pug">
  .gameinfo-container(:class="infoType")
    .left
      img(:src="icon")
      .text
        .title {{ title }}
        .subtitle {{ subtitle }}
    .right
      IconButtonSave(v-if="infoType === 'game-info'")
      IconInfo(v-if="infoType === 'game-info'")
      IconServer(v-if="infoType === 'game-info'")
      MyButton(
        v-if="btn"
        :inline="true"
        @click.prevent="$emit('btn-click', btn.link)"
      ) {{ btn.text }}
</template>

<style lang="css" scoped>
/* 原有样式保持不变 */
.left {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

.about > .left > img {
  border-radius: 50%;
}

.gameinfo-container.game-info > .right {
  margin-right: 6px;
  color: var(--color-tint-light);
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  align-items: center;
  gap: 9.5px;
}

.right > svg {
  width: 14px;
}

.gameinfo-container.game-info:hover > .right {
  opacity: 1;
}

.gameinfo-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  border-radius: 4px;
  gap: 6px;
  transition: background-color 0.4s ease;
}

.gameinfo-container.game-info:hover {
  background-color: var(--color-tint-lighter);
}

.title {
  font-size: 13px;
  line-height: 1.1rem;
}

.subtitle {
  font-size: 11px;
  color: var(--color-text-grey);
  line-height: normal;
}

img {
  width: 30px;
  height: 30px;
}
</style>