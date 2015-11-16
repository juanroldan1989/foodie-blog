import DS from "ember-data";

var Post = DS.Model.extend({
  user_id: DS.attr("number"),
  title: DS.attr("string"),
  body: DS.attr("string")
});

Post.reopenClass({
  FIXTURES: [
    {
      id: 1,
      user_id: 1,
      title: "Great meals for everyone",
      body: "Let me tell you about this place I went last night..."
    },
    {
      id: 2,
      user_id: 2,
      title: "Where're my vegetables?",
      body: "Just when you thought nobody still cares about vegetables..."
    }
  ]
});

export default Post;
