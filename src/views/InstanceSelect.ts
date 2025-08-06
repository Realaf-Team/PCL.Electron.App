import IconButtonAdd from "@/components/icons/side/IconButtonAdd.vue"
import IconImportModpack from "@/components/icons/side/IconImportModpack.vue"
import SideNavLayout from "@/layout/SideNavLayout.vue"
import { h } from "vue"

export default {
    setup() {
        return () => h(SideNavLayout, {
            sideNavGroups: [{
                title: '文件夹列表',
                content: [
                    { text: '当前文件夹' },
                    { text: '官方启动器文件夹' }
                ]
            }, {
                title: '添加或导入',
                content: [
                    { text: '添加新文件夹', icon: IconButtonAdd },
                    { text: '导入整合包', icon: IconImportModpack }
                ]
            }]
        })
    }
}