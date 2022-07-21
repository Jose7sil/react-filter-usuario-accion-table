import React from 'react';

const Datatable = ({ data}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Usuario</th>
          <th>IP</th>
          <th>Acciones</th>
          <th>Detalle</th>
        </tr>
      </thead>
      <tbody>
        {data.map((todo) => {
          return (
            <tr key={todo.usuario}>
              <td>{todo.usuario}</td>
              <td>{todo.ip}</td>
              <td>{todo.accion}</td>
              <td>{todo.detalle}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Datatable;
