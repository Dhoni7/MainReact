import React from 'react';
import $ from 'jquery';
import {Card, Image, Icon, Button} from 'semantic-ui-react';
import Delete from './delete.jsx';
export class Favs extends React.Component {
  constructor()
  {
  super();
    this.state = {
      favsData: []
    }
  }
  componentDidMount() {
        console.log('mounting done!');
        $.ajax({
            url: 'http://localhost:8080/restaurant/displayAll',
            type: 'GET',
            success: function(data) {
                console.log('diaplayall ', data);
                this.setState({favsData: data});
            }.bind(this),
            error: function(err) {
                console.log('displayall ', err);
            }.bind(this)
        });
    }
    render() {
      let favCards = this.state.favsData.map(function(card)
      {
        return (
          <div>
          <Card style={{height: 450, marginLeft: 30, marginBottom: 20}}>
              <Image src={card.image} alt="restaurant image" style={{height: 200}}/>
              <Card.Content>
                  <Card.Header>{card.id}
                      : {card.name}</Card.Header>
                  <Card.Description>{card.address}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                  <a>
                      <Icon className='smile'/>{card.rating}
                  </a>
              </Card.Content>
              <Button color="green">
                  <Icon className='add'/>Update</Button>
                  <Delete id={card.id}/>
          </Card>
        </div>
        );
      });
        return (
              <div className="ui four cards">
                {favCards}
              </div>
        );
    }
}
