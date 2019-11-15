import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Events } from '../../api/event/Event';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

function addEvents(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Events.insert(data);
}

/** Initialize the collection if empty. */
if (Events.find().count() === 0) {
  if (Meteor.settings.defaultEvents) {
    console.log('Creating default data.');
    Meteor.settings.defaultEvents.map(data => addEvents(data));
  }
}
