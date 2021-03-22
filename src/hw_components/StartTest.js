import React from 'react';
import Button from "@material-ui/core/Button";

class StartTest extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            url: 'http://192.168.1.10/cmd/start_test',
            test: this.props.test,
            state: "" //Pour contenir la reponse
        };
    }

    handleClick() {
        const http = new XMLHttpRequest();
        const url = this.state.url;

        http.open("POST", url, true);
        http.onload = () => {
            const response = JSON.parse(http.responseText);
            console.log(response);
            this.setState(response);
        }
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.onreadystatechange = function() { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // Request finished. Do processing here.
            }
        }
        const args = "test="
        //args.concat(this.props.test)
        http.send("test=ethylo");
    }

    render() {
        return (
            <div >
                <Button onClick={this.handleClick}>Start test</Button>
            </div>
        );

    }

}


export default StartTest;