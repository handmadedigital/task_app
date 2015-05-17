import Ember from 'ember';

export default Ember.Controller.extend({
	showDetails: true,

	actions:{
		showDetails:function(){
			if(this.showDetails == false){
				this.toggleProperty('showDetails');
			}
		},
		showCredentials: function() {
			if(this.showDetails == true){
				this.toggleProperty('showDetails');
			}
		}
	}
});
