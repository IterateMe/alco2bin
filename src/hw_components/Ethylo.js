import React from "react";

class Ethylo extends React.Component {
    constructor(props) {
        super(props);
        this.url = 'http://192.168.1.10/cmd/ethylo';
        this.state = {
            alcool: "inconnu",
            flow: "inconnu",
        };
    }

    updateData() {
        const http = new XMLHttpRequest();
        const url = this.url;

        http.open("GET", url);
        http.send();
        http.onload = () => {
            const response = JSON.parse(http.responseText);
            console.log(response);
            this.setState(response);
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.updateData(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="Switches">
                <p>Les valeurs de l'éthylomètre sont: </p>
                <b><p id="ethylo">Ethylomètre : {this.state.alcool} g/L</p></b>
                <b><p id="ethylo">Débit expiratoire : {this.state.flow} mL/s</p></b>
            </div>
        );
    }
}

export default Ethylo;