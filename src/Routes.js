import React from 'react'
import {Router,Route} from 'react-router-dom';
import Cart from './Cart'

const Routes = () => {
  return (
    <Router>
    <div>
     
        <Route path ='/cart exact'>
        <Cart/>
        </Route>
      
    </div>
    </Router>
  
  )
}

export default Routes