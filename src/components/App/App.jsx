import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { fetchContacts, addContact } from '../../redux/contactsOps';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  return (
    <div className={styles.container}>
      <h1>Книга контактів</h1>
      <ContactForm onAddContact={handleAddContact} />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;