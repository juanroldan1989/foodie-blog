import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createRecipe: function() {
      var recipe = this.store.createRecord("recipe", {
        title: this.get("title"),
        body: this.get("body")
      });

      this.setProperties({
        title: "",
        body: ""
      });

      recipe.save();
    }
  }
});
