export default {
	async setPrefs () {
		if (min_year == ""){var miny = null}else{miny = Number(min_year.text)}
		if (max_year == ""){var maxy = null}else{maxy = Number(max_year.text)} 
		if (min_lot.selectedOptionValue == ""){var minl = null}else{minl = Number(min_lot.selectedOptionValue)} 
		if (max_lot.selectedOptionValue == ""){var maxl = null}else{maxl = Number(max_lot.selectedOptionValue)}
		if (min_price.text == ""){var minp = null}else{minp = Number(min_price.text)} 
		if (max_price.text == ""){var maxp = null}else{maxp = Number(max_price.text)} 
		if (min_beds.selectedOptionValue == ""){var minb = null}else{minb = Number(min_beds.selectedOptionValue)} 
		if (max_beds.selectedOptionValue == ""){var maxb = null}else{maxb = Number(max_beds.selectedOptionValue)}
		if (min_sqft.selectedOptionValue == ""){var mins = null}else{mins = Number(min_sqft.selectedOptionValue)} 
		if (max_sqft.selectedOptionValue == ""){var maxs = null}else{maxs = Number(max_sqft.selectedOptionValue)} 
		if (max_hoa.text == ""){var maxh = null}else{maxh = Number(max_hoa.text)}
		
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
			"keywords": keywords.text
			
		}])
		 
	},

	async getPrefs () {
		return GetPrefs.run()
		.then(data =>{
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
			}else{
			if (data[0]['single_family'])(typs.push('single_family'))
			if (data[0]['multi_family'])(typs.push('multi_family'))
			if (data[0]['mobile_home'])(typs.push('mobile'))
			if (data[0]['land'])(typs.push('land'))
			if (data[0]['farm'])(typs.push('farm'))
			
			storeValue('typs',typs)
			storeValue('miny', data[0]['min_built'])
			storeValue('maxy', data[0]['max_built'])
			storeValue('minl', String(data[0]['min_lot']))
			storeValue('maxl', String(data[0]['max_lot']))
			storeValue('minp', data[0]['min_price'])
			storeValue('maxp', data[0]['max_price'])
			storeValue('minb', String(data[0]['min_beds']))
			storeValue('maxb', String(data[0]['max_beds']))
			storeValue('mins', String(data[0]['min_sqft']))
			storeValue('maxs', String(data[0]['max_sqft']))
			storeValue('keywords', String(data[0]['keywords']))}

		});
	}
	
	
}

