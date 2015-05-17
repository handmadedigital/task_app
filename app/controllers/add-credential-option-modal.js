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
		addCredentialOption: function(){
			var self = this;
			var model = self.get('model');
			var data = self.getProperties('name');

			console.log(data);
			
			$.post('http://localhost:8000/api/v1/'+model.company_slug+'/credential/add-credential-option', data).then(function(response){
				
			});

			self.clearProperties();
		}
	}
});
