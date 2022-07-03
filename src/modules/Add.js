import Modal from "./Modal";
import {useState} from 'react';
import '../css/addTask.css';
import { addDoc } from 'firebase/firestore';

function AddContact({open, onClose, colRef}) {

  const [name,    setName]    = useState("");
  const [l1name,  setL1Name]  = useState("");
  const [l2name,  setL2Name]  = useState("");
  const [mail,    setMail]    = useState("");
  const [phone,   setPhone]   = useState(0);

  /* function to add new task to firestore */
  const createContact = async() => {
    await addDoc(colRef, {
                        name:     name,
                        l1_name:  l1name,
                        l2_name:  l2name,
                        mail:     mail,
                        phone:    phone 
    });
    refreshPage();
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Modal modalLable='Añadir Contacto' onClose={onClose} open={open}>
      <form className='addTask' role='modal' name='addTask'>
        <input 
          type='text' 
          name='name' 
          onChange={(e) => setName(e.target.value)} 
          value={name}
          placeholder='Nombre...'/>
        <input 
          type='text' 
          name='l1name' 
          onChange={(e) => setL1Name(e.target.value)} 
          value={l1name}
          placeholder='Primer apellido...'/>
        <input 
          type='text' 
          name='l2name' 
          onChange={(e) => setL2Name(e.target.value)} 
          value={l2name}
          placeholder='Segundo apellido...'/>
        <input 
          type='text' 
          name='mail' 
          onChange={(e) => setMail(e.target.value)} 
          value={mail}
          placeholder='Correo...'/>
        <input 
          type='number' 
          name='phone' 
          onChange={(e) => setPhone(e.target.value)} 
          value={phone}
          placeholder='Telefono...'/>
        <button onClick={(event) => {event.preventDefault(); createContact()}}>Confirmar</button>
      </form> 
    </Modal>
  );
};

export default AddContact;