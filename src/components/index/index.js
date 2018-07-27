import React, {Component} from 'react';
import {/*Switch, Route,*/ Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import style from './index.less';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.idValue = this.idValue.bind(this);
        this.getUser = this.getUser .bind(this);
    }

    idValue(event) {
        this.setState({
            value: event.target.value
        });
        this.props.onIdEnter(this.idInput.value);
    }

    async getUser(){
        let apiRequestUser = await fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
            return response.json()
        });
        console.log(this.state.value);
        console.log(apiRequestUser);
        const myUser = await apiRequestUser.filter(data => data.id == this.state.value);


        if(myUser.length){
            console.log('if');
            this.props.pushData(myUser);
            this.props.history.push(`/gallery/${this.state.value}`, {redirected: true});
            {/*<Redirect to={`/gallery/${this.state.value}`}/>*/}
        }
    }

    render() {
        console.log(this.props.appStore);
        return (
            <div className={style.box}>
                <div className={style.form}>
                    <div className={style.input}>
                        <input onBlur={this.idValue.bind(this)} type="number" ref={(input) => {
                            this.idInput = input
                        }}/>
                    </div>
                    <button onClick={this.getUser.bind(this)}>Enter</button>
                    {/*<Link  to={`/gallery/${this.state.value}`}>Enter</Link>*/}
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        appStore: state
    }),
    dispatch => ({
        onIdEnter: (id) =>{
            dispatch({type: 'GET_USER_ID', payload: id});
        },
        pushData: (arr) =>{
            dispatch({type: 'USE_API_BY_ID', payload: arr});
        }
    })
)(Index);