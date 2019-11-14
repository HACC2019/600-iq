import React from 'react';
import { Events } from '/imports/api/event/Event';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';

const goals = ['Clean Energy', 'Local Food', 'Natural Resource Management', 'Waste Reduction',
  'Smart Sustainable Communities', 'Green Workforce & Education'];

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  name: { label: 'Event Name', type: String },
  affiliation: {
    label: 'Affiliation',
    type: String,
    allowedValues: ['Individual', 'Community'],
    defaultValue: 'Community',
  },
  eventDate: { label: 'Date of Event', type: Date },
  eventDescription: { label: 'Description of the Event', type: String },
  eventLocation: { label: 'Location of event', type: String },
  eventTag: {
    label: 'Challenge Tags',
    type: String,
    allowedValues: goals,
    defaultValue: goals[0],
  },
});

/** Renders the Page for adding a document. */
class AddEvent extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, affiliation, eventDate, eventDescription, eventLocation, eventTag } = data;
    const owner = Meteor.user().username;
    Events.insert({ name, affiliation, eventDate, eventDescription, eventLocation, eventTag, owner },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item added successfully', 'success');
            formRef.reset();
          }
        });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Add an Event!</Header>
            <AutoForm ref={ref => {
              fRef = ref;
            }} schema={formSchema} onSubmit={data => this.submit(data, fRef)}>
              <Segment>
                <TextField name='name'/>
                <SelectField name='affiliation'/>
                <TextField name='eventDate'/>
                <TextField name='eventLocation'/>
                <LongTextField name='eventDescription'/>
                <SelectField name='eventTag'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddEvent;
