import Ember from 'ember';
import AddCredentialAdapter from 'task-app/adapters/address-book/add-credentials';

export default Ember.Controller.extend({
	groups: null,
	options: null,

	setOptions: function(){
		var self = this;
	     var model = this.get('model');
	     var adapter = AddCredentialAdapter.create();
	     var groups = adapter.getOptions(model.company_slug);
	     groups.then(function(response){
	         self.set('options', response);
	     });
	}.observes('model'),


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
	    this.set('options', []);

	}.on('init'),

	actions: {
		addCredentials: function(){
			console.log(this.get('groupCredential'));
		}
	}
	
});
