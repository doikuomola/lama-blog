import React from 'react';
import { data } from '../utils/data';

const Menu = () => {
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {data.posts.slice(0, 10).map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt={post.title} />
          <h2>{post.title}</h2>
          <button className="button">read more...</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
