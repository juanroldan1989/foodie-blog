import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("home", { path: "/" });

  this.resource("posts", function() {
    this.route("new");
    this.route("show", { path: "/:post_id" });
    this.route("edit", { path: "/:post_id/edit" });
  });

  this.resource("recipes", function() {
    this.route("new");
    this.route("show", { path: "/:recipe_id" });
    this.route("edit", { path: "/:recipe_id/edit" });
  });

  this.resource("reviews", function() {
    this.route("new");
    this.route("show", { path: "/:review_id" });
    this.route("edit", { path: "/:review_id/edit" });
  });
});

export default Router;
