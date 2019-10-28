import React from 'react';
import { Spring } from 'react-spring/renderprops';

export default function RatingBar(props) {
  let ratingBarStyle = {
    width: `${props.rating}% `,
    transform: 'translateX(0%)',
    background: '#000000'
  };
  if (props.rating < 50)
    ratingBarStyle.background = 'linear-gradient(to right, #FF5754, #FFADA8)';
  if (props.rating > 50 && props.rating < 69)
    ratingBarStyle.background = 'linear-gradient(to right, #FFFC66, #FFECA9)';
  if (props.rating > 69)
    ratingBarStyle.background = 'linear-gradient(to right, #87FF5E, #C0FFAB)';

  return (
    <div className="mtv-rating">
      <div className="mtv-progress-bar-container">
        <div
          className="mtv-progress-bar"
          style={props.ratingLoaded ? ratingBarStyle : null}
        />
      </div>
      {isNaN(props.rating) && (
        <p className={'mtv-p-rating ' + (props.indicator === 'tv' && 'whiteT')}>
          Not Rated
        </p>
      )}
      {!isNaN(props.rating) && props.ratingLoaded ? (
        <Spring
          from={{ number: 0, display: 'inline-block' }}
          to={{ number: props.rating }}
          config={{ duration: 1500 }}
        >
          {propss => (
            <div style={propss}>
              <p
                className={
                  'mtv-p-rating ' + (props.indicator === 'tv' && 'whiteT')
                }
              >
                {propss.number.toFixed()}%
              </p>
            </div>
          )}
        </Spring>
      ) : (
        <p style={{ opacity: 0 }} className="mtv-p-rating">
          00%
        </p>
      )}
    </div>
  );
}
