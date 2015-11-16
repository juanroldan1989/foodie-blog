import DS from "ember-data";

var Recipe = DS.Model.extend({
  user_id: DS.attr("number"),
  title: DS.attr("string"),
  body: DS.attr("string")
});

Recipe.reopenClass({
  FIXTURES: [
    {
      id: 1,
      user_id: 1,
      title: "How to prepare a nice salad!",
      body: "Hi! first you need to find the right ingredients..."
    },
    {
      id: 2,
      user_id: 4,
      title: "The best pizza in town",
      body: "Hello! and welcome to another master recipe from my own city..."
    }
  ]
});

export default Recipe;
