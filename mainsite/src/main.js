import { createApp } from 'vue'
import App from './App.vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { TextPlugin } from "gsap/dist/TextPlugin.min.js"
import { EasePack } from "gsap/dist/EasePack.min.js"

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(EasePack);

createApp(App).mount('#app')