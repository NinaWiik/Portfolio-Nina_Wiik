import React from 'react';
import PropTypes from 'prop-types';


function MainHeading({ title }) {
    return (
        <div class="main-heading">{title}</div>
    )
}

MainHeading.propTypes ={
    title: PropTypes.string.isRequired
};

export default MainHeading
