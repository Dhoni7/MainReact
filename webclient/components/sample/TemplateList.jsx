let React = require('react');
import {Card, Button, Icon, Image} from 'semantic-ui-react';
import $ from 'jquery';
// import Favour from 'favourites';
let ListItem = React.createClass({
  button() {
    let value = this.props;
    $.ajax({

      url: 'http://localhost:8080/restaurant/add',
       type: 'POST',
       data: value
     });
  },
    render: function() {
        let img = this.props.image;
        return (
            <Card>
                <Image src={img} alt="restaurant image" style={{
                   height: 200
               }}/>
              <Card.Content>
                    <Card.Header>{this.props.id}
                        : {this.props.name}</Card.Header>
                    <Card.Description>{this.props.address}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon className='smile'/>{this.props.rating}
                        </a>
                        <Button onClick={this.button}>add favourites </Button>
                </Card.Content>
            </Card>

        );
    }
});
// ListItem.propTypes = {
//   image: React.PropTypes.string,
//   id: React.PropTypes.string,
//   name: React.PropTypes.string,
//   address: React.PropTypes.string
// };
module.exports = ListItem;
