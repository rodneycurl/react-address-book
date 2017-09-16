import React from 'react'

function App() {
  const contacts = [
    {
    name: "Mark Zuckerberg",
    phonenumber: "555-555-5555",
    email: "mark@facebook.com",
    address: "1 Hacker Way, Menlo Park, 94025",
    },
    {
    name: "Dustin Moskovitz",
    phonenumber: "555-555-5555",
    email: "dustin@facebook.com",
    address: "1 Hacker Way, Menlo Park, 94025",
    },
    {
    name: "Eduardo Saverin",
    phonenumber: "555-555-5555",
    email: "eduardo@facebook.com",
    address: "1 Hacker Way, Menlo Park, 94025",
    },
    {
    name: "Andrew McCollum",
    phonenumber: "555-555-5555",
    email: "andrew@facebook.com",
    address: "1 Hacker Way, Menlo Park, 94025",
    },
    {
    name: "Chris Hughes",
    phonenumber: "555-555-5555",
    email: "chris@facebook.com",
    address: "1 Hacker Way, Menlo Park, 94025",
    },
  ]

  return (
    <section>
      <h1 style={{marginLeft: 20 +'em'}}>Address Book</h1>
      { contacts.map(contact => (
      <div>
        <p style={{marginLeft: 30 +'em'}}>
          <text style={{fontWeight: 'bold'}}>Contact Name: </text> { contact.name } <br />
          <text style={{fontWeight: 'bold'}}>Phone Number: </text> { contact.phonenumber } <br />
          <text style={{fontWeight: 'bold'}}>E-mail: </text>{ contact.email } <br />
          <text style={{fontWeight: 'bold'}}>Address: </text>{ contact.address } <br />
        </p>
      </div>
    ))}
    </section>
  )
}

export default App
