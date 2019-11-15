import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Grid, Header } from 'semantic-ui-react';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
export default class Signout extends React.Component {
  render() {
    Meteor.logout();
    return (
        <div className="beauty height">
          <Grid container centered verticalAlign='middle' className='height'>
            <Grid.Row>
              <Grid.Column>
                <Header as="h2" textAlign="center" className="less-margin signout" inverted>
                <p>You are signed out.</p>
              </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
