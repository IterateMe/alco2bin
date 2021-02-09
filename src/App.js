import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      switches: "inconnu"
    };

  }

  updateSwitches() {
    const http = new XMLHttpRequest();
    const url = 'http://192.168.1.10/cmd/sws';

    http.open("GET", url);
    http.send();
    http.onload = () => this.setState({switches: http.responseText});

  }

  componentDidMount() {
    this.interval = setInterval( () => this.updateSwitches(), 10);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello!</p>

            <p>L'état des interrupteurs est : </p>
            <b><p id="switches">{this.state.switches}</p></b>

          </header>
        </div>
    );
  }
}


export default App;
