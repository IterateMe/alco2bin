import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import { Typography } from '@material-ui/core';

const ChangeDebitMinMax = (props) => {

    const [min, setMin]=useState(400);
    const [max, setMax]=useState(600);

    function handleIncrementMax(){
        setMax(max+debitLimitIncrementValue)

    }

    function handleDecrementMax(){
        setMax(max-debitLimitIncrementValue)
     
    }

    function handleIncrementMin(){
        setMin(min+debitLimitIncrementValue)

    }

    function handleDecrementMin(){
        setMin(min-debitLimitIncrementValue)

    }

    const postValues = () => {
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
                "min": min,
                "max": max
            };
            //args.concat(this.props.test)
            http.send(JSON.stringify(json));
        }
    }

    const handleRefresh = () => {
       /* const http = new XMLHttpRequest();
        const url = 'http://192.168.1.10/cmd/getMinMax';
        http.open("GET", url);
        http.send();
        http.onload = () => {
            const response = JSON.parse(http.responseText);
            console.log(response);
            setMax(response["max"])
            setMin(response["min"])
        }*/
        setMax(600)
        setMin(400)
    }

    const [pending, setPending] = useState(0);
    const [state, setState] = useState();
    const [message, setMessage] = useState("");
    const debitLimitIncrementValue = 10

    useEffect(() => {
        handleRefresh()
    }, []);

    useEffect(()=>{
        postValues()
    },[min,max])

    return (
        <div>
            <h3>Débit expiratoire cible</h3>
            <p>
                MAX :<Button onClick={handleDecrementMax}>-</Button>{max}<Button
                onClick={handleIncrementMax}>+</Button>
            </p>
            <p>
                MIN : <Button onClick={handleDecrementMin}>-</Button>{min}<Button
                onClick={handleIncrementMin}>+</Button>
            </p>
            <Button onClick={handleRefresh}>Réinitialiser</Button>
        </div>
    );
    }


export default ChangeDebitMinMax;