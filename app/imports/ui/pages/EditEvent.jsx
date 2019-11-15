import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import { Events } from '/imports/api/event/Event';
import swal from 'sweetalert';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import LongTextField from 'uniforms-semantic/LongTextField'; // required for Uniforms

const goals = ['Clean Energy', 'Local Food', 'Natural Resource Management', 'Waste Reduction',
  'Smart Sustainable Communities', 'Green Workforce & Education'];

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

/** Renders the Page for editing a single document. */
class EditEvent extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { name, affiliation, eventDate, eventDescription, eventLocation, eventTag, _id } = data;
    const owner = Meteor.user().username;
    Events.update(_id, { $set: { name, affiliation, eventDate, eventDescription, eventLocation, eventTag, owner } },
        (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Edit Event</Header>
            <AutoForm schema={formSchema} onSubmit={data => this.submit(data)} model={this.props.doc}>
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

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditEvent.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Events');
  return {
    doc: Events.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditEvent);
