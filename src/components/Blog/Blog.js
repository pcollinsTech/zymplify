import React from "react";
import Headline from "../Article/Headline";

import Item from "./Item";

const Blog = props => {
  const { posts } = props;
  console.log("Blog", posts)
  if(posts.length <= 3) {
    return (
      <React.Fragment>
        <Headline title="Blog" />
        <h3>Some of my most recent posts</h3>
        <div>
          {posts.map(post => {
            const { node } = post;
            return <Item key={node.slug} post={node} />;
          })}
        </div>
        
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <Headline title="Blog"  />
        <div>
          {posts.map(post => {
            const { node } = post;
            return <Item key={node.slug} post={node} />;
          })}
        </div>
        
      </React.Fragment>
    )
  }
}


export default Blog;
