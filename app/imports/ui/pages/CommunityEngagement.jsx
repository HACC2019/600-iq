import React from 'react';
import { Grid } from 'semantic-ui-react';


/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
         <h1>Communities in action</h1>
          <Grid verticalAlign='middle' textAlign='center' container>
            <Grid.Column width={8}>
              <h1>Welcome the Hawaii Green Growth!</h1>
              <p> Participate now to save the Aina!</p>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
