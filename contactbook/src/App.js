import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import Filter from './components/Filter'

export default function App() {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(localStorage.getItem('contacts')) ?? []
  )
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContact = ({ name, number }) => {
    if (contacts.some(c => c.name.toLowerCase() === name.toLowerCase())) {
      alert(`Contact ${name} already exists`)
      return
    }
    setContacts([...contacts, { id: nanoid(), name, number }])
  }

  const deleteContact = id => {
    setContacts(contacts.filter(c => c.id !== id))
  }

  const visibleContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h1>Phonebook</h1>
      <div style={{ display: 'flex', width: '100%', maxWidth: '270px', justifyContent: 'space-between', }}>
        <h2>Name</h2>
        <h2>Number</h2>
      </div>
      <ContactForm onAdd={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  )
}
