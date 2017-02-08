import React from 'react' ;


class Child1 extends React.Component {
    constructor(){
      super();
      this.clickfn = this.clickfn.bind(this);
    }
    clickfn(){
      this.props.click();
    }
      render(){
      return (
      <div>
      <h1> suri {this.props.name} </h1>
      <button onClick={this.clickfn}> Change button </button>
      </div>
      )
      }

}

export default Child1;
