import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Products from './components/Productos';
import NewProduct from './components/NuevoProducto';
import EditProduct from './components/EditarProducto';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/products/new" component={NewProduct} />
              <Route exac path="/products/edit/:id" component={EditProduct} />
            </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
