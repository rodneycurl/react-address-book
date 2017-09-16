import React from 'react'
import Contacts from './components/Contacts'

function App() {
  const contacts = [
    {
    name: "Mark Zuckerberg",
    phonenumber: "555-555-5555",
    email: "mark@facebook.com",
    address: "1 Hacker Way, Menlo Park, 94025",
    tags: "facebook, executive",
    favorite: true,
    },
    {
    name: "Dustin Moskovitz",
    phonenumber: "555-555-5555",
    email: "dustin@facebook.com",
    address: "1 Hacker Way, Menlo Park, 94025",
    tags: "facebook, executive",
    favorite: false,
    },
    {
    name: "Eduardo Saverin",
    phonenumber: "555-555-5555",
    email: "eduardo@facebook.com",
    address: "1 Hacker Way, Menlo Park, 94025",
    tags: "facebook, executive",
    favorite: true,
    },
    {
    name: "Andrew McCollum",
    phonenumber: "555-555-5555",
    email: "andrew@facebook.com",
    address: "1 Hacker Way, Menlo Park, 94025",
    tags: "facebook, executive",
    favorite: false,
    },
    {
    name: "Chris Hughes",
    phonenumber: "555-555-5555",
    email: "chris@facebook.com",
    address: "1 Hacker Way, Menlo Park, 94025",
    tags: "facebook, executive",
    favorite: false,
    },
  ]
  const favorite= contacts.filter(contact => contact.favorite)

  return (
    <section>
      <h1 style={{marginLeft: 20 +'em'}}>ADDRESS BOOK</h1>
      <h2 style={{marginLeft: 20 + 'em'}}>FAVORITES</h2>
      { favorite
        .map(f =>
          <Contacts contact={f} />
      )}
      <hr />
      <h2 style={{marginLeft: 20 + 'em'}}>ALL</h2>
      { contacts
        .map(contact =>
          <Contacts contact={contact} />
      )}
    </section>
  )
}

export default App
