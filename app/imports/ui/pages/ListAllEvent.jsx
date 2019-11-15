import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import EventPublic from '/imports/ui/components/EventPublic';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Events } from '/imports/api/event/Event';


/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListAllEvent extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    // eslint-disable-next-line react/prop-types
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="beauty">
        <Container>
          <Header as="h2" textAlign="center" inverted className="less-margin">List Events</Header>
          <Card.Group>
            {this.props.events.map((event, index) => <EventPublic
                key={index}
                event={event}/>)}
          </Card.Group>
          <br/>
          <br/>
        </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListAllEvent.propTypes = {
  events: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('AllEvents');
  return {
    events: Events.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListAllEvent);
