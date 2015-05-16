import Ember from 'ember';

export default Ember.Controller.extend({
	clearProperties: function(){
		this.setProperties({
			username: "",
			email: "",
			password: ""
		});
	},

	actions:{
		register: function(){
			var self = this;
			var data = self.getProperties('username', 'email', 'password');
			
			$.post('http://localhost:8000/api/v1/auth/register', data).then(function(response){
				alert(response);
			});

			self.clearProperties();
		}
	}
});
