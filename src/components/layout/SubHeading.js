import React from 'react';
import PropTypes from 'prop-types';


function SubHeading({ title }) {
    return (
        <div class="sub-heading">{title}</div>
    )
}

SubHeading.propTypes ={
    title: PropTypes.string.isRequired
};

export default SubHeading
