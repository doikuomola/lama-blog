import React from 'react';
import Edit from '../assets/edit.png';
import Delete from '../assets/delete.png';
import { Link } from 'react-router-dom';
import { Menu } from '../components';

const SingleBlog = () => {
  const handleDelete = () => {};
  return (
    <div className="single">
      <div className="content">
        <div className="img">
          <img
            src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="post"
          />
        </div>
        <div className="user">
          <div className="user-img">
            <img
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="user"
            />
          </div>
          <div className="info">
            <span>David</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="actions">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" onClick={handleDelete} />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
          error.{' '}
        </h1>
        {/* <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni
          modi, quis aliquid saepe dolore deleniti, temporibus accusamus commodi
          pariatur nisi? Quas a odio deleniti blanditiis accusantium? Placeat
          assumenda culpa inventore distinctio voluptas atque necessitatibus
          repellat recusandae quia enim, laudantium, quod temporibus tempora
          fugiat. Dicta eligendi molestias asperiores quidem autem! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sunt quam obcaecati in
          fuga incidunt placeat earum culpa nam ratione, rem deserunt alias
          nulla omnis magni, enim tempora! Vel similique reprehenderit ut
          perferendis magni dolore nemo illum animi hic culpa. Sunt eaque
          consectetur autem maxime iusto, quidem ut omnis doloribus soluta,
          voluptas error dolores est fugiat repudiandae nam dicta exercitationem
          assumenda earum eveniet sit pariatur esse explicabo. Itaque, error
          reprehenderit! Eius eaque at minus ipsum neque natus quibusdam
          officiis amet!
          <br />
          Tenetur architecto dolorem adipisci neque rem eveniet quas aut quod
          obcaecati expedita, est voluptatem doloremque aspernatur fuga vel
          eius? Rem, beatae.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default SingleBlog;
