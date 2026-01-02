import ContactItem from './ContactItem'

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(c => (
        <ContactItem key={c.id} contact={c} onDelete={onDelete} />
      ))}
    </ul>
  )
}
