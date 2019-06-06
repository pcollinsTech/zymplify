import React from "react";
import Headline from "../Article/Headline";

import Item from "./Item";

const Blog = props => {
  const { posts } = props;
  if(posts.length <= 3) {
    return (
      <React.Fragment>
        <div className="container">
          <Headline title="Blog" />
          <div className="blog">
            {posts.map(post => {
              const { node } = post;
              return <Item key={node.slug} post={node} />;
            })}
          </div>
        </div>
        
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <div className="container">
          <Headline title="Blog"  />
          <div className="blog">
            {posts.map(post => {
              const { node } = post;
              return <Item key={node.slug} post={node} />;
            })}
          </div>
        </div>
        <style jsx="true">{`
          .blog {
            display: flex;
            justify-content: space-between;
            
          }

          
        `}</style>
      </React.Fragment>
    )
  }
}


export default Blog;
