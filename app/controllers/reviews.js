import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createReview: function() {
      var review = this.store.createRecord("review", {
        title: this.get("title"),
        body: this.get("body")
      });

      this.setProperties({
        title: "",
        body: ""
      });

      review.save();
    }
  }
});
