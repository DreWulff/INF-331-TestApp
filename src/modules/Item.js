import Modal from "./Modal"
import '../css/taskItem.css'

function ContactItem({open, onClose, name, l1name, l2name, mail, phone, id}) {

  return (
    <Modal modalLable='Detalles de Contacto' onClose={onClose} open={open}>
      <div className='taskItem'>
        <h1>{name} {l1name} {l2name}</h1>
        <p>Correo: {mail}</p>
        <p>Telefono: {phone}</p>
      </div>
    </Modal>
  )
}

export default ContactItem
