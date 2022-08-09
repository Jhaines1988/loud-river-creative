import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import * as styles from './contact-form.module.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('myyoarbb');

  if (state.succeeded) {
    return <p>Thanks for Getting In Touch!</p>;
  }
  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeaderContentContainer}>
        <h2 id='work-together' className={styles.contactHeader}>
          Let's work <em>together</em>
        </h2>
        <p className={styles.text}>Send us a note to say hello!</p>
      </div>
      <form
        id='contact-form'
        className={styles.contactForm}
        onSubmit={handleSubmit}
        name='contact form'>
        <label htmlFor='name'> Name</label>
        <input
          className={styles.formInput}
          id='name'
          name='name'
          type='text'
          required
        />
        <label htmlFor='email'>Email</label>

        <input
          className={styles.formInput}
          id='email'
          name='email'
          type='email'
          required
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <label htmlFor='subject'>Subject</label>
        <input
          className={styles.formInput}
          id='subject'
          name='subject'
          required
          type='text'
        />
        <label htmlFor='message'>Message</label>
        <textarea
          className={styles.textInput}
          id='message'
          name='message'
          rows='10'
          cols='15'
          required
        />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
        <button
          className={styles.submitButton}
          type='submit'
          disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
