import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateReview: function(review) {
      var self = this;

      var onSuccess = function() {
        self.transitionToRoute("reviews");
      };

      var onFail = function(review) {
        // deal with the failure here
      };

      review.save().then(onSuccess, onFail);
    }
  }
});
