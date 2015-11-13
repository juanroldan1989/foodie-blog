import DS from "ember-data";

var Post = DS.Model.extend({
  userId: DS.attr("integer"),
  title: DS.attr("string"),
  body: DS.attr("text")
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      userId: 1,
      title: "Great meals for everyone",
      body: "Let me tell you about this place I went last night..."
    },
    {
      id: 2,
      userId: 2,
      title: "Where're my vegetables?",
      body: "Just when you thought nobody still cares about vegetables..."
    }
  ]
});

export default Post;
