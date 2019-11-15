import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <div className= 'beauty heights'>
          <Grid columns={2} textAlign='center' container>
            <Grid.Column>
              <Image src='/images/alohapluswheel-main-color.png'/>
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
            <h1 id = 'action' align='center'>How to Use This Platform</h1>
            <Container>
              <p>
                This platform is an easy way to showcase your efforts towards our conservation goals as well as to
                help you connect with other people to increase the collaboration in the community.
              </p>
              <p>
                First, you would need to sign up! It is a very easy process that will take you no more than 5 minutes.
                Next, you can now add your events! This way you can showcase your efforts to contribute to the
                conservation goals of your community. Finally, you can see other people&apos;s efforts and you can
                choose to contribute to their efforts as well!
              </p>
            </Container>
          </div>
        </div>
  );
  }
}

export default Landing;
