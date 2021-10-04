import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ContactsList from './components/Contactslist/Contactslist';
import initialContacts from './contacts.json';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    contacts: initialContacts,
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

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return (
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContacts} />

        <h2>Contacts</h2>
        <Filter value={filter} onHandleFilter={this.changeFilter} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContacts={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
