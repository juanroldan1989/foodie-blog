import DS from "ember-data";

var ActivityItem = DS.Model.extend({
  user_id:         DS.attr("number"),
  action_type:    DS.attr("string"),
  resource_type:  DS.attr("string"),
  resource_id:    DS.attr("number"),
  resource_title: DS.attr("string"),
  created_at:     DS.attr("date"),
  updated_at:     DS.attr("date")
});

ActivityItem.reopenClass({
  FIXTURES: [
    {
      id: 1,
      user_id: 1,
      action_type:    "create",
      resource_type:  "post",
      resource_id:    45,
      resource_title: "This is my first post in Foodie Blog!",
      created_at:     "2015-05-27T12:54:01",
      updated_at:     "2015-05-27T12:54:01"
    },
    {
      id: 2,
      user_id: 32,
      action_type:    "update",
      resource_type:  "recipe",
      resource_id:    22,
      resource_title: "The best pasta in town ragazzi!",
      created_at:     "2015-05-27T12:54:01",
      updated_at:     "2015-06-27T12:54:01"
    },
    {
      id: 3,
      user_id: 15,
      action_type:    "create",
      resource_type:  "review",
      resource_id:    11,
      resource_title: "My feelings after having lunch at Dunbar Hotel",
      created_at:     "2015-05-27T12:54:01",
      updated_at:     "2015-05-27T12:54:01"
    },
    {
      id: 4,
      user_id: 89,
      action_type:    "delete",
      resource_type:  "post",
      resource_id:    10,
      resource_title: "What a wonderful post",
      created_at:     "2015-05-27T12:54:01",
      updated_at:     "2015-09-27T12:54:01"
    },
    {
      id: 5,
      user_id: 19,
      action_type:    "update",
      resource_type:  "recipe",
      resource_id:    33,
      resource_title: "This is the new title for my recipe",
      created_at:     "2015-05-27T12:54:01",
      updated_at:     "2015-07-27T12:54:01"
    },
  ]
});

export default ActivityItem;
