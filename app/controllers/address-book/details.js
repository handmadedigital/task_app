import Ember from 'ember';

export default Ember.Controller.extend({
	showDetails: true,

	actions:{
		showDetails:function(){
			this.toggleProperty('showDetails');
		},
		showCredentials: function() {
			this.toggleProperty('showDetails');
		}
	}
});
