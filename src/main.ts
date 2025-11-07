import { createApp } from "vue";
import App from "./App.vue";

// 세 패턴 실행 함수 import
import { runBuilderExample } from "./utils/Builder";
import { runBridgeExample } from "./utils/Bridge";
import { runStrategyExample } from "./utils/Strategy";

const app = createApp(App);

// 실행 순서
runBuilderExample();
runBridgeExample();
runStrategyExample();

app.mount("#app");
