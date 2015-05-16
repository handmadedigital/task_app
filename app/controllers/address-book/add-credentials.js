import Ember from 'ember';
import AddCredentialAdapter from 'task-app/adapters/address-book/add-credentials';

export default Ember.Controller.extend({
	groups: null,
	showAddCredentials: true,
	showAddCredentialGroup: false,
	showAddCredentialOption: false,

	setGroups: function(){
	     var self = this;
	     var model = this.get('model');
	     var adapter = AddCredentialAdapter.create();
	     var groups = adapter.findGroups(model.company_slug);
	     groups.then(function(response){
	         self.set('groups', response);
	     });
	}.observes('model'),

	initialize: function(){
	    this.set('groups', []);
	}.on('init'),

	actions: {
		addCredentials: function(){
			console.log(this.get('groupCredential'));
		}
	}
	
});
