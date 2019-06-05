import React from "react";
import PropTypes from "prop-types";

// import asyncComponent from "../AsyncComponent";
import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";
// import Meta from "./Meta";
// import NextPrev from "./NextPrev";

// const Share = asyncComponent(() =>
//   import("./Share")
//     .then(module => {
//       return module.default;
//     })
//     .catch(error => {})
// );

const Post = props => {
  const {
    // post,
    post: {
      // date,
      title,
      // slug,
      content,
      // excerpt,
      // categories: {
        // name,
      // },
      // html,
    },
  } = props;

  return (
    <React.Fragment>
      <header>
        <Headline title={title}  />
        {/* <Meta prefix={prefix}  category={category}  /> */}
      </header>
      <Bodytext content={content}  />
      <footer>
        {/* <Share post={post}  /> */}
        {/* <Author note={authornote}  /> */}
        {/* <NextPrev next={nextPost} prev={prevPost}  /> */}
      </footer>
    </React.Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
};

export default Post;
