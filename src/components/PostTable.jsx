import React from 'react';

const PostTable = ({ posts, onEdit, onDelete }) => {
  return (
    <table className="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Título</th>          
          <th>Fecha de Creación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr key={post._id}>
            <td>{post.title}</td>            
            <td>{new Date(post.createdAt).toLocaleDateString()}</td>
            <td>
              <button className="button is-small is-info mr-2" onClick={() => onEdit(post)}>Editar</button>
            </td>
            <td>  
              <button className="button is-small is-danger" onClick={() => onDelete(post._id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostTable;
