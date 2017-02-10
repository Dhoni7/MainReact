import React from 'react';
// import ReactDOM from 'react-dom';
// import Child from './components/sample';

class search extends React.Component {
    constructor() {
        super();
        this.state = {
            'loc': '',
            'cuisine': ''
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
        return (
            <div>
                <form>
                    Enter location:<input type='text' name='loc' placeholder='enter location'
                      onChange={this.onChange}/>
                    Enter Cuisine:<input type='text' name='cuisine' placeholder='enter cuisine'
                       onChange={this.onChange}/>
                </form>
                <button type='button' onClick={this.Clickfn
                  .bind(this, this.state.loc, this.state.cuisine)}>search</button>
            </div>
        );
    }
}
export default search;
