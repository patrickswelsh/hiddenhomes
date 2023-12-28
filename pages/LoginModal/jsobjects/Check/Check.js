export default {
	async statusCheck () {
		return GetUserStep.run()
		.then(data =>{
			if (data[0]["setup_step"]==0){navigateTo('Step0BasicInfo')}else if (data[0]["setup_step"]==1){navigateTo('Step1StateMap')} else if (data[0]["setup_step"]==2){navigateTo('Step2ZipCodeMap')}else if (data[0]["setup_step"]==3){navigateTo('Step3Preferences')}else {navigateTo('UserDashboard')}
			});
	}
}