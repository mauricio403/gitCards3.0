import React, { useState } from 'react'
// import axios from 'axios';
import './app.css'
import { Formulario } from './Formulario';
// import TextField from '@material-ui/core/TextField'
import { CardList } from './ListaTarjetas';



//padre hecho funcion

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];



export const Tarjetas2 = () => {

  const [profiles, setProfiles] = useState([]);

  const [perfil] = useState(testData)

  const addNewProfile = (profileData) => {

    setProfiles([...profiles, profileData])

  }


  return (
    <div>
      
        <div className="header">
          <h1>GitHub Card Profiles</h1>
        </div>
        <Formulario onSubmit={addNewProfile} />
        <CardList profiles={profiles} perfiles = {perfil}/>
    </div>
  )
}


