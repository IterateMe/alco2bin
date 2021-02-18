import React from 'react';

class Switches extends React.Component {
    constructor(props) {
        super(props);
        this.url='http://192.168.1.10/cmd/sws';
        this.state = {
            switches: "inconnu"
        };
    }

    updateSwitches() {
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
        this.interval = setInterval(() => this.updateSwitches(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="Switches">
                    <p>L'état des interrupteurs est : </p>
                    <b><p id="switches">{this.state.switches}</p></b>
            </div>
        );

    }
}

export default Switches;