import React from 'react';
import $ from 'jquery';
import {Card, Image, Icon, Button} from 'semantic-ui-react';
class Delete extends React.Component {
  constructor()
  {
  super();
    this.del = this.del.bind(this);
  }
  del()
  {
    let data = {id:this.props.id};
    console.log(data);
    console.log(this.props.id);
    $.ajax({
        url: 'http://localhost:8080/Restaurant/delete',
        type: 'DELETE',
        data: data,
        success: function(data) {
            console.log(data + 'deleted');
        }.bind(this),
        error: function(err) {
            console.log('delete ', err);
        }.bind(this)
    });
  }
  render() {

      return (


            <Button color="red" onClick = {this.del} >
                <Icon className='delete'/>Delete</Button>


    )};

  }

  module.exports = Delete;
