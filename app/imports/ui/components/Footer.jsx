import React from 'react';
import { Icon } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
        <footer>
          <div style={divStyle} className="josefin black-background">
            <div className="ui center aligned container">
            <hr />
              CONNECT WITH US<br />
              University of Hawaii<br />
              Honolulu, HI 96822 <br />
              <Icon name="facebook f"/>
              <Icon name="twitter"/>
            <Icon name="google"/>
            <Icon name="instagram"/>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
