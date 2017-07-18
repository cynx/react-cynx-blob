import React from 'react';
import PropTypes from 'prop-types';

/** A component to demonstrate document generation */
const HelloWorld = ({message}) => <div>Hello {message}</div>;

HelloWorld.propTypes = {
    /** message to display */
    message: PropTypes.string
};

HelloWorld.defaultProps = {
    message: 'World'
}
export default HelloWorld;