import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Object.extend({
	findGroups: function(company){
        console.log(company);
		return ajax('http://localhost:8000/api/v1/'+company+'/credential-groups')
            .then(function(response){
                return response.data.map(function(c){
                    return {
                        id: c.id,
                        name: c.name
                    }
                });
            });
	},

	getCredentialOptions: function(company){
		return ajax('http://localhost:8000/api/v1/'+company+'/credential-options')
            .then(function(response){
                return {
                	name: response.data.name,
                }
            });
	}
});
