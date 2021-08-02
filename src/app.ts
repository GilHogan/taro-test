import { createApp } from "vue";
import {
  Button,
  Toast,
  Layout,
  InputNumber,
  Icon,
  Cell
} from "@nutui/nutui-taro";
import "@nutui/nutui-taro/dist/style.css";

import "./app.scss";

const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(Button).use(Toast).use(Layout).use(InputNumber).use(Icon).use(Cell);

export default App;
