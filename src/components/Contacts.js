import React from 'react'

function Contacts(props) {
  return(
    <div>
      <p style={{marginLeft: 30 +'em'}}>
        <text style={{fontWeight: 'bold'}}>Contact Name: </text> { props.contact.name } <br />
        <text style={{fontWeight: 'bold'}}>Phone Number: </text> { props.contact.phonenumber } <br />
        <text style={{fontWeight: 'bold'}}>E-mail: </text>{ props.contact.email } <br />
        <text style={{fontWeight: 'bold'}}>Address: </text>{ props.contact.address } <br />
        <text style={{fontWeight: 'bold'}}>Tags: </text>{ props.contact.tags } <br />
      </p>
    </div>
  )}

export default Contacts
