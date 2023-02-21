import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ElMessage } from 'element-plus'

const app = createApp(App)
app.config.globalProperties.$message = ElMessage
app.use(router)
app.mount('#app')
