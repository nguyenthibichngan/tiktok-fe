import React from 'react';
import PropTypes from 'prop-types';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    return React.children.only(children);
}

GlobalStyles.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
