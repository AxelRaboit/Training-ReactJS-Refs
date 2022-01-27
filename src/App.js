import './App.css';
import React, { Component } from 'react';
import MyRef from './components/MyRef';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.refComp = React.createRef();
  }

  handleClick = () => {
    /* console.log(this.refComp.current); */
    this.refComp.current.addFocus();
  }
  

  render() {
    return (
      <div className="App">
        <MyRef ref={this.refComp}/>
        <button onClick={this.handleClick}>Valider</button>
      </div>
    );
  }
}

export default App;
