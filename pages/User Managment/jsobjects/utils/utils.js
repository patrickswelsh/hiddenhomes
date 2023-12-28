export default {
	signOut: async () => {
		clearStore('token', null).then(() => navigateTo('Login'));
	},

	userToken: async () => {
		const token = appsmith.store.token;
		return jsonwebtoken.decode(token, 'secret');
	},

	getAllUsers: async () => {
		const users = await getUsers.run();

		return users.map(u => {
			return   {
				FirstName: u.first_name,
				LastName:u.last_name,
				AccountType: u.role,
				Email: u.email,
				DateAdded: u.created,
				LastActive: u.last_login,
				Id: u.id,
			}
		})
	},

	generateHash: async (password) => {
		return dcodeIO.bcrypt.hashSync(password, 10);
	},
	
	newUser: async () => {
		const passwordHash = await this.generateHash(inp_password.text);
		
		await createUser.run({
			passwordHash,
		});
		
		await this.getAllUsers();
		
		closeModal('mdl_addUser');
		
		showAlert('User Created!', 'success');
	},
	
	editUser: async () => {
		await updateUser.run();
		
		await this.getAllUsers();
		
		closeModal('mdl_editUser');
		
		showAlert('User Updated!', 'success');
	},
	
	removeUser: async () => {
		await deleteUser.run();
		
		await this.getAllUsers();
		
		closeModal('mdl_deleteUser');
		
		showAlert('User Deleted!', 'success');
	},
}