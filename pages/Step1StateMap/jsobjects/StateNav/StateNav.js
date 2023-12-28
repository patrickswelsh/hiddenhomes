export default {
	async getState () {
		const usStates = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
		const centers =  [
    {
        "state": "Alabama",
        "coords": [
            32.7794,
            -86.8287
        ]
    },
    {
        "state": "Alaska",
        "coords": [
            64.0685,
            -152.2782
        ]
    },
    {
        "state": "Arizona",
        "coords": [
            34.2744,
            -111.6602
        ]
    },
    {
        "state": "Arkansas",
        "coords": [
            34.8938,
            -92.4426
        ]
    },
    {
        "state": "California",
        "coords": [
            37.1841,
            -119.4696
        ]
    },
    {
        "state": "Colorado",
        "coords": [
            38.9972,
            -105.5478
        ]
    },
    {
        "state": "Connecticut",
        "coords": [
            41.6219,
            -72.7273
        ]
    },
    {
        "state": "Delaware",
        "coords": [
            38.9896,
            -75.5050
        ]
    },
    {
        "state": "District of Columbia",
        "coords": [
            38.9101,
            -77.0147
        ]
    },
    {
        "state": "Florida",
        "coords": [
            28.6305,
            -82.4497
        ]
    },
    {
        "state": "Georgia",
        "coords": [
            32.6415,
            -83.4426
        ]
    },
    {
        "state": "Hawaii",
        "coords": [
            20.2927,
            -156.3737
        ]
    },
    {
        "state": "Idaho",
        "coords": [
            44.3509,
            -114.6130
        ]
    },
    {
        "state": "Illinois",
        "coords": [
            40.0417,
            -89.1965
        ]
    },
    {
        "state": "Indiana",
        "coords": [
            39.8942,
            -86.2816
        ]
    },
    {
        "state": "Iowa",
        "coords": [
            42.0751,
            -93.4960
        ]
    },
    {
        "state": "Kansas",
        "coords": [
            38.4937,
            -98.3804
        ]
    },
    {
        "state": "Kentucky",
        "coords": [
            37.5347,
            -85.3021
        ]
    },
    {
        "state": "Louisiana",
        "coords": [
            31.0689,
            -91.9968
        ]
    },
    {
        "state": "Maine",
        "coords": [
            45.3695,
            -69.2428
        ]
    },
    {
        "state": "Maryland",
        "coords": [
            39.0550,
            -76.7909
        ]
    },
    {
        "state": "Massachusetts",
        "coords": [
            42.2596,
            -71.8083
        ]
    },
    {
        "state": "Michigan",
        "coords": [
            44.3467,
            -85.4102
        ]
    },
    {
        "state": "Minnesota",
        "coords": [
            46.2807,
            -94.3053
        ]
    },
    {
        "state": "Mississippi",
        "coords": [
            32.7364,
            -89.6678
        ]
    },
    {
        "state": "Missouri",
        "coords": [
            38.3566,
            -92.4580
        ]
    },
    {
        "state": "Montana",
        "coords": [
            47.0527,
            -109.6333
        ]
    },
    {
        "state": "Nebraska",
        "coords": [
            41.5378,
            -99.7951
        ]
    },
    {
        "state": "Nevada",
        "coords": [
            39.3289,
            -116.6312
        ]
    },
    {
        "state": "New Hampshire",
        "coords": [
            43.6805,
            -71.5811
        ]
    },
    {
        "state": "New Jersey",
        "coords": [
            40.1907,
            -74.6728
        ]
    },
    {
        "state": "New Mexico",
        "coords": [
            34.4071,
            -106.1126
        ]
    },
    {
        "state": "New York",
        "coords": [
            42.9538,
            -75.5268
        ]
    },
    {
        "state": "North Carolina",
        "coords": [
            35.5557,
            -79.3877
        ]
    },
    {
        "state": "North Dakota",
        "coords": [
            47.4501,
            -100.4659
        ]
    },
    {
        "state": "Ohio",
        "coords": [
            40.2862,
            -82.7937
        ]
    },
    {
        "state": "Oklahoma",
        "coords": [
            35.5889,
            -97.4943
        ]
    },
    {
        "state": "Oregon",
        "coords": [
            43.9336,
            -120.5583
        ]
    },
    {
        "state": "Pennsylvania",
        "coords": [
            40.8781,
            -77.7996
        ]
    },
    {
        "state": "Rhode Island",
        "coords": [
            41.6762,
            -71.5562
        ]
    },
    {
        "state": "South Carolina",
        "coords": [
            33.9169,
            -80.8964
        ]
    },
    {
        "state": "South Dakota",
        "coords": [
            44.4443,
            -100.2263
        ]
    },
    {
        "state": "Tennessee",
        "coords": [
            35.8580,
            -86.3505
        ]
    },
    {
        "state": "Texas",
        "coords": [
            31.4757,
            -99.3312
        ]
    },
    {
        "state": "Utah",
        "coords": [
            39.3055,
            -111.6703
        ]
    },
    {
        "state": "Vermont",
        "coords": [
            44.0687,
            -72.6658
        ]
    },
    {
        "state": "Virginia",
        "coords": [
            37.5215,
            -78.8537
        ]
    },
    {
        "state": "Washington",
        "coords": [
            47.3826,
            -120.4472
        ]
    },
    {
        "state": "West Virginia",
        "coords": [
            38.6409,
            -80.6227
        ]
    },
    {
        "state": "Wisconsin",
        "coords": [
            44.6243,
            -89.9941
        ]
    },
    {
        "state": "Wyoming",
        "coords": [
            42.9957,
            -107.5512
        ]
    }
]
		const iframeMessage = Iframe1.message;
		const isState = usStates.includes(iframeMessage);
		var coords = []
		storeValue('coords',null)
		if (isState){
			 for (const i in centers){
				 if(centers[i]["state"]==iframeMessage){coords = centers[i]["coords"];storeValue('coords',coords); break;}
			 }
			navigateTo('Step2ZipCodeMap')
			
		}else{console.log(isState);showModal('usStateMessage')}
		
		return
	}
}