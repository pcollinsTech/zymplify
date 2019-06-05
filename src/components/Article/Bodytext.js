import React from "react";
import PropTypes from "prop-types";

const Bodytext = props => {
  const { html } = props;

  return (
    <React.Fragment>
      <div className="bodytext" dangerouslySetInnerHTML={{ __html: html }} />

     <style jsx>{`
        .bodytext {
          animation-name: bodytextEntry;

          :global(h2),
          :global(h3) {
            margin: 1.5em 0 1em;
          }

          :global(h2) {
          }

          :global(h3) {
          }

          :global(p) {
            margin: 0 0 1.5em;
          }
          :global(ul) {
            list-style: circle;
            margin: 0 0 1.5em;
            padding: 0 0 0 1.5em;
          }
          :global(li) {
            margin: 0.7em 0;
            line-height: 1.5;
          }
          :global(a) {
            text-decoration: underline;
          }
          :global(a.gatsby-resp-image-link) {
            border: 0;
            display: block;
            margin: 2.5em 0;
            overflow: hidden;
          }
          :global(code.language-text) {
            text-shadow: none;
            color: inherit;
            padding: 0.1em 0.3em 0.2em;
            border-radius: 0.1em;
          }
        }

        @keyframes bodytextEntry {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style> 
    </React.Fragment>
  );
};

Bodytext.propTypes = {
  html: PropTypes.string.isRequired,
};

export default Bodytext;
