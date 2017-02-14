import React from 'react';
import $ from 'jquery';
import {Icon, Button} from 'semantic-ui-react';
class Delete extends React.Component {
  constructor()
  {
  super();
    this.del = this.del.bind(this);
  }
  del()
  {
    let data = {id: this.props.id};
    $.ajax({
        url: 'http://localhost:8080/restaurant/delete',
        type: 'DELETE',
        data: data
    });
// this.changeState();
   }
//   changeState()
//   {
//     this.refresh();
//   }
  render()
  {
      return (
            <Button color="red" onClick = {this.del} >
                <Icon className='delete'/>Delete</Button>
    );
  }

}
  Delete.propTypes = {
    id: React.PropTypes.string
  };

  module.exports = Delete;
