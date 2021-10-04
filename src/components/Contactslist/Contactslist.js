import React from 'react';

export default function ContactsList({ contacts, onDeleteContacts }) {
  return (
    <ul className="contacts">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}:{number}
          <button
            type="button"
            className="TodoList__btn"
            onClick={() => onDeleteContacts(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
