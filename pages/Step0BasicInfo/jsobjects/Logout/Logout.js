export default {
	async logout () {
			Object.keys(appsmith.store)
			.map(key => storeValue(key,undefined))
			return navigateTo('LoginModal')
	}
}