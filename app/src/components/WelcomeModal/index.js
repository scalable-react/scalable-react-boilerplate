import React, { PropTypes } from 'react';
import Layer from 'grommet-udacity/components/Layer';
import Form from 'grommet-udacity/components/Form';
import FormFields from 'grommet-udacity/components/FormFields';
import FormField from 'grommet-udacity/components/FormField';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import Button from 'grommet-udacity/components/Button';
import Footer from 'grommet-udacity/components/Footer';
import { Divider } from 'components';
import error from './utils/error';

const WelcomeModal = ({
  onClose,
  isVisible,
  nameInput,
  onSubmit,
}) => (
  <Layer
    align="center"
    closer
    hidden={!isVisible}
    onClose={onClose}
  >
    <Box align="center" justify="center" pad="large">
      <Heading align="center">
        What should we call you?
      </Heading>
      <Divider />
      <Form>
        <FormFields>
          <FormField
            help="What should we call you?"
            error={error(nameInput)}
            label="Enter your name"
            htmlFor="nameInput"
          >
            <input
              {...nameInput}
              required
              autoFocus
              placeholder="Ryan Collins"
              id="nameInput"
              autoComplete="on"
              name="name"
              type="text"
              aria-invalid={nameInput.error}
              aria-required
              className="input"
            />
          </FormField>
        </FormFields>
      </Form>
      <Footer align="center" justify="center" pad="large">
        <Button primary label="Submit" onClick={onSubmit} />
      </Footer>
    </Box>
  </Layer>
);

WelcomeModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  nameInput: PropTypes.shape({
    error: PropTypes.string,
    value: PropTypes.string,
  }),
  isVisible: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default WelcomeModal;
