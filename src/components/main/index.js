import React, {Component} from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import style from './main.less';
import Header from './header';
import Sidebar from './sidebar';
import Gallery from '../gallery';
import Album from '../gallery/album';

class Wrapper extends Component {
    render(){
        return(
            <div style={{maxWidth: '100%', display: 'flex', flexDirection: 'column'}}>
                <Header/>
                <div className={style.wrap}>
                    <Sidebar/>
                    <Switch>
                        {/*<Route*/}
                            {/*exact*/}
                            {/*path='/gallery/'*/}
                            {/*render={() => (*/}
                                {/*<Redirect to="/gallery/"/>*/}
                            {/*)}*/}
                        {/*/>*/}
                        {/*<Route*/}

                            {/*path='/gallery/album/:albumId'*/}
                            {/*render={() => (*/}
                                {/*<Redirect to="/gallery/album/:albumId"/>*/}
                            {/*)}*/}
                        {/*/>*/}
                        <Route exact path='/gallery/:userId' component={Gallery}/>
                        <Route exact path='/gallery/album/:albumId' component={Album}/>
                    </Switch>
                    {/*<Gallery/>*/}
                    {/*<Album/>*/}
                </div>
            </div>
        )
    }
}

export default Wrapper;