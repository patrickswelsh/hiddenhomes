export default {
	async resetForm () {
		await storeValue('disable_submit', true)
	},
	async getDetails () {
		return GetUsr.run()
		.then(data =>{
			Object.keys(data[0])
			.map(key => storeValue(key,data[0][key]))
				if (appsmith.store.account_type == 'agent'){
					usrdetails.agentButton1()}
				if (appsmith.store.account_type == 'investor'){
					usrdetails.investorButton1()}
				if (appsmith.store.account_type == 'buyer'){
					usrdetails.buyerButton1()}
			})
;
	},
	async agentButton1 () {
		storeValue('account_type','agent');
		storeValue('agentColor','PRIMARY');
		storeValue('investorColor','SECONDARY');
		return storeValue('buyerColor','SECONDARY');
	},
		async investorButton1 () {
		storeValue('acccount_type','investor');
		storeValue('agentColor','SECONDARY');
		storeValue('investorColor','PRIMARY');
		return storeValue('buyerColor','SECONDARY');
	},
		async buyerButton1 () {
		storeValue('account_type','buyer');
		storeValue('agentColor','SECONDARY');
		storeValue('investorColor','SECONDARY');
		return storeValue('buyerColor','PRIMARY');
	},
	async storeUsr () {
		UpdateUsr.run().then(
		data => {
			usrdetails.getDetails()
			
		}
		)
		
	}
}