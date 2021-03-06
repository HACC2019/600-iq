import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { Users } from '../../api/user/User';

/* eslint-disable no-console */

function createUser(email, password, role) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password,
  });
  // eslint-disable-next-line max-len
  Meteor.users.update(userID, { $set: { emails: [{ address: Meteor.users.findOne(userID).username, verified: true }] } });
  if (role === 'admin') {
    Roles.addUsersToRoles(userID, role);
    // eslint-disable-next-line max-len
    Meteor.users.update(userID, { $set: { emails: [{ address: Meteor.users.findOne(userID).username, verified: true }] } });
  }
}

/** When running app for first time, pass a settings file to set up a default user account. */
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.map(({ email, password, role }) => createUser(email, password, role));
    Meteor.settings.defaultAccounts.map(({ firstName, lastName, email, role }) => (
        Users.insert({ firstName, lastName, affiliation: role, owner: email })));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
