export default {
	signIn: () => {
		return Sign_in.run()
		.then(data =>{
			Object.keys(appsmith.store)
			.map(key => storeValue(key,undefined));
			storeValue('uid',data.user.id);
			storeValue('access_token',data.access_token)
		.then(() => Check.statusCheck())});
	},
	continue: async () => {
		if(!appsmith.URL.fullPath.includes('#access_token=')) 
			return storeValue('tab','signin');
		appsmith.URL.fullPath.split('#')[1].split('&').forEach( i => {
			const [key, value] = i.split('=');
			storeValue(key, value);
		});
		Check.statusCheck();
	}
}