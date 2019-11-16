import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Grid, Image, MenuItem } from 'semantic-ui-react';
import Event from '/imports/ui/components/Event';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Events } from '/imports/api/event/Event';
import { Users } from '../../api/user/User';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Profile extends React.Component {

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
            <Header as="h2" textAlign="center" className="less-margin" inverted>Profile</Header>
            <Grid celled='internally'>
              <Grid.Row>
                <Grid.Column width={3}>
                  <MenuItem>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <br/>
                    <Header as="h2" textAlign="center" className="less-margin"
                            inverted>Username: </Header>
                    <Header className="less-margin" textAlign="center"
                       inverted>{this.props.currentUser}</Header>
                    <br/>
                    <Header as="h2" textAlign="center" className="less-margin"
                            inverted>Name: </Header>
                    <Header className="less-margin" textAlign="center"
                       inverted>{this.props.users.firstName} {this.props.users.lastName} </Header>
                    <br/>
                    <Header as="h2" textAlign="center" className="less-margin"
                            inverted>Affiliation: </Header>
                    <Header className="less-margin" textAlign="center"
                       inverted>{this.props.users.affiliation}</Header>
                  </MenuItem>
                </Grid.Column>
                <Grid.Column width={13}>
                  <Card.Group>
                    {this.props.events.map((event, index) => <Event
                        key={index}
                        event={event}/>)}
                  </Card.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <br/>
          </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Profile.propTypes = {
  events: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
  currentUser: PropTypes.string,
  users: PropTypes.array,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Events');
  const profiles = Meteor.subscribe('Users');
  return {
    events: Events.find({}).fetch(),
    ready: subscription.ready() && profiles.ready(),
    currentUser: Meteor.user() ? Meteor.user().username : '',
    users: Users.find().fetch,
  };
})(Profile);
