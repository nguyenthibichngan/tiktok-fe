import PropTypes from 'prop-types';

function MenuItem({ title, to, icon }) {
    return;
}

MenuItem.prototype = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
