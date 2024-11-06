import css from './Contact.module.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";

function Contact({ name, number, onDeleteContact }) {
  return (
    <li className={css.itemContact}>
      <div className={css.contactInfo}>
      <p className = {css.nameContact}><IoMdPerson className={css.iconPeople}/>{name}</p>
        <p className={css.numberContact}><BsFillTelephoneFill className={css.iconPhone} />{number}</p>
        </div>
      <button className={css.buttonDelete} onClick={onDeleteContact}>Delete</button>
    </li>
  );
}


export default Contact;