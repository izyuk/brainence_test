import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './components/index';
// import Gallery from './components/gallery';
import Wrapper from './components/main';
import Album from './components/gallery/album';

class Main extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Index}/>
                    <Route path='/gallery/:userId' component={Wrapper}/>
                    {/*<Route exact path='/gallery/album/:albumId' component={Album}/>*/}
                </Switch>
            </div>
        )
    }
}

export default Main;