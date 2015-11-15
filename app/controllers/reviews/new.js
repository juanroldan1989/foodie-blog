import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createReview: function() {
      var review = this.store.createRecord("review", {
        userId: 4, //TODO: replace with current_user's ID
        title: this.get("title"),
        body: this.get("body")
      });

      review.save();

      this.setProperties({
        title: "",
        body: ""
      });
    }
  }
});
