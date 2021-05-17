import {Route,Switch} from 'react-router-dom';
import Home from '../Views/Home';
import React from 'react';
const Index=()=>{
return(
    <Switch>
      <Route component={Home} exact  path={["/", "/Home"]}/>
    </Switch>
)
} 
export default Index;