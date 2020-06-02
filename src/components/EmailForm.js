import React from 'react';
import { FormContext, useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import './EmailForm.scss';
import TextField from '@material-ui/core/TextField';

export const EmailForm = ({ emailTemplate }) => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const sendEmails = () => {
    console.log('send emails');
  };

  return (
    <div className="EmailForm">
      <FormContext {...methods}>
        <form
          onSubmit={handleSubmit(sendEmails)}
          className="email-form-content"
        >
          <div className="contact-info-inputs">
            <TextField id="filled-basic" label="Name" variant="filled" />
            <TextField
              id="filled-basic"
              label="Email address"
              variant="filled"
            />
          </div>

          <TextField
            id="outlined-multiline-static"
            variant="filled"
            multiline
            rows={15}
            defaultValue={emailTemplate}
            style={{ width: '100%', paddingBottom: '30px' }}
          />
          <Button variant="contained" type="submit">
            Send emails
          </Button>
        </form>
      </FormContext>
    </div>
  );
};
