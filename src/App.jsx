import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import Contact from './components/Contact/Contact'
import { useState, useEffect} from 'react';
import { nanoid } from 'nanoid'; 

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  });


  const [filter, setFilter] = useState('');

  const addContact = (newContact) => {
    const isDuplicateName = contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());
    const isDuplicateNumber = contacts.some(contact => contact.number === newContact.number);

    if (isDuplicateName) {
      return alert(`Contact with the name "${newContact.name}" already exists.`);
    }

    if (isDuplicateNumber) {
       return alert(`Contact with the number "${newContact.number}" already exists.`);
     }

    setContacts((prevContacts) => [...prevContacts, { ...newContact, id: nanoid() }]);
  };

const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

    useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
<div>
  <h1>Phone<span>book</span></h1>
  <ContactForm onAddContact={addContact}/>
  < SearchBox filter={filter} onFilterChange={handleFilterChange} />
  <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
</div>

    </>
  )
}

export default App
