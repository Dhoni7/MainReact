let React = require('react');
let ListItem = require('./TemplateList.jsx');
import {Card} from 'semantic-ui-react';
let List = React.createClass({
    render: function() {
        let jsonarray = this.props.data;
            let ListItems = jsonarray.map(function(item) {
                return <ListItem key={arguments[1]} id={item.restaurant.R.res_id}
                   name={item.restaurant.name} address={item.restaurant.location.address}
                   image={item.restaurant.featured_image}
                   rating={item.restaurant.user_rating.aggregate_rating}/>;
            });
            return (
                <Card.Group style={{
                    margin: 10
                }}>{ListItems}</Card.Group>
            );
         
    }
});
// List.propTypes = {
//   data: React.PropTypes.array
// };
module.exports = List;
