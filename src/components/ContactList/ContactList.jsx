import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.listContact}>
      {contacts.map(contact => (
          <Contact key={contact.id} name={contact.name} number={contact.number} onDeleteContact={() => onDeleteContact(contact.id)} />
      ))}
    </ul>
  );
}

export default ContactList;
