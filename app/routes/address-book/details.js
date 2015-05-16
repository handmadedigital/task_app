import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import AddressBookDetailsAdapter from 'task-app/adapters/address-book/details';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model: function(params){
		var adapter = AddressBookDetailsAdapter.create();
        var companies =  adapter.getCompany(params);
        return companies;
    }
});
