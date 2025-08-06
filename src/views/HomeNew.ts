import renderFromXaml from '@/api/xamlParser'

var xaml = `
<local:MyCard Title="纯文本" Margin="0,0,0,15" CanSwap="True" IsSwaped="True">
    <StackPanel Margin="25,40,23,15">
        <TextBlock TextWrapping="Wrap" Margin="0,0,0,4"
                    Text="每个 local:MyCard 代表一张卡片，你可以添加、删除格式类似的 MyCard 来添加多个卡片。每个 TextBlock 代表一段文本，你可以在 Text 属性中书写任何你想写的内容，也可以自行添加更多的 TextBlock。" />
        <TextBlock TextWrapping="Wrap" Margin="0,0,0,4" FontSize="11"
                    Text="你可以通过添加、删除属性修改样式，例如上一行的 FontSize 就会将字号改为 11 号。" />
        <TextBlock TextWrapping="Wrap" Margin="20,5,20,0" Foreground="#8C7721"
                    Text="它还有许多可以调整的属性：上一行的 Margin 调整了边距，Foreground 则会让文字变色。" />
    </StackPanel>
</local:MyCard>

<local:MyCard Title="卡片、提示条" Margin="0,0,0,15" CanSwap="True" IsSwaped="True">
    <StackPanel Margin="25,40,23,15">
        <local:MyHint Text="local:MyHint 代表提示条。" />
        <local:MyHint Margin="0,8,0,2" Theme="Red"
                    Text="将提示条的 Theme 属性改为 Blue、Yellow 或 Red 即可修改配色。&#xA;使用左边的那堆字符可以在任意地方手动换行，如果需要使用等号、引号等特殊字符，可以自行百度 XAML 转义字符。" />
        <TextBlock TextWrapping="Wrap" Margin="0,6,0,0"
                    Text="卡片（local:MyCard）的 Title 属性决定了它的标题。&#xA;为卡片添加 CanSwap 属性让它可以被折叠，True 代表是，False 代表否。在此基础上，再使用 IsSwaped 属性调整它是否默认被折叠。" />
    </StackPanel>
</local:MyCard>
`

export default {
  setup() {
    return () => ['自定义主页测试', ...renderFromXaml(xaml)]
  },
}
