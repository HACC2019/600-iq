import React from 'react';
import { Card, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */

class Event extends React.Component {
  render() {
    return (
        <Card>
          <Card.Content>
            <Card.Header>{this.props.event.name} </Card.Header>
            <Card.Meta>
              Date: {this.props.event.eventDate}
            </Card.Meta>
            <Card.Meta>
              Location: {this.props.event.eventLocation}
            </Card.Meta>
          </Card.Content>
          <Card.Content><Card.Description>
            Event Detail: {'\n'}
            {this.props.event.eventDescription}
          </Card.Description></Card.Content>
          <Card.Content>
            Tags: <Label color='teal'>{this.props.event.eventTag}</Label>
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
