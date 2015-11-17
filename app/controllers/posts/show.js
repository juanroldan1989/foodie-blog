import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deletePost: function(post) {
      post.destroyRecord();

      this.transitionToRoute("posts");
    }
  }
});
