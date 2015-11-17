import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteReview: function(review) {
      review.destroyRecord();

      this.transitionToRoute("reviews");
    }
  }
});
