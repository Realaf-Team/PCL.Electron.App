import IconLaunch from '@/components/icons/header/IconLaunch.vue';
import IconPack from '@/components/icons/side/IconPack.vue';
import IconPaint from '@/components/icons/side/IconPaint.vue';
import SideNavLayout from '@/layout/SideNavLayout.vue';
import { h } from 'vue';

export default {
  setup() {
    return () => h(SideNavLayout, {
      sideNavGroups: [{
        content: [
          { text: '启动', icon: IconLaunch },
          { text: '个性化', icon: IconPaint },
          { text: '其他', icon: IconPack },
        ]
      }
      ]
    })
  },
}
