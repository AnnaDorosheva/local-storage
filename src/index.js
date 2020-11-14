
import posts from './posts.json';
import postItemTemplate from './templates/post-feed-item.hbs';
import './css/post-feed.css';
import './css/styles.css';

// const item = postItemTemplate(posts[1]);
// console.log(item);

const refs = {
  postFeed: document.querySelector('.post-feed')
};

// refs.postFeed.insertAdjacentHTML('beforeend', item);


function buildPostFeed(post, ref) {
  const markup = post.map(item => postItemTemplate(item)).join('');
  // console.log(markup);
  ref.insertAdjacentHTML('beforeend', markup);
};
buildPostFeed(posts, refs.postFeed);
