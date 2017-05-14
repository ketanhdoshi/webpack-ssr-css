// -----------------------------------------------------------------
// Presentational component for the Sidebar sub-menus
// -----------------------------------------------------------------
import React, { PropTypes } from 'react'

const SidebarSubMenuItem = (props) => (    
    <li><a href="#"><i className="fa fa-circle-o"></i>{props.children}</a></li>
)

SidebarSubMenuItem.propTypes = {
}

export default SidebarSubMenuItem
