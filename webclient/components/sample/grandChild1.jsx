import React from 'react' ;

class GChild2 extends React.Component {
    constructor(){
      super();
    }
      render(){
        var color= {color:"red"};
      return (
      <div>
      <h1 style={color}> {this.props.name}</h1>
      </div>
      )
      }

}

export default GChild2;
