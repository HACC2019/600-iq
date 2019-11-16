import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

/* eslint-disable no-console */
function createUser(firstName, lastName, affiliation, email, password, role) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    profile: { firstName: firstName, lastName: lastName, affiliation: affiliation },
    username: email,
    email: email,
    password: password,
  });
  if (role === 'admin') {
    Roles.addUsersToRoles(userID, 'admin');
  }
}

/** When running app for first time, pass a settings file to set up a default user account. */
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.map(({ firstName, lastName, affiliation, email, password, role }) => createUser(firstName, lastName, affiliation, email, password, role));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
// function createUser(email, password, role) {
//   console.log(`  Creating user ${email}.`);
//   const userID = Accounts.createUser({
//     username: email,
//     email: email,
//     password: password,
//   });
//   // eslint-disable-next-line max-len
//   Meteor.users.update(userID, { $set: { emails: [{ address: Meteor.users.findOne(userID).username, verified: true }] } });
//   if (role === 'admin') {
//     Roles.addUsersToRoles(userID, role);
//   }
// }
//
// /** When running app for first time, pass a settings file to set up a default user account. */
// if (Meteor.users.find().count() === 0) {
//   if (Meteor.settings.defaultAccounts) {
//     console.log('Creating the default user(s)');
//     Meteor.settings.defaultAccounts.map(({ email, password, role }) => createUser(email, password, role));
//     Meteor.settings.defaultAccounts.map(({ firstName, lastName, email, role }) => (
//         Users.insert({ firstName, lastName, affiliation: role, owner: email })));
//   } else {
//     console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
//   }
// }
