const React = require('react')
const ReactDOM = require('react-dom')

const root = document.querySelector('#app')
ReactDOM.render(<div />, root)

// Append the DummyComponent to the root element.

//import React from 'react';
//import ReactDOM from 'react-dom';
//import UniversalRouter from 'universal-router';
//
//const routes = [
//  { path: '/one', action: () => <h1>Page One</h1> },
//  { path: '/two', action: () => <h1>Page Two</h1> },
//  { path: '(.*)', action: () => <h1>Not Found</h1> }
//];
//
//const router = new UniversalRouter(routes);
//
//router.resolve({ pathname: '/one' }).then(component => {
//  ReactDOM.render(component, document.body);
//  // renders: <h1>Page One</h1>
//});
