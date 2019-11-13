import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Event extends React.Component {
  render() {
    return (
        <Card>
          <Image src= {this.props.event.image} />
          <Card.Content>
            <Card.Header>{this.props.event.name} </Card.Header>
            <Card.Meta>
              <span className='date'>{this.props.event.participant}</span>
            </Card.Meta>
            <Card.Description>
              {this.props.event.description}
            </Card.Description>
            <Card.Description>
              {this.props.event.date}
            </Card.Description>
          </Card.Content>
        </Card>

    );
  }
}

/** Require a document to be passed to this component. */
// eslint-disable-next-line no-undef
Event.propTypes = {
  event: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
// eslint-disable-next-line no-undef
export default withRouter(Event);
