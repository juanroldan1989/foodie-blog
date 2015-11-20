import Ember from "ember";

export function formatLink(params/*, hash*/) {
  return params + "s.show";
}

export default Ember.Helper.helper(formatLink);
