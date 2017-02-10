import React from 'react';
import ReactDOM from 'react-dom';
import Child from './components/sample/Search.jsx';
import $ from 'jquery';
import Cardfile from './components/sample/card.jsx';
class MainComponent extends React.Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.state = {
            data1: []
        };
    }
    onClick(id, cuisine)
    {
        $.ajax({
            url: 'https://developers.zomato.com/api/v2.1/search?entity_id='
             + id + '&entity_type=city&q=' + cuisine + '&count=10',
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader('user-key', '6a1a52ca364abcb950e671a0d3d50565');
            },
            success: function(data) {
                this.setState({data1: data.restaurants});
                console.log(JSON.stringify(this.state.data1));
            }.bind(this),
            error: function(err) {
              console.log('error occurred on AJAX');
              console.log(err);
            }.bind(this)
        });
    }
    render() {
        return (
            <div>
                <h1>
                    The Food Items
                </h1>
                <Child change={this.onClick}/>
                <Cardfile data={this.state.data1}/>
            </div>
        );
    }
}
ReactDOM.render(
    <MainComponent/>, document.getElementById('mountapp'));
