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
		addCompany: function(){
			var self = this;
			var data = self.getProperties('name', 'address', 'city', 'state', 'zip_code', 'phone_number');
			
			$.post('http://localhost:8000/api/v1/company/add-company', data).then(function(response){
				alert(response);
			});

			self.clearProperties();
		}
	}
});
