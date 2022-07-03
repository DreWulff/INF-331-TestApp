import '../css/task.css';
import {useState} from 'react';
import ContactItem from './Item';
import EditContact from './Edit';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase_config';

function Contact({id, name, l1name, l2name, mail, phone}) {

  const [open, setOpen] = useState({edit:false, view:false});

  const handleClose = () => {
    setOpen({edit:false, view:false});
  };

  const deleteUser = async () => {
    const contactDoc = doc(db, "contacts", id);
    await deleteDoc(contactDoc);
    refreshPage();
  };

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <div className={'task'}>
      <div className='task__body'>
        <h2>{name} {l1name} {l2name}</h2>
        <p>Correo: {mail}</p>
        <p>Telefono: {phone}</p>
        <div className='task__buttons'>
          <div className='task__deleteNedit'>
            <button 
              className='task__editButton' 
              onClick={() => setOpen({...open, edit: true})}>
              Editar
            </button>
            <button className='task__deleteButton' onClick={deleteUser}>Borrar</button>
          </div>
          <button 
            onClick={() => setOpen({...open, view: true})}>
            Detalles
          </button>
        </div>
      </div>

      {open.view &&
        <ContactItem 
          onClose={handleClose} 
          name={name} 
          l1name={l1name}
          l2name={l2name}
          mail={mail}
          phone={phone}
          open={open.view} />
      }

      {open.edit &&
        <EditContact
          onClose={handleClose} 
          toEditName={name} 
          toEditL1Name={l1name}
          toEditL2Name={l2name}
          toEditMail={mail}
          toEditPhone={phone}
          open={open.edit}
          id={id} />
      }

    </div>
  );
}

export default Contact;