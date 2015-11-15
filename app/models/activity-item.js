import DS from "ember-data";

var ActivityItem = DS.Model.extend({
  userId:         DS.attr("number"),
  actionType:    DS.attr("string"),
  resourceType:  DS.attr("string"),
  resourceId:    DS.attr("number"),
  resourceTitle: DS.attr("string"),
  createdAt:     DS.attr("date"),
  updatedAt:     DS.attr("date")
});

ActivityItem.reopenClass({
  FIXTURES: [
    {
      id: 1,
      userId: 1,
      actionType:    "create",
      resourceType:  "post",
      resourceId:    45,
      resourceTitle: "This is my first post in Foodie Blog!",
      createdAt:     "2015-05-27T12:54:01",
      updatedAt:     "2015-05-27T12:54:01"
    },
    {
      id: 2,
      userId: 32,
      actionType:    "update",
      resourceType:  "recipe",
      resourceId:    22,
      resourceTitle: "The best pasta in town ragazzi!",
      createdAt:     "2015-05-27T12:54:01",
      updatedAt:     "2015-06-27T12:54:01"
    },
    {
      id: 3,
      userId: 15,
      actionType:    "create",
      resourceType:  "review",
      resourceId:    11,
      resourceTitle: "My feelings after having lunch at Dunbar Hotel",
      createdAt:     "2015-05-27T12:54:01",
      updatedAt:     "2015-05-27T12:54:01"
    },
    {
      id: 4,
      userId: 89,
      actionType:    "delete",
      resourceType:  "post",
      resourceId:    10,
      resourceTitle: "What a wonderful post",
      createdAt:     "2015-05-27T12:54:01",
      updatedAt:     "2015-09-27T12:54:01"
    },
    {
      id: 5,
      userId: 19,
      actionType:    "update",
      resourceType:  "recipe",
      resourceId:    33,
      resourceTitle: "This is the new title for my recipe",
      createdAt:     "2015-05-27T12:54:01",
      updatedAt:     "2015-07-27T12:54:01"
    },
  ]
});

export default ActivityItem;
