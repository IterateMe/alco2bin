import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import { Typography } from '@material-ui/core';

const ChangeDebitMinMax = (props) => {
    const handleClick = (minMax, value, operator) => {
        const http = new XMLHttpRequest();
        const url = 'http://192.168.1.10/cmd/change_debit';

        if (pending === 0) {
            setPending(1);
            http.open("POST", url, true);
            http.onload = () => {
                setPending(0);
                const response = JSON.parse(http.responseText);
                console.log(response);
                const status = response.status;
                if (status === "success") {
                    setState("pending")
                    setMessage("Valeurs changées")
                } else if (status === "error") {
                    setMessage(response.message)
                }
            }
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            http.onreadystatechange = function () { // Call a function when the state changes.
                if (this.readyState !== XMLHttpRequest.DONE && this.status !== 200) {
                    setPending(0);
                }
            }
            const json = {
                "minMax": minMax,
                "value": value,
                "operator": operator
            };
            //args.concat(this.props.test)
            http.send(JSON.stringify(json));
        }
    }

    const handleRefresh = () => {
        const http = new XMLHttpRequest();
        const url = 'http://192.168.1.10/cmd/getMinMax';
        http.open("GET", url);
        http.send();
        http.onload = () => {
            const response = JSON.parse(http.responseText);
            console.log(response);
            setMax(response["max"])
            setMin(response["min"])
        }
    }

    const [min, setMin] = useState('Inconnu');
    const [max, setMax] = useState('Inconnu');
    const [pending, setPending] = useState(0);
    const [state, setState] = useState();
    const [message, setMessage] = useState("");
    const debitLimitIncrementValue = 10

    useEffect(() => {
        handleRefresh()
    }, []);

    return (
        <div>
            <h3>Débit expiratoire cible</h3>
            <p>
                MAX :<Button onClick={handleClick("max", debitLimitIncrementValue, "-")}>-</Button>{max}<Button
                onClick={handleClick("max", debitLimitIncrementValue, "+")}>+</Button>
            </p>
            <p>
                MIN : <Button onClick={handleClick("min", debitLimitIncrementValue, "-")}>-</Button>{min}<Button
                onClick={handleClick("min", debitLimitIncrementValue, "+")}>+</Button>
            </p>
            <Button onClick={handleRefresh}>Rafraîchir</Button>
        </div>
    );
    }


export default ChangeDebitMinMax;