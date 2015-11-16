import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createRecipe: function() {
      var recipe = this.store.createRecord("recipe", {
        user_id: 4, //TODO: replace with current_user's ID
        title: this.get("title"),
        body: this.get("body")
      });

      var self = this;

      var onSuccess = function() {
        self.transitionToRoute("recipes");
      };

      var onFail = function(recipe) {
        // deal with the failure here
      };

      recipe.save().then(onSuccess, onFail);

      this.setProperties({
        title: "",
        body: ""
      });
    }
  }
});
