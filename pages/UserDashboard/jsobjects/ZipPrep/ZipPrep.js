export default {
	async getIds () {
		GetState.run().then(data => {
			storeValue('coords',[data[0]['lat'],data[0]['lng']])
			
			ReadZips.run().then(data => {
			var ids = []
			var zips = []
			for (const i in data){
				const id = data[i]['place_id']
				const zip = data[i]['postal_code']
				ids.push(id)
				zips.push(zip)
			}
			storeValue('idRead',String(ids))
			storeValue('zipRead',String(zips))
		})
			})
		
	},

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
DeletePrefs.run().then(AddZips.run().then(navigateTo('Step3Preferences')))
}
	
}