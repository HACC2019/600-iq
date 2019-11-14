import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Event = new Mongo.Collection('Event');

/** Define a schema to specify the structure of each document in the collection. */
const EventSchema = new SimpleSchema({
  name: String,
  affiliation: String,
  eventDate: String,
  eventDescription: String,
  eventLocation: String,
  eventTag: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Event.attachSchema(EventSchema);

/** Make the collection and schema available to other code. */
export { Event, EventSchema };
