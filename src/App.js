import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Beer from './Beer';
import './App.css';

class App extends React.Component {

  state = {
    pre: [],
    data: []
  }

componentDidMount = () => {
  axios.get('https://api.punkapi.com/v2/beers')
  .then(res => {
    this.setState({
      data: res.data
    })

    })

  }





render(){
// const fun = componentDidMount()
console.log(this.state.data[0])
  return (

<div className="App">
{this.state.data.map((beer) => {
  return <Beer id={beer.id} name={beer.name} tagline={beer.tagline} description={beer.description} /> 
})}


</div>
  

 
  );
}
}
export default App;
