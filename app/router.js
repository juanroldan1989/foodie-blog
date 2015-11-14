import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("home", { path: "/" });

  this.resource("posts", function() {
    this.route("new");
  });

  this.resource("recipes", function() {
    this.route("new");
  });

  this.resource("reviews", function() {
      this.route("new");
    });
});

export default Router;
