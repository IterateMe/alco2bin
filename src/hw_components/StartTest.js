import React, {useState} from 'react';
import Button from "@material-ui/core/Button";

const StartTest = (props) => {

    const [test, setTest] = useState(props.test);
    const [pending, setPending] = useState(0);

    const handleClick = () => {
        const http = new XMLHttpRequest();
        const url = 'http://192.168.1.10/cmd/start_test';

        if (pending === 0) {
            setPending(1);
            http.open("POST", url, true);
            http.onload = () => {
                setPending(0);
                const response = JSON.parse(http.responseText);
                console.log(response);
                this.setState(response);
            }
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            http.onreadystatechange = function() { // Call a function when the state changes.
                if (this.readyState !== XMLHttpRequest.DONE && this.status !== 200) {
                    setPending(0);
                }
            }
            const args = "test="
            //args.concat(this.props.test)
            http.send("test=ethylo");
        }
    }

        return (
            <div >
                <Button onClick={handleClick}>Start test</Button>
            </div>
        );


}


export default StartTest;