import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/Seo";


const PostTemplate = props => {
  const {
    data: {
      link,
      wordpress_id,
      id,
      title,
      slug,
      excerpt,
      categories: {
        id,
        name,
        description,
      },
    date,
    comment_status
    }
  } = props;

  return (
    <div>
      <Seo />
      <h1>{title}</h1>
      <p>excerpt</p>
    </div>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default PostTemplate;

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query PostById($id: String!) {
    post: wordpressPost( id: { eq: $id } ) {
      link
      wordpress_id
      id
      title
      slug
      excerpt
      categories{
        id
        name
        description
      }
      date
      comment_status
      
    }
  }
`;
