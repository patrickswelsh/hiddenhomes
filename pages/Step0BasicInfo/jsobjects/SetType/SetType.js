export default {
	async initSet () {
		storeValue('type',null)
		storeValue('investorColor','SECONDARY');
		storeValue('buyerColor','SECONDARY');
		return storeValue('agentColor','SECONDARY');
	},
	async agentButton () {
		storeValue('type','agent');
		storeValue('agentColor','PRIMARY');
		storeValue('investorColor','SECONDARY');
		return storeValue('buyerColor','SECONDARY');
	},
		async investorButton () {
		storeValue('type','investor');
		storeValue('agentColor','SECONDARY');
		storeValue('investorColor','PRIMARY');
		return storeValue('buyerColor','SECONDARY');
	},
		async buyerButton () {
		storeValue('type','buyer');
		storeValue('agentColor','SECONDARY');
		storeValue('investorColor','SECONDARY');
		return storeValue('buyerColor','PRIMARY');
	}
}