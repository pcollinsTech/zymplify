import { FaArrowRight } from "react-icons/fa/";
// import { FaCalendar } from "react-icons/fa/";
// import { FaTag } from "react-icons/fa/";
// import Img from "gatsby-image";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import theme from '../../theme/theme.yaml'


const Item = props => {
  
  const {
    post: {
      excerpt,
      slug,
      title
    }
  } = props;
  
  const createMarkup = () => {
    return { __html: excerpt };
  }
  
  return (
    <React.Fragment>
      <div className="item">
        <Link to={slug} key={slug} className="link">
          
          <h2>
            {title} <FaArrowRight className="arrow" />
          </h2>
          <p className="meta">
            <span>
              {/* <FaCalendar size={18} /> {prefix} */}
            </span>
           
            {/* {category && (
              <span>
                <FaTag size={18} /> {category}
              </span>
            )} */}
          </p>
          <div dangerouslySetInnerHTML={createMarkup()}/>
        </Link>
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        :global(.link) {
          width: 100%;
          color: ${theme.text.color.primary};
        }

        .item {
          border: 1px solid transparent;
          border-radius: ${theme.size.radius.default};
          margin: 0 auto 15px auto;
          transition: all ${theme.time.duration.default};
          background: transparent;
          width:360px;
          padding: 40px;
          h2{
            margin-top: 15px;
          }
          :global(.gatsby-image-outer-wrapper) {
            border-radius: ${theme.size.radius.default};
            border: 1px solid ${theme.line.color};
            overflow: hidden;
          }
          :global(.gatsby-image-outer-wrapper img) {
            z-index: -1;
          }

          &::after {
            content: "";
            height: 0;
            position: absolute;
            bottom: ${`calc(${theme.space.default} * -1.5)`};
            left: 50%;
            transform: translateX(-50%);
            transition: all ${theme.time.duration.default};
            width: 50%;
          }

          &:first-child {
            &::before {
              content: "";
              height: 0;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              transition: all ${theme.time.duration.default};
              width: 50%;
            }
          }
        }

        h2 {
          padding: ${theme.space.m} ${theme.space.s} 0;
          line-height: ${theme.blog.h1.lineHeight};
          font-size: ${theme.blog.h1.size};
          text-remove-gap: both;

          :global(.arrow) {
            display: none;
            position: relative;
            top: 7px;
          }
        }

        .meta {
          display: flex;
          flex-flow: row wrap;
          font-size: 0.8em;
          padding: ${theme.space.m} ${theme.space.s};
          background: transparent;

          :global(svg) {
            fill: ${theme.icon.color};
            margin: ${theme.space.inline.xs};
          }
          span {
            align-items: center;
            display: flex;
            text-transform: uppercase;
            margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
          }
        }

        p {
          line-height: 1.5;
          padding: 0 ${theme.space.s};
          text-remove-gap: both;
        }

        @from-width tablet {
          .item {
            padding: ${theme.space.default};
            width:325px;

            &::after {
              bottom: ${`calc(${theme.space.default} * -2)`};
            }

            &:first-child {
              &::before {
                top: ${`calc(${theme.space.default} * -1.75)`};
              }
            }
          }

          h2 {
            font-size: ${`calc(${theme.blog.h1.size} * 1.2)`};
            padding: ${`calc(${theme.space.default} * 1.5) ${theme.space.default} 0`};
            transition: all 0.5s;
          }
          .meta {
            padding: ${`calc(${theme.space.m} * 1.5) ${theme.space.m}`};
          }
          p {
            padding: 0 ${theme.space.default};
          }
        }
        @from-width desktop {
          .item {
            padding: 0 0 ${`calc(${theme.space.default} * 2)`};
            width:360px;
          }

          :global(.blogItemLink:first-child) > li::before {
            top: ${`calc(${theme.space.default} * -2.75)`};
          }
          h2 {
            font-size: 1.5em;
          }
          
          .item {
            &:hover {
              border: 2px solid ${theme.line.color};
              box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.03);

              &:after {
                bottom: ${`calc(${theme.space.default} * -2.5)`};
              }
              :global(.gatsby-image-wrapper) {
                transform: scale(1.1);
              }
              h2 {
                color: ${theme.blog.h1.hoverColor};
              }
              :global(.arrow) {
                opacity: 1;
                stroke: ${theme.color.special.attention};
                transform: translateX(0);
              }
            }
            :global(.gatsby-image-wrapper) {
              transition: all ${theme.time.duration.default};
            }
            :global(.arrow) {
              display: inline-block;
              fill: ${theme.color.special.attention};
              stroke: ${theme.color.special.attention};
              stroke-width: 40;
              stroke-linecap: round;
              opacity: 0;
              transition: all 0.5s;
              transform: translateX(-50%);
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Item.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Item;
