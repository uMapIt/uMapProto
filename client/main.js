// import npm and meteor packages here
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import components and collections here
import App from './components/app';
import ListingsCreate from './components/listings/ListingsCreate';
import ListingsDetail from './components/listings/ListingsDetail';
import ListingsView from './components/listings/ListingsView';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={ListingsView}/>
      <Route path='create' component={ListingsCreate} />
      <Route path='listings/:listingId' component={ListingsDetail} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
})
