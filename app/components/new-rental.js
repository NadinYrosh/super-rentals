import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

    save1() {
      var params = {
        owner: this.get('owner') ? this.get('owner') : "",
        city: this.get('city') ? this.get('city') : "",
        type: this.get('type') ? this.get('type') : "",
        image: this.get('image') ? this.get('image') : "",
        bedrooms: this.get('bedrooms') ? this.get('bedrooms') :"",
      };
      this.set('addNewRental', false);
      Ember.Logger.log('log value of params:', params);
      if(params.owner === "" || params.city === "" || params.type === "" || params.image === "" || params.bedrooms === ""){
        return alert("Enter somthing");
      }else{
        return params;
      }

      this.sendAction('save2', params);
    }
  }
});
