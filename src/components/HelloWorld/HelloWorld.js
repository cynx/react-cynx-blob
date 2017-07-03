import React from 'react';

const HelloWorld = ({message}) => <div>Hello {message}</div>;

HelloWorld.propTypes = {
    message: PropTypes.string
};

export default HelloWorld;