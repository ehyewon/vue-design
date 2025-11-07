import { createApp } from "vue";
import App from "./App.vue";
import Singleton from "./utils/Singleton";  // ✅ 싱글톤 불러오기

const app = createApp(App);

// ✅ 싱글톤 테스트
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

s1.sayHello();
console.log("같은 객체인가?", s1 === s2); // true

app.mount("#app");
