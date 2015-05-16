import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import AddressBookHomeAdapter from 'task-app/adapters/address-book/home';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(){
    var adapter = AddressBookHomeAdapter.create();
    var companies =  adapter.findAll();
    return companies;
  }
});
