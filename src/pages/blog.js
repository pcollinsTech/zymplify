import React from "react";
import { graphql } from "gatsby";
import Blog from "../components/Blog";
import Seo from "../components/Seo";
import theme from '../theme/theme.yaml'
import Layout from "../components/Layout";


class BlogPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const {
      data: {
        posts: { edges: posts = [] },
      }
    } = this.props;


    return <React.Fragment>
        <Layout>

        <div className="gap" />
          <div className="row mt-5 pt-5">

          <Blog posts={posts} theme={theme} />
          </div>

        <Seo />
        </Layout>

        <style jsx>{`
          #container {
            margin: 0 auto;
          }
          .gap {
            margin: 80px;
          }
          hr {
            margin: 0;
            border: 0;
          }`}</style>
      </React.Fragment>;
  }
}

BlogPage.propTypes = {
//   data: PropTypes.object.isRequired
};

export default BlogPage;

export const query = graphql`
  query BlogQuery {
      posts: allWordpressPost{
      edges {
        node {
          id
          date
          title
          excerpt
          slug
          featured_media {
            id
            source_url
          }
        }
      }
    }
  }
`;