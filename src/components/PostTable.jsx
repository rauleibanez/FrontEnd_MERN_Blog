import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const PostTable = ({ posts, onEdit, onDelete }) => {
  const handleDelete = (id) => {
    confirmAlert({
      title: 'Confirmar Eliminación', 
      message: '¿Estás seguro de que deseas eliminar esta publicación?', 
      buttons: [
        {
          label: 'Sí', 
          onClick: () => onDelete(id)
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    }); 
};



  return (
    <table className="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Título</th>          
          <th>Fecha de Creación</th>
          <th>Fecha de Actualización</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr key={post._id}>
            <td>{post.title}</td>            
            <td>{new Date(post.createdAt).toLocaleDateString()}</td>
            <td>{new Date(post.updatedAt).toLocaleDateString()}</td>
            <td>
              <button className="button is-small is-info mr-2" onClick={() => onEdit(post)}>Editar</button>
            </td>
            <td>  
              <button className="button is-small is-danger" onClick={() => handleDelete(post._id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;
