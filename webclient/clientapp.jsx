import React from 'react';
import ReactDOM from 'react-dom';
import Child from './components/sample';

class MainComponent extends React.Component
{
constructor(){
super();
this.state = {name : "lakshmanan"}
}

onClick(){
  this.setState({name : "lakshmananS"});
}


render(){
var color = {color : "black"};
var color1 = {color : "green"};
return(
<div>
  <h1 style={color}>Suri Family</h1>
  <h2 style={color1}>
    <Child.Child1 name={this.state.name} click={this.onClick}/>
    <Child.Child2 name={this.state.name} />
  </h2>

</div>
)
}
}
ReactDOM.render(
<MainComponent/>, document.getElementById('mountapp')
);
