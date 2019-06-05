import React, {Component} from "react"
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Blog from "../components/Blog"
import RiverhouseBelfast from "../components/Images/RiverhouseBelfast"
// import {Toggle} from 'reactstrap'



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
            <div className="container">
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
                <h3>What does Zymplify do?</h3>
                <p>
                  Zymplify is a Digital Marketing Automation Software Platform which allows your marketing
                  teams to operate all functions of the digital marketing process together. Create full marketing
                  campaigns, monitor the ROI of each campaign, manage all your PPC campaigns and Email
                  Marketing within one place. You have full control of all things Digital Marketing.
                </p>
                <div className="col-md-3">
                  
                  <h5>Email Marketing</h5>
                  <p>
                    Get more leads top read and open your emails by creating great
                    emails, making sure the right people read them and optimizing them through A/B
                    testing.
                  </p>
                  <ul>
                    <li>Build an unlimited amount of email marketing campaigns.</li>
                    <li>Create amazing Emails using the Email Template Builder.</li>
                    <li>Analyse how well your email marketing campaigns are going with analytics.</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h5>PPC Marketing</h5>
                  <p>
                    No matter where your leads are, make sure to be able to make to
                    them wherever they are. Market and then remarket
                  </p>
                  <ul>
                    <li>Manage all of your PPC Digital Ads in one management tool.</li>
                    <li>Remarket Digital Adverts to your audience from multiple websites.</li>
                    <li>Monitor and control each PPC Campaign and which audience/leads are involved.</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h5>Mobile Marketing</h5>
                  <p>
                    Connect with your already connected Leads. Build Mobile
                    Optimized campaigns and allow for SMS interaction.
                  </p>
                  <ul>
                    <li>Create SMS campaigns and choose who the campaigns get sent to.</li>
                    <li>Build Mobile Marketing optimized Landing Pages for the best experience.</li>
                    <li>Manage how you interact with your leads after interacting with them.</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h5>Marketing Automation</h5>
                  <p>
                    Build out Sales Funnels that react to what your leads are
                    doing and automatically nurture them with prompts you designed.
                  </p>
                  <ul>
                    <li>Build Sales/Marketing Funnels for your Leads/Audience.</li>
                    <li>Create Lead/User Journeys with every step automated to do something you want.</li>
                    <li>Nurture each lead and build personal experiences that matter to each user.</li>
                  </ul>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-3">
                  <h5>Social Marketing</h5>
                  <p>
                    Connect with your leads on any social media platform their own
                    and engage with them, tracking how effective your social media efforts are.
                  </p>
                  <ul>
                    <li>End-End tracking of how effective all your social media accounts are.</li>
                    <li>Schedule and Manage posts whenever you like within one platform.</li>
                    <li>Analyse and Optimize social media strategies using social analytics.</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h5>Multichannel Marketing Management</h5>
                  <p>
                    Build out campaigns that synchronize with
                    many different marketing channels at the same time. Make sure the same message
                    is aligned.
                  </p>
                  <ul>
                    <li>Execute a Digital Marketing Strategy through multiple channels at the same time.</li>
                    <li>Build out the type of campaign you want. Information capture, click through’s or trials. Make the right type of campaigns.</li>
                    <li>Choose what Leads lists to be included, remarket no matter what channel the lead uses and analyse the best types of leads</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h5>Website Marketing</h5>
                  <p>
                    Start using your website to build the best types of leads. Make sure you can capture 
                    your leads so you can convert them another day.
                  </p>
                  <ul>
                    <li>Track what visitors are coming onto your website.</li>
                    <li>Build leads features like modal/popup forms, call to actions and chatbot.</li>
                    <li>Analyse how well your overall website marketing is doing with Google Analytics Integration.</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h5>Marketing Analytics</h5>
                  <p>
                    Find out how well your website and marketing campaigns are 
                    doing. Adjust and optimize how to make the most of your digital marketing. 
                  </p>
                  <ul>
                    <li>Know how effectively all of your marketing campaigns are at one place.</li>
                    <li>Score every lead and know how likely they are to be converted.</li>
                    <li>Find out the ROI of every campaign that has been created.</li>
                  </ul>
                </div>
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
