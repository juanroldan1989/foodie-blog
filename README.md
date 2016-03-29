## "Foodie" Blogging platform

EmberJS app to manage cooking recipes and reviews, interacting with a Rails API: https://github.com/juanroldan1989/foodie-blog-api

Live EmberJS App: https://foodie-blog.herokuapp.com

EmberJS App: https://foodie-blog.herokuapp.com/        - Rails API: https://foodie-blog-api.herokuapp.com/v1/activity_items

EmberJS App: https://foodie-blog.herokuapp.com/posts   - Rails API: https://foodie-blog-api.herokuapp.com/v1/posts

EmberJS App: https://foodie-blog.herokuapp.com/recipes - Rails API: https://foodie-blog-api.herokuapp.com/v1/recipes

EmberJS App: https://foodie-blog.herokuapp.com/reviews - Rails API: https://foodie-blog-api.herokuapp.com/v1/reviews

-----------------------------------------------------------

<b>Status Update</b>
- Implemented support for Posts, Recipes and Reviews CRUD actions.
- Fixtures setup for Posts, Recipes, Reviews and ActivityItems. Prototyping purposes only.
- ActivityItems listed in application layout.
- Test suite setup.
- Persisting data through API
- Currently working on authentication workflow: https://auth0.com/blog/2015/08/11/create-your-first-ember-2-dot-0-app-from-authentication-to-calling-an-api/

-----------------------------------------------------------

<b>Work in progress</b>
- Work with components to DRY-up a little bit templates and controllers: https://www.twilio.com/blog/2015/09/creating-web-components-in-emberjs.html
- Setup a validation workflow that can be implemented across models on CRUD actions being performed.
- Setup partials to be shared across templates, avoiding code duplication.
- Setup some helpers inside templates to format dates properly.

-----------------------------------------------------------

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* To enable/disable interaction with API, please refer to `app/adapters/application.js` file for instructions.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* Heroku Buildpack for ember-cli: https://github.com/tonycoco/heroku-buildpack-ember-cli

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* "Ember JS - Core Concepts" - http://guides.emberjs.com/v2.1.0/getting-started/core-concepts/
* "RailsConf 2015 - Rails and EmberCLI: an integration love story" - https://www.youtube.com/watch?v=NnquHUlh0Pk
* "Building Custom Apps with EmberCLI" - https://www.youtube.com/watch?v=J6vPwvFdUiE

* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

