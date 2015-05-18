import Ember from 'ember';

export default Ember.ArrayController.extend({

    searchKeyword: null,

    clearProperties: function(){
        this.setProperties({
            username: "",
            email: "",
            password: ""
        });
    },

    companyResults: function() {

        var searchKeyword = this.get('searchKeyword'),
            companies     = this.get('model');

        if (Ember.isEmpty(searchKeyword)) return companies;

        var regex = new RegExp(searchKeyword, 'i');

        return companies.filter(function(company){
            return company.name.match(regex);
        });

    }.property('searchKeyword', 'model'),

    actions: {
        showDetails: function(company){
            if(company.showDetails == false)
            {
                Ember.set(company, 'showDetails', true);
            }
            else            {
                Ember.set(company, 'showDetails', false);
            }
        },

        addCompany: function(){
            var self = this;
            var data = self.getProperties('name', 'address', 'city', 'state', 'zip', 'phone');

            $.post('http://localhost:8000/api/v1/company/add-company', data).then(function(response){
                alert(response);
            });

            self.clearProperties();
        }
    },

    phoneFormat: function(phone) {
      phone = phone.replace(/[^0-9]/g, '');
      phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      return phone;
    }
});
