import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Users } from '../imports/api/user/User';

Accounts.emailTemplates.siteName = 'HGG MalamaHawaii';
Accounts.emailTemplates.from = 'HGG MalamaHawaii <admin@malama.com>';

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return '[HGG MalamaHawaii] Verify Your Email Address';
  },
  text(user, url) {
    const emailAddress = user.emails[0].address;
    const urlWithoutHash = url.replace('/#', '');
    const supportEmail = 'support@godunk.com';
    const emailBody =
        // eslint-disable-next-line max-len
        `To verify your email address (${emailAddress})visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;
    return emailBody;
  },
};

// eslint-disable-next-line no-unused-vars
export default function createUser(firstName, lastName, affiliation, email, password) {
  Accounts.createUser({ email, username: email, password }, (err) => {
    if (err) {
      this.setState({ error: err.reason });
    } else {
      const owner = Meteor.user().username;
      Users.insert({ firstName, lastName, affiliation, owner }, (error) => {
        if (error) {
          this.setState({ error: 'Affiliation is Required' });
        } else {
          Meteor.call('sendVerificationLink');
          this.setState({ error: '', redirectToReferer: true });
        }
      });
    }
  });
};
