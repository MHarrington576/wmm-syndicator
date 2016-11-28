// Third-party dependencies
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

// Local dependencies
var setUpParse = require('./parseUtilities').setUpParse;
var TestingComponent = require('./components/testing.jsx').TestingComponent;
var HomepageContainer = require('./components/homepage.jsx').HomepageContainer;
var UserCreationContainer = require('./components/createUser.jsx').UserCreationContainer;
// var DashboardContainer = require('./components/dashboard.jsx').DashboardContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'homepage',
    'testing': 'testing',
    'user/create': 'createUser',
    'user/dashboard': 'dashboard',
    'syndicate/hq': 'headquarters',
    'syndicate/agenda': 'agenda',
    'syndicate/dossier/messages': 'messages',
    'syndicate/exec/deployment': 'deployment',
    'syndicate/dossier': 'dossier'
  },

  initialize: function(){
    setUpParse('tiyfeefall2016', 'parietinaeumbra');
  },

  homepage: function(){
    ReactDOM.render(
      React.createElement(HomepageContainer),
      document.getElementById('app')
    );
  },

  testing: function(){
    ReactDOM.render(
      React.createElement(TestingComponent),
      document.getElementById('app')
    );
  },

  createUser: function(){
    ReactDOM.render(
      React.createElement(UserCreationContainer),
      document.getElementById('app')
    );
  }
  // ,

  // dashboard: function(){
  //   ReactDOM.render(
  //     React.createElement(DashboardContainer),
  //     document.getElementById('app')
  //   );
  // },
  //
  // headquarters: function(){
  //   ReactDOM.render(
  //     React.createElement(HeadquartersContainer),
  //     document.getElementById('app')
  //   );
  // },
  //
  // agenda: function(){
  //   ReactDOM.render(
  //     React.createElement(AgendaContainer),
  //     document.getElementById('app')
  //   );
  // },
  //
  // messages: function(){
  //   ReactDOM.render(
  //     React.createElement(MessagesContainer),
  //     document.getElementById('app')
  //   );
  // },
  //
  // deployment: function(){
  //   ReactDOM.render(
  //     React.createElement(DeploymentContainer),
  //     document.getElementById('app')
  //   );
  // },
  //
  // dossier: function(){
  //   ReactDOM.render(
  //     React.createElement(DossierContainer),
  //     document.getElementById('app')
  //   );
  // }

});

// Instantiate the router
var router = new AppRouter();

module.exports = router;
