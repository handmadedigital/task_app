import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Object.extend({
    getCompany: function(params){
        return ajax('http://localhost:8000/api/v1/'+params.company_slug+'/details?includes=detail,employees,credential_groups.credentials')
            .then(function(response){
                return {
                    id: response.data.id,
                	name: response.data.name,
                    slug: response.data.slug,
                	details: response.data.detail,
                	employees: response.data.employees,
                	credentials: response.data.credential_groups
                }
            });
    }
});

