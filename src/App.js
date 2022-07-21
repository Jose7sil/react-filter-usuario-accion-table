import React, { useEffect, useState, useCallback } from 'react';
import './style.css';
import Datatable from './datatable';

export default function App() {
  const [data, setData] = useState([
    {
      usuario: 'lucas@example.com',
      ip: '136.90.90.2',
      accion: 'programado',
      detalle: 'detalle',
    },
    {
      usuario: 'Pedro@example.com',
      ip: '136.90.90.2',
      accion: 'fijo',
      detalle: 'detalle',
    },
    {
      usuario: 'Marianis@example.com',
      ip: '136.90.90.1',
      accion: 'fijo',
      detalle: 'detalle',
    },
    {
      usuario: 'dan@example.com',
      ip: '136.90.90.1',
      accion: 'fijo',
      detalle: 'detalle',
    },
  ]);
  
  const [users, setUsers] = useState([]);
  const [accion, setAccion] = useState("");
  const [userFilter, setUserFilter] = useState("");
  
  
  useEffect(() => {
     setUsers(data);
  //   // fetch('https://jsonplaceholder.typicode.com/todos')
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     setIsLoading(false);
  //   //     setData(data);
  //   //   });
  //   //console.log("sadasd",currentUser)
   }, []);


  const Loading = () => <p>Loading...</p>;


 //Filtrar solo por acciones
  const filtroAcciones = () => {
    let dataFilters = [...data];
    //console.log(accion);
    dataFilters = dataFilters.filter(e => e.accion.toLowerCase().includes(accion));
    setUsers(dataFilters);

  };

//Filtrar solo por usuario.
  const filtroUsuario = () => {
    let dataFilters = [...data];
    //console.log(usuario);
    dataFilters = dataFilters.filter(e => e.usuario.toLowerCase().includes(userFilter));
    setUsers(dataFilters);

  };


  ///Filtros en conjunto (recomendado)
  const filtroGeneral = () => {
    let dataFilters = [...data];
    if(accion !== "")
     dataFilters = dataFilters.filter(e => e.accion.toLowerCase().includes(accion));

     if (userFilter !== "") 
     dataFilters = dataFilters.filter(e => e.usuario.toLowerCase().includes(userFilter));

     setUsers(dataFilters);
  }


  return (
    <>
      <div>
        <label>Usuario: </label>
        <input type="text" id="usuario" name="usuario" minlength="4" value={userFilter} onChange={(e) => {setUserFilter(e.target.value);}} onKeyUp={filtroGeneral}
        required/>
      </div>
      <div>
        <label>Acción: </label>
        <input type="text" id="accion" name="accion" minlength="4" value={accion} onChange={(e) => {setAccion(e.target.value);}} onKeyUp={filtroGeneral}
        required/>
      </div>
      <hr/>
      
      <Datatable data={users}/>
 
    </>
  );
}
