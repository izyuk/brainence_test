import React, {Component} from 'react';
import style from './header.less';

class Header extends Component {
    render(){
        return(
            <header>
                <div className={style.logo}>
                    <p>Logo</p>
                </div>
                <div className={style.logout}>
                    <a href="/">Logout</a>
                </div>
            </header>
        )
    }
}

export default Header;