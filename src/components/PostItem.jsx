import React from 'react'

export default function PostItem() {
  return (    
      <div className="card my-4 has-background-dark post"> 
        <div className="card-content texts"> 
          <h2 className="title is-4 has-text-white">post.title</h2> 
          <p className="content has-text-white summary">post.body</p>          
          <p className="has-text-grey-light info">new Date(post.createdAt).toLocaleDateString()</p>           
        </div> 
      </div>    
  )
}
