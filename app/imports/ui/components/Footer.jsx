import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
        <footer className='josefin black-background'>
          <Grid relaxed centered style={divStyle}>
            <Grid.Row>
              <Header as='h1' style={ { color: 'White' } }>CONNECT WITH US</Header>
            </Grid.Row>
            <Grid.Row>
              <a href='https://www.facebook.com/hawaiigreengrowth'><Icon size='large' name='facebook f'/></a>
              {/* <a href='https://plus.google.com/u/0/104386650726765100093/posts'> */}
              {/*  <Icon size='large' className='custom_google_plus'/> */}
              {/* </a> */}
              <a href='https://www.instagram.com/hawaiigreengrowth/'>
                <Icon size='large' name='instagram' />
              </a>
              <a href='https://twitter.com/HIGreenGrowth'>
                <Icon size='large' name='twitter'/>
              </a>
            </Grid.Row>
          </Grid>
        </footer>
    );
  }
}

export default Footer;
