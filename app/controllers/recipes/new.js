import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createRecipe: function() {
      var recipe = this.store.createRecord("recipe", {
        userId: 4, //TODO: replace with current_user's ID
        title: this.get("title"),
        body: this.get("body")
      });

      recipe.save();

      this.setProperties({
        title: "",
        body: ""
      });

      this.transitionTo("recipes");
    }
  }
});
