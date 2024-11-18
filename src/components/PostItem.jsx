import React from 'react'

export default function PostItem() {
  return (
    <div className="card my-4"> 
      <div className="card-content"> 
        <h2 className="title is-4 has-text-white">post.title</h2> 
        <p className="content has-text-white">post.body</p> 
        <p className="has-text-grey-light">new Date(post.createdAt).toLocaleDateString()</p> 
      </div> 
    </div>
  )
}
