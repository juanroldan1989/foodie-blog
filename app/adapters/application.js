import DS from "ember-data";

// For prototyping purposes
export default DS.FixtureAdapter.extend();

// For real interaction with API
// export default DS.RESTAdapter.extend({
//   host: "http://localhost:5000",
//   pathForType: function(type) {
//     return Ember.String.underscore(type) + "s";
//   }
// });
