import React from 'react';
import { Card, Header, Label, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from "meteor/meteor";

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
          {Meteor.userId() !== null ? (
              [<Card.Content key='edit'>
                <a href={`/Edit/${this.props.user}`}>Edit</a>
              </Card.Content>]
          ) : ''}
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
// eslint-disable-next-line no-undef
Event.propTypes = {
  event: PropTypes.object.isRequired,
  user: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const EventContainer = withTracker(() => ({
  user: Meteor.userId(),
}))(Event);

/** Wrap this component in withRouter since we use the <Link> React Router element. */
// eslint-disable-next-line no-undef
export default withRouter(Event, EventContainer);
