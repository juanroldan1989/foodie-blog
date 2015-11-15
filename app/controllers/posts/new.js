import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPost: function() {
      var post = this.store.createRecord("post", {
        userId: 1, //TODO: replace with current_user's ID
        title: this.get("title"),
        body: this.get("body")
      });

      post.save();

      this.setProperties({
        title: "",
        body: ""
      });

      this.transitionTo("posts");
    }
  }
});
