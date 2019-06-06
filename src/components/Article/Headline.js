import React from "react";
import PropTypes from "prop-types";
import theme from '../../theme/theme.yaml'

const Headline = props => {
  const { title, children } = props;

  return (
    <React.Fragment>
      {title ? <h2>{title}</h2> : <h2>{children}</h2>}

      {/* --- STYLES --- */}
      <style jsx>{`
        h2 {
          font-size: ${theme.font.size.xxl};
          text-align: center;
          margin: ${theme.space.stack.l};
          animation-name: headlineEntry;
          animation-duration: ${theme.time.duration.long};

          :global(span) {
            font-weight: ${theme.font.weight.standard};
            display: block;
            font-size: 0.5em;
            letter-spacing: 0;
            margin: ${theme.space.stack.xs};
          }

          :global(svg) {
            height: 0.75em;
            fill: ${theme.color.brand.primary};
          }
        }

        @keyframes headlineEntry {
          from {
            opacity: 0.5;
          }
          to {
            opacity: 1;
          }
        }

        @from-width tablet {
          h2 {
            font-size: ${`calc(${theme.font.size.xl} * 1.2)`};
          }
        }

        @from-width desktop {
          h2 {
            font-size: ${`calc(${theme.font.size.xl} * 1.4)`};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Headline.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Headline;
