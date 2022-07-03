import '../css/taskManager.css'
import Contact from './Contact'
import AddContact from './Add'
import { useState, useEffect } from 'react';
import { db } from '../firebase_config';
import { collection, getDocs } from 'firebase/firestore';

function ContactList() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [contacts, setContacts] = useState([]);
  const contactsColRef = collection(db, "contacts");
  useEffect(() => {
    const getContacts = async () => {
      const data = await getDocs(contactsColRef);
      setContacts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getContacts();
  }, []);


  return (
    <div className='taskManager'>
      <header>Lista de Contactos</header>
      <div className='taskManager__container'>
        <button 
          onClick={() => setOpenAddModal(true)}>
          Añadir Contacto +
        </button>
        <div className='taskManager__tasks'>
          {contacts.map((contact) => { console.log(contact); return(
          <Contact
            id={contact.id}
            name={contact.name}
            l1name={contact.l1_name}
            l2name={contact.l2_name}
            mail={contact.mail}
            phone={contact.phone}
          />)})}
        </div>
      </div>

      {openAddModal &&
        <AddContact onClose={() => setOpenAddModal(false)} open={openAddModal} colRef={contactsColRef}/>
      }

    </div>
  )
}

export default ContactList
