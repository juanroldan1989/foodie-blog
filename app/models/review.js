import DS from "ember-data";

var Review = DS.Model.extend({
  userId: DS.attr("integer"),
  title: DS.attr("string"),
  body: DS.attr("text")
});

Review.reopenClass({
  FIXTURES: [
    {
      id: 1,
      userId: 3,
      title: "Something nice to say about",
      body: "I really like the pizza recipe from Jhon. It's at the same time original and easy to prepare and enjoy with friends."
    },
    {
      id: 2,
      userId: 2,
      title: "I would love to see this improved!",
      body: "As much as I looooove salads, this recipe from Caroline would be greater I believe with less ingredients."
    }
  ]
});

export default Review;
