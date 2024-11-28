import React from 'react';
import PostList from '../components/PostList';

const Home = ({ token }) => {
  return (
    <section className="section">      
      <h1 className="title has-text-white has-text-centered">Home</h1> 
      <div className="container"> 
        <PostList token={token} /> 
      </div> 
    </section>
  );
};

export default Home;
