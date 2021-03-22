import React from 'react';
import Switches from "./Switches";

class Reflex extends React.Component{

    constructor(props) {
        super(props);
        this.url='http://192.168.1.10/cmd/reflex';
        this.state = {
            vitesses: [],
            index: 0,
            état: "inconnu"
        };
    }

    updateReflex() {
        const http = new XMLHttpRequest();
        const url = this.url;

        http.open("GET", url);
        http.send();
        http.onload = () => {
            const response = JSON.parse(http.responseText);
            console.log(response);
            this.setState(response);
        }

    }

    componentDidMount() {
        this.interval = setInterval(() => this.updateReflex(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div >
                <p>L'état du test de réflex est : </p>
                <b><p id="reflex">{this.state.vitesses}</p></b>
            </div>
        );

    }

}



export default Reflex;