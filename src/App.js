import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ContactsList from './components/Contactslist/Contactslist';
// import initialContacts from './contacts.json';
import Form from './components/Form/Form';

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    contacts: [],
    filter: '',
  };

  addContacts = (name, number) => {
    const value = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [value, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <>
        <Form onSubmit={this.addContacts} />

        <h2>Contacts</h2>
        <ContactsList
          contacts={this.state.contacts}
          onDeleteContacts={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
