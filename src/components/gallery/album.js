import React, {Component} from 'react';
import {connect} from 'react-redux';


class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: []
        }
    }


    async loadAlbums() {
        let apiRequestPhotos = await fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${this.props.match.params.albumId}`).then(function (response) {
            return response.json()
        });
        let combinedData = {"apiRequestPhotos": {}};
        await Promise.all([apiRequestPhotos]).then(function (values) {
            combinedData["apiRequestPhotos"] = values[0];
            return combinedData;
        });
        await this.dataRender(combinedData);
    }

    dataRender(data) {

        var arr = [];
        data.apiRequestPhotos.map((item) => {
            arr.push(
                <div style={{width: '25%', display: 'flex', border: '1px solid #000', height: 'min-content', flexBasis: '200px'}} key={item.id}>
                    <img src={item.url} style={{width: '100%', objectFit: 'contain', alignSelf: 'flex-start'}} alt=""/>
                </div>
            );
        });

        console.log('outputData', arr);
        this.setState({
            pictures: arr
        });
    }

    componentWillMount() {
        this.loadAlbums();
    }

    render() {
        return (
            <div style={{maxWidth: 'calc(100% - 250px)'}}>
                <div style={{display: 'flex', width: '95%', flexWrap: 'wrap', margin: '20px auto', justifyContent: 'center'}}>
                    {this.state.pictures}
                </div>
            </div>

        )
    }
}

export default Album;