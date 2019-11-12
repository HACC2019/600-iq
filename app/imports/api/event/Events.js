import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Events = new Mongo.Collection('Events');

/** Define a schema to specify the structure of each document in the collection. */
const EventsSchema = new SimpleSchema({
  name: String,
  participant: String,
  date: Date,
  image: String,
  description: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Events.attachSchema(EventsSchema);

/** Make the collection and schema available to other code. */
export { Events, EventsSchema };
