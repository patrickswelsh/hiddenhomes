export default {
	zip () {
		const zips = Iframe1.message
		if (Iframe1.message == []){return}
		var ziplist = []
		var zipshow = []
		for (const i in zips){
			var obj = {
				"postal_code" : Number(zips[i]['zip']),
				"place_id" : zips[i]['id']
			}
			ziplist.push(obj)
			zipshow.push(zips[i]['zip'])
		}
		storeValue('zipList', ziplist)
		storeValue('zipShow',zipshow)
	},
	
	
updateprefs () {
DeletePrefs.run().then(AddPrefs.run().then(UpdateUser.run().then(navigateTo('Step3Preferences'))))
}
	
}