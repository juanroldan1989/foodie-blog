import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createPost: function() {
      var post = this.store.createRecord("post", {
        title: this.get("title"),
        body: this.get("body")
      });

      this.setProperties({
        title: "",
        body: ""
      });

      post.save();
    }
  }
});
