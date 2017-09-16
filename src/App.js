import React from 'react'

function App() {
  const contacts = {
    name: "Mark Zuckerberg",
    phonenumber: "555-555-5555",
    email: "mark@facebook.com",
    address: "1 Hacker Way, Menlo Park, 94025",
  }

  return (
    <section>
      <h1 style={{marginLeft: 20 +'em'}}>Address Book</h1>

      <div>
        <header style={{marginLeft: 30 +'em'}}>{ contacts.name }</header>
        <p style={{marginLeft: 30 +'em'}}>
          Phone Number: { contacts.phonenumber }
          <br />
          Email: { contacts.email }
          <br />
          Address: { contacts.address }
        </p>
      </div>
    </section>
  )
}

export default App
