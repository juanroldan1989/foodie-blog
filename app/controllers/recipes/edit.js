import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateRecipe: function(recipe) {
      var self = this;

      var onSuccess = function() {
        self.transitionToRoute("recipes");
      };

      var onFail = function(recipe) {
        // deal with the failure here
      };

      recipe.save().then(onSuccess, onFail);
    }
  }
});
