// Toolbar to show meta data

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Admin extends Component {
    render() {
        const label = this.props.admin ? 'Return to Site Preview' : 'Enter Admin Mode';
        return (
            <div className="admin" onClick={this.props.toggleAdminMode}>
                {label}
            </div>
        );
    }
}

Admin.propTypes = {
    admin: PropTypes.bool.isRequired,
    toggleAdminMode: PropTypes.func.isRequired,
};

export default Admin;
