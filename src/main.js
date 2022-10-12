

import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/main.css"
import "./index.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import '@fortawesome/fontawesome-free/js/all'
import router from './router'

library.add(fas)

createApp(App).use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
