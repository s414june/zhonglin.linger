const { createApp, ref } = Vue

const app = createApp({
	setup() {
		const menuActive = ref(false)
		const menuItems = ref([
			{
				label: "歡迎蒞臨",
				url: "#home",
			},
			{
				label: "訂房方案",
				url: "#plan",
			},
			{
				label: "關於流連",
				url: "#about",
			},
			{
				label: "交通資訊",
				url: "#traffic",
			},
			{
				label: "周邊機能",
				url: "#function",
			},
			{
				label: "景點指南",
				url: "#tourist",
			},
		])

		const clickMenu = () => {
			menuActive.value = !menuActive.value
		}

		const scrollToTop = () => {
			window.scrollTo({ top: 0, behavior: "smooth" })
		}

		return {
			menuActive,
			menuItems,
			clickMenu,
			scrollToTop,
		}
	},
})

app.use(PrimeVue.Config, {
	theme: {
		preset: PrimeVue.Themes.Aura,
	},
})

app.component("p-drawer", PrimeVue.Drawer)
app.component("p-menu", PrimeVue.Menu)
app.component("p-button", PrimeVue.Button)

app.mount("#app")
