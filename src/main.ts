import { createApp } from 'vue'
import App from './App.vue'
import Wellcome from './pages/Wellcome.vue'
import Chat from './pages/Chat.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
	{ path: '/', component: Wellcome },
	{ path: '/chat', component: Chat },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
	history: createWebHistory(),
	routes, // `routes: routes` 的缩写
})

const app = createApp(App)

const store = createStore({
	state() {
		return {
			user: {
				name: 'asker',
			},
		}
	},
	mutations: {
	}
})

app.use(router)
app.use(store)
app.mount('#app')