import Modal from "./Modal"
import { useState } from 'react'
import '../css/editTask.css'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase_config'

function EditContact({open, onClose, toEditName, toEditL1Name, toEditL2Name, toEditMail, toEditPhone, id}) {

  const [name,    setName]    = useState(toEditName)
  const [l1name,  setL1Name]  = useState(toEditL1Name)
  const [l2name,  setL2Name]  = useState(toEditL2Name)
  const [mail,    setMail]    = useState(toEditMail)
  const [phone,   setPhone]   = useState(toEditPhone)

  const updateContact = async () => {
    const contactDoc = doc(db, "contacts", id);
    await updateDoc(contactDoc, {
                            name:     name,
                            l1_name:  l1name,
                            l2_name:  l2name,
                            mail:     mail,
                            phone:    phone
    });
    refreshPage();
  }

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <Modal modalLable='Editar Contacto' onClose={onClose} open={open}>
      <form className='editTask' name='updateTask'>
        <input 
          type='text' 
          name='name'
          onChange={(e) => setName(e.target.value)} 
          value={name}/>
        <input 
          type='text'
          name='l1name'
          onChange={(e) => setL1Name(e.target.value)} 
          value={l1name}/>
        <input 
          type='text'
          name='l2name'
          onChange={(e) => setL2Name(e.target.value)} 
          value={l2name}/>
        <input 
          type='text'
          name='mail'
          onChange={(e) => setMail(e.target.value)} 
          value={mail}/>
        <input 
          type='number'
          name='phone'
          onChange={(e) => setPhone(e.target.value)} 
          value={phone}/>
        <button onClick={(event) => {event.preventDefault(); updateContact()}}>Confirmar</button>
      </form> 
    </Modal>
  )
}

export default EditContact
