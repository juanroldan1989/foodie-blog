import Ember from "ember";

export function formatDate(params/*, hash*/) {
  // TODO: use some library to format time properly. E.g: jQuery TimeAgo
  return "2 minutes ago";
}

export default Ember.Helper.helper(formatDate);
