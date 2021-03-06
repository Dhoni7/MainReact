import React from 'react';
import $ from 'jquery';
import {Card, Image, Icon, Button, Input} from 'semantic-ui-react';
import Delete from './delete.jsx';
import Update from './update.jsx';
export class Favs extends React.Component {
  constructor()
  {
  super();
    this.state = {
      favsData: []
    }
  }
  handlechange(event){
    this.setState({
      comment: event.target.value
    });
  }
  click(id) {
    console.log('inside click fav')
    let comment = this.state.comment;
      $.ajax({
          url: 'http://localhost:8080/restaurant/update',
          type: 'PUT',
          data: {
              id: id,
              comment:comment
          },
          success: function(data) {
            this.setState({'update':data})
            console.log(comment);
            console.log('UPDATED'+id);
          //  console.log('UPDATED');
          }.bind(this),
          error: function(err) {
              console.error(err.toString());
          }.bind(this)
      });
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
      let click = this.click.bind(this);
      let u = this.handlechange.bind(this);
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
              <Input type="textarea" name="comment" color="blue" onChange= {u} />
              <Button color="green">
                  <Icon className='add'/>Update</Button>
                  <Delete id={card.id}/>
                  <Update id={card.id} comment={card.comment} click={click}/>
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
