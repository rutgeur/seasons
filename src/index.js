import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            errorMesage: '',
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState(
                    { lat: position.coords.latitude }
                );
            },
            (error) => {
                this.setState(
                    { errorMesage: error.message }
                );
            },
        );
    }

    render() {
        if (this.state.errorMesage && !this.state.lat) {
            return <div>Error: {this.state.errorMesage}</div>
        }
        if (!this.state.errorMesage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }
        return <div>Loading</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);