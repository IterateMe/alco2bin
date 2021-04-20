import React from "react";

class Ethylo extends React.Component {
    constructor(props) {
        super(props);
        this.url = 'http://192.168.1.10/cmd/ethylo';
        this.state = {
            alcool: "inconnu",
            moy: "inconnu",
            maxAlcool : "inconnu",
            flow: "inconnu",
            testState: false,
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
            if(response.testState!=="Pending"){
                this.setState({alcool:0})
            }else{
                this.props.getData(this.state.moy)
                this.props.handleTestSTate(this.state.testState)
            }
            
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
                <b><p id="ethylo">Ethylomètre : {this.state.moy} g/L</p></b>
                <b><p id="ethylo">Valeur max : {this.state.maxAlcool} g/L</p></b>
                <b><p id="ethylo">Débit expiratoire : {this.state.flow} mL/s</p></b>
            </div>
        );
    }
}

export default Ethylo;