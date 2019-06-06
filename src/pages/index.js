import React, {Component} from "react"
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Blog from "../components/Blog"
import RiverhouseBelfast from "../components/Images/RiverhouseBelfast"
import Collapse from "../components/Collapse"

import items from '../../content/whatWeDo'



class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  
  render() {
    console.log("ADFG", items)
    const {
      data: {
        posts: { edges: posts = [] },
      }
    } = this.props
    
    const filteredPosts = posts.slice(0, 3);
    return (
      <React.Fragment>
        <Layout>
          <Seo title="Home" keywords={[`PPC marketing sofware belfast`, `website marketing software belfast`, `multichannel marketing software belfast`]} />
          <Hero />
          <div className="home-content">
            <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col-md-6">
                  <h2>Zymplify moves to Riverhouse, white it does for us!</h2>
                  <p>
                    Moving into the centre of Belfast, Zymplify is able to integrate more connectively with the
                    Belfast Business Ecosystem. River House Belfast allows us a great place to allow our clients
                    to meet us and a great place for our employees to work in.
                  </p>
                </div>
                <div className="col-md-6">
                  <RiverhouseBelfast />
                </div>
              </div>
            </div>
          </div>
          <section className="row orange">
            <div className="container">
              <div className="row mt-5 ">
                <h3 className="mx-auto mt-3 mb-5">What does Zymplify do?</h3>
                <p className="mb-5">
                  Zymplify is a Digital Marketing Automation Software Platform which allows your marketing
                  teams to operate all functions of the digital marketing process together. Create full marketing
                  campaigns, monitor the ROI of each campaign, manage all your PPC campaigns and Email
                  Marketing within one place. You have full control of all things Digital Marketing.
                </p>
                {items.items.map(item => {
                  return <Collapse 
                        title={item.title}
                        description={item.description}
                        list={item.list}
                        />
                })}
              </div>
            </div>
          </section>
         <div className="row">
            <div className="container">
              <h2>What does Zymplify off to Belfast</h2>
              <p>
                From Riverhouse Belfast, Zymplify offers a free marketing consultation which aims to identify
                digital marketing mistakes being made. Zymplify then aims to be able to offer a solution using
                our Digital Marketing Platform and explain how the platform can correct the problems and
                expand the businesses Digital Marketing endeavours.
                  </p>
            </div>
            <div className="row mt-5">
              <h2>Belfast Marketing Digital Agencies</h2>
              <p>
                Zymplify allows Digital Marketing Agencies to use our own software to Market to other companies.
                If your business is interested in using Zymplify to be your digital marketing software platform,
                contact us and we’ll get in touch! Find out more about our Digital Marketing offerings to Digital
                Marketing Agencies here.
              </p>
            </div>
         </div>
        <Blog posts={filteredPosts} />
        </Layout>
        <style jsx="true">{`
          .orange{ 
            background-color: #FFCC80;
            text-align: center;
          }
          li{
            list-decoration: none;
          }
          .home-content {
            text-align: center;
          }
          `}</style>
      </React.Fragment>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};
export default IndexPage

export const query = graphql`
  query IndexQuery {
      posts: allWordpressPost{
      edges {
        node {
          id
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
