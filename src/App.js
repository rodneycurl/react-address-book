import React from 'react'

function App() {
  const contacts = {
    name: "Mark Zuckerberg",
    phonenumber: "555-555-5555",
    email: `mark@facebook.com`,
    address: `1 Hacker Way, Menlo Park, 94025`,
  }

  return (
    <section>
      <h1>Address Book</h1>

      <div>
        <header>{ contacts.name }</header>
        <p>
          { contacts.phonenumber }
          <br />
          { contacts.email }
          <br />
          { contacts.address }
        </p>
      </div>
    </section>
  )
}

export default App
