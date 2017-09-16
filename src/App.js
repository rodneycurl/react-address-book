import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import contacts from './Contacts'



export default function() {
  return(
    <BrowserRouter>
    <div>
      <div>
        <Link to="/contacts">Contacts</Link>
        <Link to="/messages">Messages</Link>
      </div>
      <div>
        <Route path="/contacts" component={contacts} />
      </div>
    </div>
    </BrowserRouter>
  );
}
