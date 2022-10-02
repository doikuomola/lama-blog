import React from 'react';
import { data } from '../utils/data';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="posts">
        {data.posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt={post.title} />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{post.desc}</p>
              <button>read more...</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
