import DS from "ember-data";

// For prototyping purposes
// export default DS.FixtureAdapter.extend();

// For real interaction with API
export default DS.RESTAdapter.extend({
  // host: "http://localhost:5000",
  host: "https://foodie-blog-api.herokuapp.com",
  namespace: "v1",
  pathForType: function(type) {
    var underscored = Ember.String.underscore(type);

    return Ember.String.pluralize(underscored);
  }
});
