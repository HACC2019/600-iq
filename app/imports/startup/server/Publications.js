import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Events } from '../../api/event/Event';

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Events', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Events.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('AllEvents', function publish() {
  return Events.find();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('StuffAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Events.find();
  }
  return this.ready();
});
