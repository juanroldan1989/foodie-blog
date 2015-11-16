import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createReview: function() {
      var review = this.store.createRecord("review", {
        user_id: 4, //TODO: replace with current_user's ID
        title: this.get("title"),
        body: this.get("body")
      });

      var self = this;

      var onSuccess = function() {
        self.transitionToRoute("reviews");
      };

      var onFail = function(review) {
        // deal with the failure here
      };

      review.save().then(onSuccess, onFail);

      this.setProperties({
        title: "",
        body: ""
      });
    }
  }
});
