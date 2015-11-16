import DS from "ember-data";

// For prototyping purposes, later to be changed with RestAdapter
// export default DS.FixtureAdapter.extend();

export default DS.RESTAdapter.extend({
  host: "http://localhost:5000"
  // headers: {
  //   'API_KEY': 'secret key',
  //   'ANOTHER_HEADER': 'Some header value'
  // }
});
