import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('register');

  this.route('login');

  this.route('protected');

  this.resource('address-book', function(){
    this.route('index');

    this.route('details', {path: '/:company_slug/details'});

    this.route('add-credentials', {path: '/:company_slug/add-credentials'});
    
  });

});
