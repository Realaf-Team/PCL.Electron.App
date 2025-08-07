<script setup lang="ts">
import CardInfoItem from '@/components/widget/CardInfoItem.vue'
import MyCard from '@/components/widget/MyCard.vue'
import PlainTextInfoItem from '@/components/widget/PlainTextInfoItem.vue'
import picLongTengMaoYue from '@/assets/pictures/龙腾猫跃头像.jpg'
import picPCLProto from '/PCL.Proto.svg?url'

declare const __APP_VERSION__: string
const version = __APP_VERSION__

const isElectron = window && window.process && window.process.type
const shell = isElectron ? (window.electron?.shell || require('electron').shell) : null

const openExternal = (url: string) => {
  const cleanUrl = url.trim()
  if (shell) {
    shell.openExternal(cleanUrl)
  } else {
    window.open(cleanUrl, '_blank', 'noopener,noreferrer')
  }
}
</script>

<template lang="pug">
  MyCard
    template(#title) 关于
    template(#content)
      CardInfoItem(
        :icon="picLongTengMaoYue"
        title="龙腾猫跃"
        subtitle="Plain Craft Launcher 的原作者！"
        infoType="about"
        :btn="{ text: '赞助作者', link: 'https://afdian.com/a/LTCat' }"
        @btn-click="() => openExternal('https://afdian.com/a/LTCat')"
      )
      CardInfoItem(
        icon="https://avatars.githubusercontent.com/u/117074497?v=4"
        title="憂鬱のb（￣▽￣）d | SoftOSDev"
        subtitle="PCL.Electron 的作者"
        infoType="about"
        :btn="{ text: '去我的网站看看 👀', link: 'https://borisy.bar/' }"
        @btn-click="() => openExternal('https://borisy.bar/')"
      )
      CardInfoItem(
        icon="https://avatars.githubusercontent.com/u/63146698?v=4"
        title="一只会魔法的梨 | AMagicPear"
        subtitle="PCL.Proto 的作者"
        infoType="about"
        :btn="{ text: '去我的主页看看 👀', link: 'https://www.amagicpear.sbs/' }"
        @btn-click="() => openExternal('https://www.amagicpear.sbs/')"
      )
      CardInfoItem(
        icon="https://raw.githubusercontent.com/Realaf-Team/PCL.Electron.App/refs/heads/master/pcl-ele.ico"
        title="Plain Craft Launcher: Edition Electron"
        :subtitle="`当前版本：${version}`"
        infoType="about"
        :btn="{ text: 'GitHub 仓库', link: 'https://github.com/Realaf-Team/PCL.Electron.App' }"
        @btn-click="() => openExternal('https://github.com/Realaf-Team/PCL.Electron.App')"
      )

  MyCard
    template(#title) 特别鸣谢
    template(#content)
      CardInfoItem(
        icon="https://avatars.githubusercontent.com/u/165488354?s=200&v=4"
        title="PCL Community"
        subtitle="Plain Craft Launcher 社区"
        infoType="about"
        :btn="{ text: 'GitHub 主页', link: 'https://github.com/PCL-Community' }"
        @btn-click="() => openExternal('https://github.com/PCL-Community')"
      )
      CardInfoItem(
        icon="https://www.amagicpear.sbs/PCL.Proto/PCL.Proto.svg"
        title="PCL.Proto"
        subtitle="本项目使用 PCL.Proto 作为前端"
        infoType="about"
        :btn="{ text: 'GitHub 仓库', link: 'https://github.com/PCL-Community/PCL.Proto' }"
        @btn-click="() => openExternal('https://github.com/PCL-Community/PCL.Proto')"
      )

  MyCard
    template(#title) 法律信息
    template(#content)
      p 本软件为原版 PCL 的社区衍生版本之一。仓库代码开源，但倘若您需要使用此项目或参考本仓库的源码，需遵守#[a(href="https://github.com/PCL-Community/PCL2-CE/blob/dev/LICENCE") 与原版 PCL 相同的协议]。
      p 本项目主导社区为 PCL-Community，如果你有对此项目的建议或在使用中遇到问题，欢迎提 Issue 和 Pull Request！

  MyCard(defaultFoldStatus='fold')
    template(#title) 许可与版权声明
    template(#content)
      PlainTextInfoItem
        template(#title) Vue.js - 渐进式 JavaScript 框架
        template(#content) MIT | #[a(href="https://github.com/vuejs/core" @click.prevent="() => openExternal('https://github.com/vuejs/core')") https://github.com/vuejs/core]
      PlainTextInfoItem
        template(#title) TypeScript - 类型！类型！我要类型！
        template(#content) Apache License 2.0 | #[a(href="https://github.com/microsoft/TypeScript" @click.prevent="() => openExternal('https://github.com/microsoft/TypeScript')") https://github.com/microsoft/TypeScript]
      PlainTextInfoItem
        template(#title) Pug - 排版特别好看的模板引擎
        template(#content) MIT | #[a(href="https://github.com/pugjs/pug" @click.prevent="() => openExternal('https://github.com/pugjs/pug')") https://github.com/pugjs/pug]
      PlainTextInfoItem
        template(#title) Vite - 快速、轻量级的开发工具
        template(#content) MIT | #[a(href="https://github.com/vitejs/vite" @click.prevent="() => openExternal('https://github.com/vitejs/vite')") https://github.com/vitejs/vite]
      PlainTextInfoItem
        template(#title) Vue Router
        template(#content) MIT | #[a(href="https://github.com/vuejs/vue-router-next" @click.prevent="() => openExternal('https://github.com/vuejs/vue-router-next')") https://github.com/vuejs/vue-router-next]
      PlainTextInfoItem
        template(#title) PCL.Neo.Core
        template(#content) MIT | #[a(href="https://github.com/PCL-Community/PCL.Neo/" @click.prevent="() => openExternal('https://github.com/PCL-Community/PCL.Neo/')") https://github.com/PCL-Community/PCL.Neo/]
</template>