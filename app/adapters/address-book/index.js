import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Object.extend({
    findAll: function(){
        return ajax('http://localhost:8000/api/v1/companies?includes=detail')
            .then(function(response){
                return response.data.map(function(c){
                	return {
                		name: c.name,
                		slug: c.slug,
                		address: c.detail.data.address,
                		city: c.detail.data.city,
                		state: c.detail.data.state,
                		country: c.detail.data.country,
                		zip_code: c.detail.data.zip_code,
                        unformatted_phone: c.detail.data.unformatted_phone_number,
                		formatted_phone: c.detail.data.formatted_phone_number,
                        email: c.detail.data.email,
                		showDetails: false
                	}
                });
            });
    }
});