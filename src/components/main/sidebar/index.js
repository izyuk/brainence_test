import React, {Component} from 'react';
import style from './sidebar.less';

class Sidebar extends Component {
    render(){
        return(
            <div className={style.sidebar_wrap}>
                <nav>
                    <ul>
                        <li><a href="">Just</a></li>
                        <li><a href="">Random</a></li>
                        <li><a href="">Static</a></li>
                        <li><a href="">Menu</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar;