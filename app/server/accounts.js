import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

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

