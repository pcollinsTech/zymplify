import React, { Component } from 'react'
import Layout from '../components/Layout'


class ContactPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <div className="container mt-5">
            <h2>Get in Touch</h2>
            <div className="contactForm">
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netify-honeypot="bot-field"
              >
                <label>
                  Name:
                <input name="name" type="text" />
                </label>
                <label>
                  Email:
                <input name="email" type="email" />
                </label>
                <label>
                  Message:
                <textarea name="message" cols="40" rows="7" />
                </label>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>

        </Layout>

        <style jsx>{`
        .main {
          padding: 70px 50px;
        }

        .contactForm {
          padding-top: 22px;
          button {
            margin: 10px 5px 10px 0;
            padding: 8px 13px;
            border: none;
            font-size: 20px;
            float: right;
          }
          button:hover {
            cursor: pointer;
          }
          textarea,
          input {
            font-size: 20px;
            width: 100%;
            margin: 10px 5px 10px 0;
            padding: 8px 5px;
            border: none;
          }
        }
        h2 {
          text-align: center;
          font-size: 30px;
        }
        .container {
          margin: 0 auto;
          padding-bottom: 65px;
        }
      `}</style>
      </React.Fragment>
    )
  }
}

export default ContactPage
