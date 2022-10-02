const postsCtrl = {
  getAllPosts: (req, res) => {
    try {
      res.send('get all posts api');
    } catch (error) {}
  },
};

export default postsCtrl;
