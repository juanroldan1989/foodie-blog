import DS from "ember-data";

var Review = DS.Model.extend({
  user_id: DS.attr("number"),
  title: DS.attr("string"),
  body: DS.attr("string")
});

Review.reopenClass({
  FIXTURES: [
    {
      id: 1,
      user_id: 3,
      title: "Something nice to say about",
      body: "I really like the pizza recipe from Jhon. It's at the same time original and easy to prepare and enjoy with friends."
    },
    {
      id: 2,
      user_id: 2,
      title: "I would love to see this improved!",
      body: "As much as I looooove salads, this recipe from Caroline would be greater I believe with less ingredients."
    }
  ]
});

export default Review;
