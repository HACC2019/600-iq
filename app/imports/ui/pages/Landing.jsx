import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <div className= 'beauty heights'>
          <Grid columns={2} textAlign='center' container>
            <Grid.Column>
              <Image src='/images/alohapluswheel-main.png'/>
            </Grid.Column>
            <Grid.Column className='landing-welcome'>
              <h1>Welcome to Hawaii Green Growth!</h1>
              <p>Saving Hawaii one community at a time.
                This is your social media platform to share your
                contributions to our conservation goals with the community. </p>
            </Grid.Column>
          </Grid>
          </div>
          <div className='green-background'>
            <h1 id = 'action' Align='center'>How to Use This Platform</h1>
            <p>To be completed after events page is completed</p>
          </div>
        </div>
  );
  }
}

export default Landing;
