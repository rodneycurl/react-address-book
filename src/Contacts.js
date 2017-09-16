import React from 'react'
import Contacts from './components/Contacts'

class App extends React.Component {
  state={filter: ""}
  render(){

  const contacts = [
    {
    id: 0,
    name: "Mark Zuckerberg",
    phonenumber: "555-555-5555",
    email: "mark@facebook.com",
    address: "1 Hacker Way, Menlo Park, 94025",
    tags: "facebook, executive",
    favorite: true,
    },
    {
    id: 1,
    name: "Dustin Moskovitz",
    phonenumber: "555-555-5555",
    email: "dustin@facebook.com",
    address: "1 Hacker Way, Menlo Park, 94025",
    tags: "facebook, executive",
    favorite: false,
    },
    {
    id: 2,
    name: "Eduardo Saverin",
    phonenumber: "555-555-5555",
    email: "eduardo@facebook.com",
    address: "1 Hacker Way, Menlo Park, 94025",
    tags: "facebook, executive",
    favorite: true,
    },
    {
    id: 3,
    name: "Andrew McCollum",
    phonenumber: "555-555-5555",
    email: "andrew@facebook.com",
    address: "1 Hacker Way, Menlo Park, 94025",
    tags: "facebook, executive",
    favorite: false,
    },
    {
    id: 4,
    name: "Chris Hughes",
    phonenumber: "555-555-5555",
    email: "chris@facebook.com",
    address: "1 Hacker Way, Menlo Park, 94025",
    tags: "facebook, executive",
    favorite: false,
    },
  ]
  const favorite= contacts.filter(contact => contact.favorite);
  const filterlist= this.state.filter.length === 0 ? contacts : contacts.filter(
  contact => contact.name.indexOf  (this.state.filter)
)


  return (
    <section>
      <input
        style={{marginLeft: 40 + 'em'}}
        type="text"
        name="search"
        placeholder="Search.."
        onChange={(event) => {
          this.setState({
            filter: event.target.value
          })
        }}
      />
      <button style={{marginLeft: 80 +'em'}}>CLICK ME!</button>
      <h1 style={{marginLeft: 20 +'em'}}>ADDRESS BOOK</h1>
      <h2 style={{marginLeft: 20 + 'em'}}>Favorites</h2>
      { favorite
        .map(f =>
          <Contacts key={f.id + Date.now()} contact={f} />
      )}
      <hr />
      <h2 style={{marginLeft: 20 + 'em'}}>All</h2>
      { filterlist
        .map(contact =>
          <Contacts key={contact.id} contact={contact} />
      )}
    </section>
  )
}
}

export default App
