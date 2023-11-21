import { useState, useEffect } from 'react';

const url = "http://localhost:5000";

async function fetchPosts(url){
    await fetch(url, {
    method: "POST",
    body: JSON.stringify(listaUsuarios), //convierte JS en JSON
    headers: {
    "Content-Type": "application/json",
    },
    })}
    const result = await response.json();
    return result;


function ListPosts() {
  /*almacena la lista de ususrios del servidor */
  const [cargarUser, setCargaUser] = useState([]);
  
  /*carga la lista de usuarios del servidor, pasamos la funcion fetchPosts
  y newUser acualiza el estado de cargarUser */
  useEffect(() => {
    fetchPosts().then((newUser) => setCargaUser(newUser));
  }, []);

  /*el return recorre la lista de los usuarios y le pasamos el user de la 
  funcion verUser para que nos de la info del usuario seleccionado */

  return (
    <div>
      {cargarUser.map((user) => (
        <div key={nombre}>{user.nombre}</div>
      ))}
    </div>
    
  );
}

export default ListPosts;