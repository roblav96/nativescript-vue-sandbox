import Vue from "nativescript-vue";
Vue.config.silent = false
Vue.config.productionTip = true
Vue.config.performance = true
Vue.config.devtools = false

import Home from "./components/Home";
console.log(`Home ->`, Home)

new Vue({
	created() {
		console.log(`tdhis ->`, this)
	},
	template: `
        <Frame>
            <Home />
        </Frame>`,
	components: {
		Home
	}
}).$start();
