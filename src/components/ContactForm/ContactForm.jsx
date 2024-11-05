import css from './ContactForm.module.css';
import { useState } from "react";

export default function ContactForm({ onAddContact }) {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={css.formContact} onSubmit={handleSubmit}>
      <label className={css.labelContact}>Name</label>
      <input
        className={css.field}
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label className={css.labelContact}>Number</label>
      <input
        className={css.field}
        type="tel"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />
      <button className={css.buttonAdd} type="submit">Add contact</button>
    </form>
  );
}
