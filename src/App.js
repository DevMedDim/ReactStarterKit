import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Landing from './views/Landing';
import NoteFound from './views/NoteFound';
function App(){

    return (
        
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/" component={NoteFound} />
                </Switch>
            </Router>
           
        
    )

}
export default App;