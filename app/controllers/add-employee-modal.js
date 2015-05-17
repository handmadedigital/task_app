import Ember from 'ember';

export default Ember.Controller.extend({
	company_id: {},

	clearProperties: function(){
		this.setProperties({
			username: "",
			email: "",
			password: ""
		});
	},

	actions:{
		addEmployee: function(){
			var self = this;
			var id = this.get('model').id;
			this.set('company_id', id);
			var data = self.getProperties('first_name', 'last_name', 'phone', 'email', 'company_id');

			console.log(data);
			$.post('http://localhost:8000/api/v1/employee/add-employee', data).then(function(response){
				alert(response);
			});

			self.clearProperties();
		}
	}
});
