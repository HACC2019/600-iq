import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <div className='beauty'>
            <Grid verticalAlign='middle' textAlign='center' container>
              <Grid.Column className='landing-welcome'>
                <Header inverted as='h1'>Welcome the Hawaii Green Growth!</Header>
                <Header inverted as='h2'> Saving Hawaii one community at a time</Header>
              </Grid.Column>
            </Grid>
          </div>

          <div className='community-background'>
            <Header as='h1' id='action' textAlign='center'> See the Communities in Action!</Header>
            <Grid columns={3} divided>
              <Grid.Row className='community'>
                <Grid.Column id='rows'>
                  <h2>Some dudes planting trees</h2>
                  <Image
                      size='large'
                      /* eslint-disable-next-line max-len */
                      src='https://www.churchofjesuschrist.org/bc/content/ldsorg/church/news/2015/06/19/JustServe%20580.jpg'
                  />
                </Grid.Column>
                <Grid.Column id='rows' className='community'>
                  <h2>Save the turtles!</h2>
                  <Image
                      size='large'
                      src='https://www.westcoastconnection.com/content/uploads/2015/07/unnamed-1024x768.jpg'/>
                </Grid.Column>
                <Grid.Column id='rows' className='community'>
                  <h2>Beach Cleanups</h2>
                  <Image
                      size='large'
                      /* eslint-disable-next-line max-len */
                      src='https://trashhero.org/wp-content/uploads/2017/08/Photo-21.05.15-13-24-30-e1442143042301.png'/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
    );
  }
}

export default Landing;
