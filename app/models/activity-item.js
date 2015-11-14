import DS from "ember-data";

var ActivityItem = DS.Model.extend({
  userId:         DS.attr("integer"),
  actionType:    DS.attr("string"),
  resourceType:  DS.attr("string"),
  resourceId:    DS.attr("integer"),
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
      createdAt:     "",
      updatedAt:     ""
    },
    {
      id: 2,
      userId: 32,
      actionType:    "update",
      resourceType:  "recipe",
      resourceId:    22,
      resourceTitle: "The best pasta in town ragazzi!",
      createdAt:     "",
      updatedAt:     ""
    },
    {
      id: 3,
      userId: 15,
      actionType:    "create",
      resourceType:  "review",
      resourceId:    11,
      resourceTitle: "My feelings after having lunch at Dunbar Hotel",
      createdAt:     "",
      updatedAt:     ""
    },
    {
      id: 4,
      userId: 89,
      actionType:    "delete",
      resourceType:  "post",
      resourceId:    10,
      resourceTitle: "What a wonderful post",
      createdAt:     "",
      updatedAt:     ""
    },
    {
      id: 5,
      userId: 19,
      actionType:    "update",
      resourceType:  "recipe",
      resourceId:    33,
      resourceTitle: "This is the new title for my recipe",
      createdAt:     "",
      updatedAt:     ""
    },
  ]
});

export default ActivityItem;
