import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { Events } from '/imports/api/event/Events';
import { EventsSchema } from '../../api/event/Events';

/** Create a schema to specify the structure of the data to appear in the form. */

/** Renders the Page for adding a document. */
class Event extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, participant, date, image, description } = data;
    Events.insert({ name, participant, date, image, description },
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
            <Header as="h2" textAlign="center">Add Event</Header>
            {/* eslint-disable-next-line no-undef */}
            <AutoForm ref={ref => { fRef = ref; }} schema={EventsSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='name'/>
                <TextField name='participant'/>
                <TextField name='date'/>
                <TextField name='image'/>
                <TextField name='description'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Event;
