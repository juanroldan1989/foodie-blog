import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteRecipe: function(recipe) {
      recipe.destroyRecord();

      this.transitionToRoute("recipes");
    }
  }
});
