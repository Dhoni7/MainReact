import React from 'react';
// import ReactDOM from 'react-dom';
// import Child from './components/sample';
import {Input, Button} from 'semantic-ui-react';

class search extends React.Component {
    constructor() {
        super();
        this.state = {
            loc: '',
            cuisine: ''
        };
        this.Clickfn = this.Clickfn.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    Clickfn(loc, cuisine)
    {
        this.props.change(loc, cuisine);
    }
    onChange(name)
    {
        this.setState({
            [name.target.name]: name.target.value
        });
    }
    render() {
      let divstyle = {
        margin: '70px',
        paddingLeft: '350px'
};
        return (
            <div style={divstyle}>
                <form>

                  <Input type='text' name='loc' placeholder='enter location'
                      onChange={this.onChange}></Input>

                    <Input type='text' name='cuisine' placeholder='enter cuisine'
                       onChange={this.onChange}/>

                </form>
                <Button size='large' color='green' onClick={this.Clickfn
                  .bind(this, this.state.loc, this.state.cuisine)}>search</Button>
                  <Button size='large' color='green'> Wish List</Button>
            </div>
        );
    }
}
export default search;
