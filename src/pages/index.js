import React, {Component} from "react"
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout"
// import Seo from "../components/Seo"
import Hero from "../components/Hero"
// import Blog from "../components/Blog"





class IndexPage extends Component {

  
  render() {
    console.log("INDEX RENDER", this.props)
    // const {
      
    // } = this.props
    return (
      <React.Fragment>
        <Layout>
          {/* <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
          <Hero />
          {/* <Blog post={posts} /> */}
          <div className="container home-content">
            <div className="row">
              <div className="col-md-6">
                <h2>Zymplify moves to Riverhouse, white it does for us!</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quam maiores officia? Eaque omnis quae repellat atque officiis officia laudantium nobis mollitia unde? Ab minus ea officia dolorem esse adipisci.</p>
              </div>
              <div className="col-md-6">
                <img src="../../images/logo.png" alt="alt tag"/>
              </div>
            </div>
            <div className="row mt-5">
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

// export const query = graphql`
//   query IndexQuery {
//       posts: allWordpressPost{
//       edges {
//         node {
//           id
//           title
//           excerpt
//           featured_media {
//             id
//             source_url
//           }
//         }
//       }
//     }
//   }
// `;
