// import npm and meteor packages here
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import components and collections here
import App from './components/app';
import CreateListing from './components/listings/create-listing';
import ListingDetail from './components/listings/listing-detail';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='create' component={CreateListing} />
      <Route path='listings/:listingId' component={ListingDetail} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
})
