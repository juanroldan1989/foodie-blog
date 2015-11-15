import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updatePost: function(post) {
      var self = this;

      var onSuccess = function() {
        self.transitionToRoute("posts");
      };

      var onFail = function(post) {
        // deal with the failure here
      };

      post.save().then(onSuccess, onFail);
    }
  }
});
