import DS from "ember-data";

var Recipe = DS.Model.extend({
  userId: DS.attr("integer"),
  title: DS.attr("string"),
  body: DS.attr("text")
});

Recipe.reopenClass({
  FIXTURES: [
    {
      id: 1,
      userId: 1,
      title: "How to prepare a nice salad!",
      body: "Hi! first you need to find the right ingredients..."
    },
    {
      id: 2,
      userId: 4,
      title: "The best pizza in town",
      body: "Hello! and welcome to another master recipe from my own city..."
    }
  ]
});

export default Recipe;
