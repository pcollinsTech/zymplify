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
                  <h2 className="mt-4 mb-5">Zymplify moves to Riverhouse, what it does for us!</h2>
                  <p>
                    By moving into the centre of Belfast, Zymplify is able to better connect with the Belfast
                    Business Ecosystem. River House Belfast allows us a great place to allow our clients to
                    meet us and a great place for our employees to work in. River House Belfast also allows
                    Zymplify to create more relationships with up and coming businesses which operate in River
                    House and also established businesses. With our own offices and the brilliant client spaces,
                    Zymplify can now offer a more robust Digital Marketing Automation consultation service than
                    ever before.
                  </p>
                  <p>
                    With this move, Zymplify positions itself as the number one Digital Marketing Automation
                    Software for Northern Ireland.
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
                  Zymplify is a Digital Marketing Automation Software Platform, which allows your marketing
                  and sales teams, to operate all the functions of the digital marketing process together.
                  Instead of having to manage many different marketing programs that don’t work together,
                  Zymplify brings it all in one place.
                </p>
                <p>
                  You’ll be able to create full multichannel marketing campaigns, monitoring the ROI of each
                  and every campaign created for optimization and manage all your PPC and Email Marketing
                  Campaigns within one place to name a few things. You have absolutely full control of all
                  things Multichannel Digital Marketing. The advantages of having Zymplify all in one place is
                  that you don’t need to juggle the integrations of your marketing process.
                </p>
                <p>
                  Zymplify offers intergraded marketing features which allow you to market to prospects and
                  leads no matter what marketing channel they’re on. May it be through an email, social media
                  or a site that the user likes to visit, Zymplify allows you to create any number of sales funnel
                  processes through customer journeys and automate how you nurture with that customer to
                  conversion.
                </p>
                <p>
                  Zymplify offers all these marketing solutions in one platform at the industry’s most
                  aggressively placed prices: £300 per month.
                </p>
                <div className="accords mx-auto">
                  {items.items.map(item => {
                    return <Collapse 
                          title={item.title}
                          description={item.description}
                          list={item.list}
                          />
                  })}

                </div>
              </div>
            </div>
          </section>
         <div className="row">
            <div className="container mt-5 mb-5 bottom">
              <div className="col-md-6">
                <h2 className="mb-5">What does Zymplify off to Belfast</h2>
                <p>
                  From Riverhouse Belfast, Zymplify offers a free marketing consultation which aims to identify 
                  digital marketing mistakes that are being made. Zymplify then aims to offer a solution using 
                  our Digital Marketing Platform and explain how the platform can correct those problems and 
                  expand the businesses Digital Marketing endeavours.
                </p>
              </div>
              <div className="col-md-6">
                <h2 className="mb-5">Belfast Marketing Digital Agencies</h2>
                <p>
                  Zymplify allows Digital Marketing Agencies to use our own software to Market to other companies.
                  If your business is interested in using Zymplify to be your digital marketing software platform,
                  contact us and we’ll get in touch! Find out more about our Digital Marketing offerings to Digital
                  Marketing Agencies here.
                </p>
              </div>
            </div>
         </div>
         <div className="row">
            <Blog posts={filteredPosts} />
         </div>
        </Layout>
        <style jsx="true">{`
          .bottom{
            text-align: center;
            display: flex;
            justify-content: space-between;

          }
          .accords{
            width: 100%;
            margin: 10px auto;
            margin-bottom: 20px;
            content

          }
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
