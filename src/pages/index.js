import React, {Component} from "react"
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout"
// import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Blog from "../components/Blog"





class IndexPage extends Component {

  
  render() {
    const {
      data: {
        posts: { edges: posts = [] },
      }
    } = this.props
    
    const filteredPosts = posts.slice(0, 3);
    console.log("INDEX RENDER", filteredPosts)
    return (
      <React.Fragment>
        <Layout>
          {/* <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
          <Hero />
          <Blog posts={filteredPosts} />
          <div className="container home-content">
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
                <img src="../../images/logo.png" alt="alt tag"/>
              </div>
            </div>
            <div className="row mt-5">
              <h3>What does Zymplify do?</h3>
              <p>
                Zymplify is a Digital Marketing Automation Software Platform which allows your marketing
                teams to operate all functions of the digital marketing process together. Create full marketing
                campaigns, monitor the ROI of each campaign, manage all your PPC campaigns and Email
                Marketing within one place. You have full control of all things Digital Marketing.
              </p>
              <div className="col-md-3">
                <h5>Email Marketing</h5>
                <p>THis is some radnoemr filler txt that needs to be replaced</p>
                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>PPC Marketing</h5>
                <p>THis is some radnoemr filler txt that needs to be replaced</p>
                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Mobile Marketing</h5>
                <p>THis is some radnoemr filler txt that needs to be replaced</p>
                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Marketing Automation</h5>
                <p>THis is some radnoemr filler txt that needs to be replaced</p>
                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3">
                <h5>Social Marketing</h5>
                <p>THis is some radnoemr filler txt that needs to be replaced</p>
                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Multichannel Marketing Management</h5>
                <p>THis is some radnoemr filler txt that needs to be replaced</p>
                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Website Marketing</h5>
                <p>THis is some radnoemr filler txt that needs to be replaced</p>
                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Marketing Analytics</h5>
                <p>THis is some radnoemr filler txt that needs to be replaced</p>
                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </div>
            <div className="row mt-5">
              <h2>What does Zymplify off to Belfast</h2>
              <p>THis is some radnoemr filler txt that needs to be replaced</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At distinctio, quisquam natus, explicabo rerum iste labore incidunt blanditiis exercitationem cumque numquam atque mollitia dolore saepe sint? Reprehenderit optio vel architecto!</p>
            </div>
            <div className="row mt-5">
              <h2>Belfast Marketing Digital Agencies</h2>
              <p>THis is some radnoemr filler txt that needs to be replaced</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At distinctio, quisquam natus, explicabo rerum iste labore incidunt blanditiis exercitationem cumque numquam atque mollitia dolore saepe sint? Reprehenderit optio vel architecto!</p>
            </div>
          </div>
        </Layout>
        <style jsx="true">{`
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
