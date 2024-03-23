export default {
	async setPrefs () {
		if (min_year.text == "" | min_year.text == undefined){var miny = null}else{miny = Number(min_year.text)}
		if (max_year.text == "" | max_year.text == undefined){var maxy = null}else{maxy = Number(max_year.text)} 
		if (min_lot.selectedOptionValue == "" | min_lot.selectedOptionValue == undefined){var minl = null}else{minl = Number(min_lot.selectedOptionValue)} 
		if (max_lot.selectedOptionValue == "" | max_lot.selectedOptionValue == undefined){var maxl = null}else{maxl = Number(max_lot.selectedOptionValue)}
		if (min_price.text == "" | min_price.text == undefined){var minp = null}else{minp = Number(min_price.text)} 
		if (max_price.text == "" | max_price.text == undefined){var maxp = null}else{maxp = Number(max_price.text)} 
		if (min_beds.selectedOptionValue == "" | min_beds.selectedOptionValue == undefined){var minb = null}else{minb = Number(min_beds.selectedOptionValue)} 
		if (max_beds.selectedOptionValue == "" | max_beds.selectedOptionValue == undefined){var maxb = null}else{maxb = Number(max_beds.selectedOptionValue)}
		if (min_sqft.selectedOptionValue == "" | min_sqft.selectedOptionValue == undefined){var mins = null}else{mins = Number(min_sqft.selectedOptionValue)} 
		if (max_sqft.selectedOptionValue == "" | max_sqft.selectedOptionValue == undefined){var maxs = null}else{maxs = Number(max_sqft.selectedOptionValue)} 
		if (max_hoa.text == "" | max_hoa.text == undefined){var maxh = null}else{maxh = Number(max_hoa.text)}
		if (days_on_mkt.text == "" | days_on_mkt.text == undefined){var mind = null}else{mind = Number(days_on_mkt.text)}
		
		storeValue('prefs', [{
			"user_id": appsmith.store.uid,
			"single_family": prop_type.selectedOptionValues.includes('single_family'),
			"multi_family":
			prop_type.selectedOptionValues.includes('multi_family'),
			"mobile_home":
			prop_type.selectedOptionValues.includes('mobile'),
			"land":
			prop_type.selectedOptionValues.includes('land'),
			"farm":
			prop_type.selectedOptionValues.includes('farm'),
			"min_built": miny,
			"max_built": maxy,
			"min_lot": minl,
			"max_lot": maxl,
			"min_price": minp,
			"max_price": maxp,
			"min_beds": minb,
			"max_beds": maxb,
			"min_sqft": mins,
			"max_sqft": maxs,
			"keywords": keywords.text,
			"max_hoa": maxh,
			"min_days_on_mkt": mind
			
		}])
		 
	},

	async getPrefs () {
		return GetPrefs.run()
		.then(data =>{
			console.log(data)
		var typs = []
			if (data[0] == undefined){
				storeValue('typs',undefined)
			storeValue('miny', undefined)
			storeValue('maxy', undefined)
			storeValue('minl', undefined)
			storeValue('maxl', undefined)
			storeValue('minp', undefined)
			storeValue('maxp', undefined)
			storeValue('minb', undefined)
			storeValue('maxb', undefined)
			storeValue('mins', undefined)
			storeValue('maxs', undefined)
			storeValue('keywords', undefined)
			storeValue('minh', undefined)
			storeValue('mind', undefined)
			}else{
			if (data[0]['single_family'])(typs.push('single_family'))
			if (data[0]['multi_family'])(typs.push('multi_family'))
			if (data[0]['mobile_home'])(typs.push('mobile'))
			if (data[0]['land'])(typs.push('land'))
			if (data[0]['farm'])(typs.push('farm'))
			
			storeValue('typs',typs)
			if (data[0]['min_built'] == null){storeValue('miny',undefined)}else{
			storeValue('miny', data[0]['min_built'])}
			if (data[0]['max_built'] == null){storeValue('maxy',undefined)}else{
			storeValue('maxy', data[0]['max_built'])}
			if (data[0]['min_lot'] == null){storeValue('minl',undefined)}else{
			storeValue('minl', String(data[0]['min_lot']))}
			if (data[0]['max_lot'] == null){storeValue('maxl',undefined)}else{
			storeValue('maxl', String(data[0]['max_lot']))}
			if (data[0]['min_price'] == null){storeValue('minp',undefined)}else{
			storeValue('minp', data[0]['min_price'])}
			if (data[0]['max_price'] == null){storeValue('maxp',undefined)}else{
			storeValue('maxp', data[0]['max_price'])}
			if (data[0]['min_beds'] == null){storeValue('minb',undefined)}else{
			storeValue('minb', String(data[0]['min_beds']))}
			if (data[0]['max_beds'] == null){storeValue('maxb',undefined)}else{
			storeValue('maxb', String(data[0]['max_beds']))}
			if (data[0]['min_sqft'] == null){storeValue('mins',undefined)}else{
			storeValue('mins', String(data[0]['min_sqft']))}
			if (data[0]['max_sqft'] == null){storeValue('maxs',undefined)}else{
			storeValue('maxs', String(data[0]['max_sqft']))}
			if (data[0]['keywords'] == null){storeValue('keywords',undefined)}else{
			storeValue('keywords', String(data[0]['keywords']))}
			if (data[0]['min_hoa'] == null){storeValue('minh',undefined)}else{
			storeValue('minh', String(data[0]['min_hoa']))}
			if (data[0]['min_days_on_mkt'] == null){storeValue('mind',undefined)}else{
			storeValue('mind', String(data[0]['min_days_on_mkt']))}}

		});
	}
	
	
}