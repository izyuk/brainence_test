import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: '',
            randomPhotos: {}
        };
        this.imageUrl = this.imageUrl.bind(this);
    }

    async loadAlbums() {
        let apiRequestAlbums = await fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${this.props.appStore.getUserId}`).then(function (response) {
            return response.json()
        });
        this.setState({
            userID: this.props.appStore.getUserId
        });
        console.log('apiRequestAlbums', apiRequestAlbums);
        // let apiRequestPhotos = await fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${this.props.appStore.getUserId}`).then(function (response) {
        //     return response.json()
        // });
        let combinedData = {"apiRequestAlbums": {}/*, "apiRequestPhotos": {}*/};
        await Promise.all([apiRequestAlbums/*, apiRequestPhotos*/]).then(function (values) {
            combinedData["apiRequestAlbums"] = values[0];
            // combinedData["apiRequestPhotos"] = values[1];
            return combinedData;
        });

        console.log('combinedData', combinedData);


        await this.dataRender(combinedData);
    }

    dataRender(data) {

        var arr = [];
        data.apiRequestAlbums.map((item) => {
            arr.push(
                <div style={{width: '25%', border: '1px solid #000'}} key={item.id}>
                    <Link to={`/gallery/album/${item.id}`}>
                        <p>{item.title}</p>
                        <img src='' alt=""/>
                    </Link>
                </div>
            );
        });

        console.log('outputData', arr);
        this.setState({
            albums: arr
        });
        this.imageUrl();

        console.log('randomPhotos', this.state.randomPhotos);
    }

    async imageUrl() {
        let obj = await fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=1&id=${Math.floor(Math.random() * 50)}`).then(function (response) {
            return response.json()
        });
        let photos = {"randomPhotos": {}};
        await Promise.all([obj]).then(function (value) {
            photos['randomPhotos'] = value;
            return photos;
        });
        this.setState({
            randomPhotos: photos.randomPhotos
        });

    }

    componentWillMount() {
        this.loadAlbums();


    }

    componentDidMount() {
        console.log(this.props.appStore);
    }

    render() {
        if (!this.state.albums) {
            <p>Some list...</p>
        }


        return (
            <div>
                <div style={{display: 'flex', width: '100%', flexWrap: 'wrap'}}>
                    {this.state.albums}
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
        onIdEnter: (id) => {
            dispatch({type: 'LOADED', payload: id});
        }
    })
)(Gallery);