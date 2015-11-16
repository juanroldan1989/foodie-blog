import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPost: function() {
      var post = this.store.createRecord("post", {
        user_id: 1, //TODO: replace with current_user's ID
        title: this.get("title"),
        body: this.get("body")
      });

      var self = this;

      var onSuccess = function() {
        self.transitionToRoute("posts");
      };

      var onFail = function(post) {
        // deal with the failure here
      };

      post.save().then(onSuccess, onFail);

      this.setProperties({
        title: "",
        body: ""
      });
    }
  }
});
