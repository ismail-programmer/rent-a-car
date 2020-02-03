import React, { Component } from "react";

import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="app-container app-theme-gray">
        <div className="app-main">
            <div className="app-sidebar-wrapper">
                <div className="app-sidebar sidebar-shadow">
                    <div className="app-header__logo">
                        <a href="#" data-toggle="tooltip" data-placement="bottom" title="KeroUI Admin Template" className="logo-src"></a>
                        <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                        </button>
                    </div>
                    <div className="scrollbar-sidebar scrollbar-container">
                        <div className="app-sidebar__inner">
                            <ul className="vertical-nav-menu">
                                <li className="app-sidebar__heading">Menu</li>
                                <li className="mm-active">
                                    <a href="#">
                                        <i className="metismenu-icon pe-7s-rocket"></i>
                                        Dashboards
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul className="mm-show">
                                        <li><a href="index-2.html">Analytics</a></li>
                                        <li><a href="management-dashboard.html">Management</a></li>
                                        <li><a href="advertisement-dashboard.html">Advertisement</a></li>
                                        <li><a href="helpdesk-dashboard.html">Helpdesk</a></li>
                                        <li><a href="monitoring-dashboard.html">Monitoring</a></li>
                                        <li><a href="crypto-dashboard.html">Cryptocurrency</a></li>
                                        <li><a href="pm-dashboard.html">Project Management</a></li>
                                        <li><a  className="mm-active" href="product-dashboard.html">Product</a></li>
                                        <li><a href="statistics-dashboard.html">Statistics</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="metismenu-icon pe-7s-browser"></i>
                                        Pages
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="pages-login.html">
                                                <i className="metismenu-icon"></i>
                                                Login
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pages-login-boxed.html">
                                                <i className="metismenu-icon">
                                                </i>Login Boxed
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pages-register.html">
                                                <i className="metismenu-icon">
                                                </i>Register
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pages-register-boxed.html">
                                                <i className="metismenu-icon">
                                                </i>Register Boxed
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pages-forgot-password.html">
                                                <i className="metismenu-icon">
                                                </i>Forgot Password
                                            </a>
                                        </li>
                                        <li>
                                            <a href="pages-forgot-password-boxed.html">
                                                <i className="metismenu-icon">
                                                </i>Forgot Password Boxed
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    
                                    
                                    
                                >
                                    <a href="#">
                                        <i className="metismenu-icon pe-7s-plugin"></i>
                                        Applications
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul
                                        
                                        
                                        
                                    >
                                        <li>
                                            <a href="apps-mailbox.html">
                                                <i className="metismenu-icon">
                                                </i>Mailbox
                                            </a>
                                        </li>
                                        <li>
                                            <a href="apps-chat.html">
                                                <i className="metismenu-icon">
                                                </i>Chat
                                            </a>
                                        </li>
                                        <li>
                                            <a href="apps-faq-section.html">
                                                <i className="metismenu-icon">
                                                </i>FAQ Section
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="app-sidebar__heading">UI Components</li>
                                <li
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                >
                                    <a href="#">
                                        <i className="metismenu-icon pe-7s-diamond"></i>
                                        Elements
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                    >
                                        <li
                                            
                                            
                                            
                                            
                                            
                                            
                                        >
                                            <a href="#">
                                                <i className="metismenu-icon"></i>
                                                Buttons
                                                <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                            </a>
                                            <ul
                                                
                                                
                                                
                                                
                                                
                                                
                                            >
                                                <li>
                                                    <a href="elements-buttons-standard.html">
                                                        <i className="metismenu-icon">
                                                        </i>Standard
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="elements-buttons-pills.html">
                                                        <i className="metismenu-icon">
                                                        </i>Pills
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="elements-buttons-square.html">
                                                        <i className="metismenu-icon">
                                                        </i>Square
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="elements-buttons-shadow.html">
                                                        <i className="metismenu-icon">
                                                        </i>Shadow
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="elements-buttons-icons.html">
                                                        <i className="metismenu-icon">
                                                        </i>With Icons
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="elements-dropdowns.html">
                                                <i className="metismenu-icon">
                                                </i>Dropdowns
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-icons.html">
                                                <i className="metismenu-icon">
                                                </i>Icons
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-badges-labels.html">
                                                <i className="metismenu-icon">
                                                </i>Badges
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-cards.html">
                                                <i className="metismenu-icon">
                                                </i>Cards
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-loaders.html">
                                                <i className="metismenu-icon">
                                                </i>Loading Indicators
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-list-group.html">
                                                <i className="metismenu-icon">
                                                </i>List Groups
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-navigation.html">
                                                <i className="metismenu-icon">
                                                </i>Navigation Menus
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-timelines.html">
                                                <i className="metismenu-icon">
                                                </i>Timeline
                                            </a>
                                        </li>
                                        <li>
                                            <a href="elements-utilities.html">
                                                <i className="metismenu-icon">
                                                </i>Utilities
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                >
                                    <a href="#">
                                        <i className="metismenu-icon pe-7s-car"></i>
                                        Components
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                    >
                                        <li>
                                            <a href="components-tabs.html">
                                                <i className="metismenu-icon">
                                                </i>Tabs
                                            </a>
                                        </li>
                                        <li>
                                            <a href="components-accordions.html">
                                                <i className="metismenu-icon">
                                                </i>Accordions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="components-notifications.html">
                                                <i className="metismenu-icon">
                                                </i>Notifications
                                            </a>
                                        </li>
                                        <li>
                                            <a href="components-modals.html">
                                                <i className="metismenu-icon">
                                                </i>Modals
                                            </a>
                                        </li>
                                        <li>
                                            <a href="components-loading-blocks.html">
                                                <i className="metismenu-icon">
                                                </i>Loading Blockers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="components-progress-bar.html">
                                                <i className="metismenu-icon">
                                                </i>Progress Bar
                                            </a>
                                        </li>
                                        <li>
                                            <a href="components-tooltips-popovers.html">
                                                <i className="metismenu-icon">
                                                </i>Tooltips &amp; Popovers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="components-carousel.html">
                                                <i className="metismenu-icon">
                                                </i>Carousel
                                            </a>
                                        </li>
                                        <li>
                                            <a href="components-calendar.html">
                                                <i className="metismenu-icon">
                                                </i>Calendar
                                            </a>
                                        </li>
                                        <li>
                                            <a href="components-pagination.html">
                                                <i className="metismenu-icon">
                                                </i>Pagination
                                            </a>
                                        </li>
                                        <li>
                                            <a href="components-count-up.html">
                                                <i className="metismenu-icon">
                                                </i>Count Up
                                            </a>
                                        </li>
                                        <li>
                                            <a href="components-scrollable-elements.html">
                                                <i className="metismenu-icon">
                                                </i>Scrollable
                                            </a>
                                        </li>
                                        <li>
                                            <a href="components-tree-view.html">
                                                <i className="metismenu-icon">
                                                </i>Tree View
                                            </a>
                                        </li>
                                        <li>
                                            <a href="components-maps.html">
                                                <i className="metismenu-icon">
                                                </i>Maps
                                            </a>
                                        </li>
                                        <li>
                                            <a href="components-ratings.html">
                                                <i className="metismenu-icon">
                                                </i>Ratings
                                            </a>
                                        </li>
                                        <li>
                                            <a href="components-image-crop.html">
                                                <i className="metismenu-icon">
                                                </i>Image Crop
                                            </a>
                                        </li>
                                        <li>
                                            <a href="components-guided-tours.html">
                                                <i className="metismenu-icon">
                                                </i>Guided Tours
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li
                                    
                                    
                                    
                                >
                                    <a href="#">
                                        <i className="metismenu-icon pe-7s-display2"></i>
                                        Tables
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul
                                        
                                        
                                        
                                    >
                                        <li>
                                            <a href="tables-data-tables.html">
                                                <i className="metismenu-icon">
                                                </i>Data Tables
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tables-regular.html">
                                                <i className="metismenu-icon">
                                                </i>Regular Tables
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tables-grid.html">
                                                <i className="metismenu-icon">
                                                </i>Grid Tables
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="app-sidebar__heading">Dashboard Widgets</li>
                                <li>
                                    <a href="widgets-chart-boxes.html">
                                        <i className="metismenu-icon pe-7s-graph">
                                        </i>Chart Boxes 1
                                    </a>
                                </li>
                                <li>
                                    <a href="widgets-chart-boxes-2.html">
                                        <i className="metismenu-icon pe-7s-way">
                                        </i>Chart Boxes 2
                                    </a>
                                </li>
                                <li>
                                    <a href="widgets-chart-boxes-3.html">
                                        <i className="metismenu-icon pe-7s-ball">
                                        </i>Chart Boxes 3
                                    </a>
                                </li>
                                <li>
                                    <a href="widgets-profile-boxes.html">
                                        <i className="metismenu-icon pe-7s-id">
                                        </i>Profile Boxes
                                    </a>
                                </li>
                                <li className="app-sidebar__heading">Forms</li>
                                <li
                                    
                                    
                                    
                                    
                                >
                                    <a href="#">
                                        <i className="metismenu-icon pe-7s-light"></i>
                                        Elements
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul
                                        
                                        
                                        
                                        
                                    >
                                        <li>
                                            <a href="forms-controls.html">
                                                <i className="metismenu-icon">
                                                </i>Controls
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-layouts.html">
                                                <i className="metismenu-icon">
                                                </i>Layouts
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-validation.html">
                                                <i className="metismenu-icon">
                                                </i>Validation
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-wizard.html">
                                                <i className="metismenu-icon">
                                                </i>Wizard
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="metismenu-icon pe-7s-joy"></i>
                                        Widgets
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="forms-datepicker.html">
                                                <i className="metismenu-icon">
                                                </i>Datepicker
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-range-slider.html">
                                                <i className="metismenu-icon">
                                                </i>Range Slider
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-input-selects.html">
                                                <i className="metismenu-icon">
                                                </i>Input Selects
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-toggle-switch.html">
                                                <i className="metismenu-icon">
                                                </i>Toggle Switch
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-wysiwyg-editor.html">
                                                <i className="metismenu-icon">
                                                </i>WYSIWYG Editor
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-input-mask.html">
                                                <i className="metismenu-icon">
                                                </i>Input Mask
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-clipboard.html">
                                                <i className="metismenu-icon">
                                                </i>Clipboard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="forms-textarea-autosize.html">
                                                <i className="metismenu-icon">
                                                </i>Textarea Autosize
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="app-sidebar__heading">Charts</li>
                                <li>
                                    <a href="charts-chartjs.html">
                                        <i className="metismenu-icon pe-7s-graph2">
                                        </i>ChartJS
                                    </a>
                                </li>
                                <li>
                                    <a href="charts-apexcharts.html">
                                        <i className="metismenu-icon pe-7s-graph">
                                        </i>Apex Charts
                                    </a>
                                </li>
                                <li>
                                    <a href="charts-sparklines.html">
                                        <i className="metismenu-icon pe-7s-graph1">
                                        </i>Chart Sparklines
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="app-sidebar-overlay d-none animated fadeIn"></div>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <div className="header-mobile-wrapper">
                        <div className="app-header__logo">
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="KeroUI Admin Template" className="logo-src"></a>
                            <button type="button" className="hamburger hamburger--elastic mobile-toggle-sidebar-nav">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                            <div className="app-header__menu">
                            <span>
                                <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                    <span className="btn-icon-wrapper">
                                        <i className="fa fa-ellipsis-v fa-w-6"></i>
                                    </span>
                                </button>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="app-header">
                        <div className="page-title-heading">
                            Product Sales
                            <div className="page-title-subheading">
                                This is an example dashboard created using build-in elements and components.
                            </div>
                        </div>
                        <div className="app-header-right">
                            <div className="search-wrapper">
                                <i className="search-icon-wrapper typcn typcn-zoom-outline"></i>
                                <input type="text" placeholder="Search..."/>
                            </div>
                            <div className="header-btn-lg pr-0">
                                <div className="header-dots">
                                    <div className="dropdown">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" className="p-0 mr-2 btn btn-link">
                                            <i className="typcn typcn-th-large-outline"></i>
                                        </button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu-xl rm-pointers dropdown-menu dropdown-menu-right">
                                            <div className="dropdown-menu-header">
                                                <div className="dropdown-menu-header-inner bg-vicious-stance">
                                                    <div className="menu-header-image opacity-4" style="background-image: url('assets/images/dropdown-header/city5.jpg');"></div>
                                                    <div className="menu-header-content text-white">
                                                        <h5 className="menu-header-title">Grid Dashboard</h5>
                                                        <h6 className="menu-header-subtitle">Easy grid navigation inside dropdowns</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid-menu grid-menu-xl grid-menu-3col">
                                                <div className="no-gutters row">
                                                    <div className="col-sm-6 col-xl-4">
                                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                                            <i className="pe-7s-world icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"></i>
                                                            Automation
                                                        </button>
                                                    </div>
                                                    <div className="col-sm-6 col-xl-4">
                                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                                            <i className="pe-7s-piggy icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"> </i>
                                                            Reports
                                                        </button>
                                                    </div>
                                                    <div className="col-sm-6 col-xl-4">
                                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                                            <i className="pe-7s-config icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"> </i>
                                                            Settings
                                                        </button>
                                                    </div>
                                                    <div className="col-sm-6 col-xl-4">
                                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                                            <i className="pe-7s-browser icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"> </i>
                                                            Content
                                                        </button>
                                                    </div>
                                                    <div className="col-sm-6 col-xl-4">
                                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                                            <i className="pe-7s-hourglass icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"> </i>
                                                            Activity
                                                        </button>
                                                    </div>
                                                    <div className="col-sm-6 col-xl-4">
                                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                                            <i className="pe-7s-world icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"> </i>
                                                            Contacts
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="nav flex-column">
                                                <li className="nav-item-divider nav-item"></li>
                                                <li className="nav-item-btn text-center nav-item">
                                                    <button className="btn-shadow btn btn-primary btn-sm">Follow-ups</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <button type="button" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" className="p-0 btn btn-link">
                                            <i className="typcn typcn-bell"></i>
                                            <span className="badge badge-dot badge-dot-sm badge-danger">Notifications</span>
                                        </button>
                                        <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu-xl rm-pointers dropdown-menu dropdown-menu-right">
                                            <div className="dropdown-menu-header mb-0">
                                                <div className="dropdown-menu-header-inner bg-night-sky">
                                                    <div className="menu-header-image opacity-5" style="background-image: url('assets/images/dropdown-header/city2.jpg');"></div>
                                                    <div className="menu-header-content text-light">
                                                        <h5 className="menu-header-title">Notifications</h5>
                                                        <h6 className="menu-header-subtitle">You have <b>21</b> unread messages</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="tabs-animated-shadow tabs-animated nav nav-justified tabs-shadow-bordered p-3">
                                                <li className="nav-item">
                                                    <a role="tab" className="nav-link active" data-toggle="tab" href="#tab-messages-header">
                                                        <span>Messages</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a role="tab" className="nav-link" data-toggle="tab" href="#tab-events-header">
                                                        <span>Events</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a role="tab" className="nav-link" data-toggle="tab" href="#tab-errors-header">
                                                        <span>System</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="tab-messages-header" role="tabpanel">
                                                    <div className="scroll-area-sm">
                                                        <div className="scrollbar-container">
                                                            <div className="p-3">
                                                                <div className="notifications-box">
                                                                    <div className="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--one-column">
                                                                        <div className="vertical-timeline-item dot-danger vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-warning vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-success vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in">
                                                                                    <h4 className="timeline-title">Build the production release
                                                                                        <span className="badge badge-danger ml-2">NEW</span>
                                                                                    </h4>
                                                                                    <span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-primary vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in">
                                                                                    <h4 className="timeline-title">Something not important
                                                                                        <div className="avatar-wrapper mt-2 avatar-wrapper-overlap">
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="assets/images/avatars/1.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="assets/images/avatars/2.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="assets/images/avatars/3.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="assets/images/avatars/4.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="assets/images/avatars/5.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="assets/images/avatars/9.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="assets/images/avatars/7.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                <div className="avatar-icon"><img
                                                                                                        src="assets/images/avatars/8.jpg"
                                                                                                        alt=""/></div>
                                                                                            </div>
                                                                                            <div className="avatar-icon-wrapper avatar-icon-sm avatar-icon-add">
                                                                                                <div className="avatar-icon"><i>+</i></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </h4>
                                                                                    <span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-info vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">This dot has an info state</h4><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-danger vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-warning vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-success vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in">
                                                                                    <h4 className="timeline-title">Build the production release
                                                                                        <span className="badge badge-danger ml-2">NEW</span>
                                                                                    </h4>
                                                                                    <span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item dot-dark vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">This dot has a dark state</h4><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="tab-events-header" role="tabpanel">
                                                    <div className="scroll-area-sm">
                                                        <div className="scrollbar-container">
                                                            <div className="p-3">
                                                                <div className="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-success"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4>
                                                                                <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b className="text-danger">12:00 PM</b></p>
                                                                                <p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">Build the production release</h4>
                                                                                <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span
                                                                                        className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title text-success">Something not important</h4>
                                                                                <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-success"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4>
                                                                                <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b className="text-danger">12:00 PM</b></p>
                                                                                <p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">Build the production release</h4>
                                                                                <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span
                                                                                        className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vertical-timeline-item vertical-timeline-element">
                                                                        <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                                                                            <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title text-success">Something not important</h4>
                                                                                <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span className="vertical-timeline-element-date"></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane" id="tab-errors-header" role="tabpanel">
                                                    <div className="scroll-area-sm">
                                                        <div className="scrollbar-container">
                                                            <div className="no-results pt-3 pb-0">
                                                                <div className="swal2-icon swal2-success swal2-animate-success-icon">
                                                                    <div className="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
                                                                    <span className="swal2-success-line-tip"></span>
                                                                    <span className="swal2-success-line-long"></span>
                                                                    <div className="swal2-success-ring"></div>
                                                                    <div className="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                                                                    <div className="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                                                                </div>
                                                                <div className="results-subtitle">All caught up!</div>
                                                                <div className="results-title">There are no system errors!</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="nav flex-column">
                                                <li className="nav-item-divider nav-item"></li>
                                                <li className="nav-item-btn text-center nav-item">
                                                    <button className="btn-shadow btn-wide btn-pill btn btn-focus btn-sm">View Latest Changes</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-btn-lg pr-0">
                                <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left">
                                            <div className="btn-group">
                                                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                                                    <img width="42" className="rounded" src="assets/images/avatars/3.jpg" alt="">
                                                    <i className="fa fa-angle-down ml-2 opacity-8"></i>
                                                </a>
                                                <div tabindex="-1" role="menu" aria-hidden="true" className="rm-pointers dropdown-menu-lg dropdown-menu dropdown-menu-right">
                                                    <div className="dropdown-menu-header">
                                                        <div className="dropdown-menu-header-inner bg-info">
                                                            <div className="menu-header-image opacity-2" style="background-image: url('assets/images/dropdown-header/city1.jpg');"></div>
                                                            <div className="menu-header-content text-left">
                                                                <div className="widget-content p-0">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left mr-3">
                                                                            <img width="42" className="rounded-circle"
                                                                                 src="assets/images/avatars/3.jpg"
                                                                                 alt="">
                                                                        </div>
                                                                        <div className="widget-content-left">
                                                                            <div className="widget-heading">Minnie Betts
                                                                            </div>
                                                                            <div className="widget-subheading opacity-8">A short profile description
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right mr-2">
                                                                            <button className="btn-pill btn-shadow btn-shine btn btn-focus">Logout
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="scroll-area-xs" style="height: 150px;">
                                                        <div className="scrollbar-container ps">
                                                            <ul className="nav flex-column">
                                                                <li className="nav-item-header nav-item">Activity
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a href="javascript:void(0);" className="nav-link">Chat
                                                                        <div className="ml-auto badge badge-pill badge-info">8
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a href="javascript:void(0);" className="nav-link">Recover Password
                                                                    </a>
                                                                </li>
                                                                <li className="nav-item-header nav-item">My Account
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a href="javascript:void(0);" className="nav-link">Settings
                                                                        <div className="ml-auto badge badge-success">New
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a href="javascript:void(0);" className="nav-link">Messages
                                                                        <div className="ml-auto badge badge-warning">512
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a href="javascript:void(0);" className="nav-link">Logs
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item-divider mb-0 nav-item"></li>
                                                    </ul>
                                                    <div className="grid-menu grid-menu-2col">
                                                        <div className="no-gutters row">
                                                            <div className="col-sm-6">
                                                                <button className="btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-warning">
                                                                    <i className="pe-7s-chat icon-gradient bg-amy-crisp btn-icon-wrapper mb-2"></i>
                                                                    Message Inbox
                                                                </button>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <button className="btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-danger">
                                                                    <i className="pe-7s-ticket icon-gradient bg-love-kiss btn-icon-wrapper mb-2"></i>
                                                                    <b>Support Tickets</b>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className="nav flex-column">
                                                        <li className="nav-item-divider nav-item">
                                                        </li>
                                                        <li className="nav-item-btn text-center nav-item">
                                                            <button className="btn-wide btn btn-primary btn-sm">
                                                                Open Messages
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    </div>
                        <div className="app-header-overlay d-none animated fadeIn"></div>
                    </div>
                    <div className="app-inner-layout app-inner-layout-page">
                        <div className="app-inner-bar">
                            <div className="inner-bar-left">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link show-menu-btn">
                                            <i className="fa fa-align-left mr-2"></i>
                                            <span className="hide-text-md">Show page menu</span>
                                        </a>
                                        <a href="#" className="nav-link close-menu-btn">
                                            <i className="fa fa-align-right mr-2"></i>
                                            <span className="hide-text-md">Close page menu</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>                        <div className="inner-bar-center">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a role="tab" data-toggle="tab" className="nav-link active" href="#tab-content-0">
                                            <span>Overview</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a role="tab" data-toggle="tab" className="nav-link" href="#tab-content-1">
                                            <span>Audiences</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a role="tab" data-toggle="tab" className="nav-link" href="#tab-content-2">
                                            <span>Demographics</span>
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                           className="nav-link opacity-8">
                                            <span>More</span>
                                            <i className="fa fa-angle-down ml-1 opacity-6"></i>
                                        </a>
                                        <div tabindex="-1" role="menu" aria-hidden="true"
                                             className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link dropdown-menu">
                                            <h6 tabindex="-1" className="dropdown-header">Header</h6>
                                            <button type="button" tabindex="0" className="dropdown-item"><i
                                                    className="dropdown-icon lnr-inbox"> </i><span>Menus</span></button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i
                                                    className="dropdown-icon lnr-file-empty"> </i><span>Settings</span></button>
                                            <button type="button" tabindex="0" className="dropdown-item"><i
                                                    className="dropdown-icon lnr-book"> </i><span>Actions</span></button>
                                            <div tabindex="-1" className="dropdown-divider"></div>
                                            <div className="p-3 text-right">
                                                <button className="mr-2 btn-shadow btn-sm btn btn-link">View Details</button>
                                                <button className="mr-2 btn-shadow btn-sm btn btn-primary">Action</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="inner-bar-right">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a href="javascript:void(0);" className="nav-link open-right-drawer">
                                            <span className="hide-text-md">Show right drawer</span>
                                            <i className="fa fa-align-right ml-2"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>                    </div>
                        <div className="app-inner-layout__wrapper">
                            <div className="app-inner-layout__sidebar">
                                <div className="app-layout__sidebar-inner dropdown-menu-rounded">
                                    <div className="nav flex-column">
                                        <div className="nav-item-header text-primary nav-item">
                                            Dashboards Examples
                                        </div>
                                        <a className="dropdown-item" href="analytics-dashboard.html">Analytics</a>
                                        <a className="dropdown-item" href="management-dashboard.html">Management</a>
                                        <a className="dropdown-item" href="advertisement-dashboard.html">Advertisement</a>
                                        <a className="dropdown-item" href="index-2.html">Helpdesk</a>
                                        <a className="dropdown-item" href="monitoring-dashboard.html">Monitoring</a>
                                        <a className="dropdown-item" href="crypto-dashboard.html">Cryptocurrency</a>
                                        <a className="dropdown-item" href="pm-dashboard.html">Project Management</a>
                                        <a className="dropdown-item active" href="product-dashboard.html">Product</a>
                                        <a className="dropdown-item" href="statistics-dashboard.html">Statistics</a>
                                    </div>                            </div>
                            </div>
                            <div className="app-inner-layout__content">
                                <div className="tab-content">
                                    <div className="container-fluid">
                                        <ul className="tabs-animated-shadow tabs-animated nav nav-justified tabs-rounded-lg mb-4 p-3">
                                            <li className="nav-item">
                                                <a role="tab" className="nav-link active show" href="javascript:void(0);"
                                                   aria-selected="true">
                                                    <span>Sales</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a role="tab" className="nav-link" href="javascript:void(0);"
                                                   aria-selected="false">
                                                    <span>Activity</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a role="tab" className="nav-link" href="javascript:void(0);"
                                                   aria-selected="false">
                                                    <span>Profile</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a role="tab" className="nav-link" href="javascript:void(0);"
                                                   aria-selected="false">
                                                    <span>Accounts</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-7">
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-6">
                                                        <div className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
                                                            <div className="widget-chat-wrapper-outer">
                                                                <div className="widget-chart-content"><h6
                                                                        className="widget-subheading">
                                                                    Income</h6>
                                                                    <div className="widget-chart-flex">
                                                                        <div className="widget-numbers mb-0 w-100">
                                                                            <div className="widget-chart-flex">
                                                                                <div className="fsize-4">
                                                                                    <small className="opacity-5">$</small>
                                                                                    5,456
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                                                        <span className="text-success pl-2">+14%</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6">
                                                        <div className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
                                                            <div className="widget-chat-wrapper-outer">
                                                                <div className="widget-chart-content">
                                                                    <h6 className="widget-subheading">Expenses</h6>
                                                                    <div className="widget-chart-flex">
                                                                        <div className="widget-numbers mb-0 w-100">
                                                                            <div className="widget-chart-flex">
                                                                                <div className="fsize-4 text-danger">
                                                                                    <small className="opacity-5 text-muted">$
                                                                                    </small>
                                                                                    4,764
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                                <span className="text-danger pl-2">
                                                                    <span className="pr-1">
                                                                        <i className="fa fa-angle-up"></i>
                                                                    </span>
                                                                    8%
                                                                </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6">
                                                        <div className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
                                                            <div className="widget-chat-wrapper-outer">
                                                                <div className="widget-chart-content">
                                                                    <h6 className="widget-subheading">Spendings</h6>
                                                                    <div className="widget-chart-flex">
                                                                        <div className="widget-numbers mb-0 w-100">
                                                                            <div className="widget-chart-flex">
                                                                                <div className="fsize-4">
                                                            <span className="text-success pr-2">
                                                                <i className="fa fa-angle-down"></i>
                                                            </span>
                                                                                    <small className="opacity-5">$</small>
                                                                                    1.5M
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                                <span className="text-success pl-2">
                                                                    <span className="pr-1">
                                                                        <i className="fa fa-angle-down"></i>
                                                                    </span>
                                                                    15%
                                                                </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-6">
                                                        <div className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left card">
                                                            <div className="widget-chat-wrapper-outer">
                                                                <div className="widget-chart-content">
                                                                    <h6 className="widget-subheading">Totals</h6>
                                                                    <div className="widget-chart-flex">
                                                                        <div className="widget-numbers mb-0 w-100">
                                                                            <div className="widget-chart-flex">
                                                                                <div className="fsize-4">
                                                                                    <small className="opacity-5">$</small>
                                                                                    31,564
                                                                                </div>
                                                                                <div className="ml-auto">
                                                                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                                                        <span className="text-warning pl-2">+76%</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-5">
                                                <div className="mb-3 card">
                                                    <div className="card-body">
                                                        <div className="widget-chart widget-chart2 text-left p-0">
                                                            <div className="widget-chat-wrapper-outer">
                                                                <div className="widget-chart-content">
                                                                    <div className="widget-chart-flex">
                                                                        <div className="widget-numbers mt-0">
                                                                            <div className="widget-chart-flex">
                                                                                <div>
                                                                                    <small className="opacity-5">$</small>
                                                                                    <span>628</span>
                                                                                </div>
                                                                                <div className="widget-title ml-2 opacity-5 font-size-lg text-muted">
                                                                                    Total Expenses Today
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                                                    <div id="dashboard-sparkline-carousel-3"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 card">
                                            <div className="tabs-lg-alternate card-header">
                                                <ul className="nav nav-justified">
                                                    <li className="nav-item">
                                                        <a href="#tab-minimal-1" data-toggle="tab"
                                                           className="nav-link minimal-tab-btn-1">
                                                            <div className="widget-number"><span>$15,065</span></div>
                                                            <div className="tab-subheading">
                                                                <span className="pr-2 opactiy-6">
                                                                    <i className="fa fa-comment-dots"></i>
                                                                </span>
                                                                Totals
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#tab-minimal-2" data-toggle="tab"
                                                           className="nav-link active minimal-tab-btn-2">
                                                            <div className="widget-number">
                                                                <span className="pr-2 text-success">
                                                                    <i className="fa fa-angle-up"></i>
                                                                </span>
                                                                <span>4531</span>
                                                            </div>
                                                            <div className="tab-subheading">Products</div>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#tab-minimal-3" data-toggle="tab"
                                                           className="nav-link minimal-tab-btn-3">
                                                            <div className="widget-number text-danger">
                                                                <span>$6,784.0</span>
                                                            </div>
                                                            <div className="tab-subheading">
                                                                <span className="pr-2 opactiy-6">
                                                                    <i className="fa fa-bullhorn"></i>
                                                                </span>
                                                                Income
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="tab-content">
                                                <div className="tab-pane" id="tab-minimal-1">
                                                    <div className="card-body">
                                                        <div id="chart-combined-tab"></div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade active show" id="tab-minimal-2">
                                                    <div className="card-body">
                                                        <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                                            <div id="chart-apex-negative"></div>
                                                        </div>
                                                        <h5 className="card-title">Target Sales</h5>
                                                        <div className="mt-3 row">
                                                            <div className="col-sm-12 col-md-4">
                                                                <div className="widget-content p-0">
                                                                    <div className="widget-content-outer">
                                                                        <div className="widget-content-wrapper">
                                                                            <div className="widget-content-left">
                                                                                <div className="widget-numbers text-dark">65%
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-progress-wrapper mt-1">
                                                                            <div className="progress-bar-xs progress-bar-animated-alt progress">
                                                                                <div className="progress-bar bg-info"
                                                                                     role="progressbar" aria-valuenow="65"
                                                                                     aria-valuemin="0" aria-valuemax="100"
                                                                                     style="width: 65%;"></div>
                                                                            </div>
                                                                            <div className="progress-sub-label">
                                                                                <div className="sub-label-left font-size-md">
                                                                                    Sales
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-md-4">
                                                                <div className="widget-content p-0">
                                                                    <div className="widget-content-outer">
                                                                        <div className="widget-content-wrapper">
                                                                            <div className="widget-content-left">
                                                                                <div className="widget-numbers text-dark">22%
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-progress-wrapper mt-1">
                                                                            <div className="progress-bar-xs progress-bar-animated-alt progress">
                                                                                <div className="progress-bar bg-warning"
                                                                                     role="progressbar" aria-valuenow="22"
                                                                                     aria-valuemin="0" aria-valuemax="100"
                                                                                     style="width: 22%;"></div>
                                                                            </div>
                                                                            <div className="progress-sub-label">
                                                                                <div className="sub-label-left font-size-md">
                                                                                    Profiles
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-md-4">
                                                                <div className="widget-content p-0">
                                                                    <div className="widget-content-outer">
                                                                        <div className="widget-content-wrapper">
                                                                            <div className="widget-content-left">
                                                                                <div className="widget-numbers text-dark">83%
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-progress-wrapper mt-1">
                                                                            <div className="progress-bar-xs progress-bar-animated-alt progress">
                                                                                <div className="progress-bar bg-success"
                                                                                     role="progressbar" aria-valuenow="83"
                                                                                     aria-valuemin="0" aria-valuemax="100"
                                                                                     style="width: 83%;"></div>
                                                                            </div>
                                                                            <div className="progress-sub-label">
                                                                                <div className="sub-label-left font-size-md">
                                                                                    Tickets
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab-minimal-3">
                                                    <div className="rm-border card-header">
                                                        <div>
                                                            <h5 className="menu-header-title text-capitalize text-primary">
                                                                Income
                                                                Report</h5>
                                                        </div>
                                                        <div className="btn-actions-pane-right text-capitalize">
                                                            <div className="btn-group dropdown">
                                                                <button type="button" data-toggle="dropdown"
                                                                        aria-haspopup="true" aria-expanded="false"
                                                                        className="btn-wide mr-1 dropdown-toggle btn btn-outline-focus btn-sm">
                                                                    Options
                                                                </button>
                                                                <div tabindex="-1" role="menu" aria-hidden="true"
                                                                     className="dropdown-menu-lg rm-pointers dropdown-menu dropdown-menu-right">
                                                                    <div className="dropdown-menu-header">
                                                                        <div className="dropdown-menu-header-inner bg-primary">
                                                                            <div className="menu-header-image"
                                                                                 style="background-image: url('assets/images/dropdown-header/abstract2.jpg');"></div>
                                                                            <div className="menu-header-content">
                                                                                <div><h5 className="menu-header-title">
                                                                                    Settings</h5>
                                                                                    <h6 className="menu-header-subtitle">Example
                                                                                        Dropdown Menu</h6></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="scroll-area-xs">
                                                                        <div className="scrollbar-container">
                                                                            <ul className="nav flex-column">
                                                                                <li className="nav-item-header nav-item">
                                                                                    Activity
                                                                                </li>
                                                                                <li className="nav-item"><a
                                                                                        href="javascript:void(0);"
                                                                                        className="nav-link">Chat
                                                                                    <div className="ml-auto badge badge-pill badge-info">
                                                                                        8
                                                                                    </div>
                                                                                </a></li>
                                                                                <li className="nav-item"><a
                                                                                        href="javascript:void(0);"
                                                                                        className="nav-link">Recover
                                                                                    Password</a>
                                                                                </li>
                                                                                <li className="nav-item-header nav-item">My
                                                                                    Account
                                                                                </li>
                                                                                <li className="nav-item"><a
                                                                                        href="javascript:void(0);"
                                                                                        className="nav-link">Settings
                                                                                    <div className="ml-auto badge badge-success">
                                                                                        New
                                                                                    </div>
                                                                                </a></li>
                                                                                <li className="nav-item"><a
                                                                                        href="javascript:void(0);"
                                                                                        className="nav-link">Messages
                                                                                    <div className="ml-auto badge badge-warning">
                                                                                        512
                                                                                    </div>
                                                                                </a></li>
                                                                                <li className="nav-item"><a
                                                                                        href="javascript:void(0);"
                                                                                        className="nav-link">Logs</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body p-2">
                                                        <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                                            <div style="height: 274px;">
                                                                <div id="chart-combined-tab-3"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="border-top bg-light card-header">
                                                        <div className="actions-icon-btn mx-auto">
                                                            <div>
                                                                <div role="group" className="btn-group-lg btn-group nav">
                                                                    <button type="button" data-toggle="tab"
                                                                            href="#tab-content-income"
                                                                            className="btn-pill pl-3 active btn btn-focus">
                                                                        Income
                                                                    </button>
                                                                    <button type="button" data-toggle="tab"
                                                                            href="#tab-content-expenses"
                                                                            className="btn-pill pr-3  btn btn-focus">Expenses
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="tab-content">
                                                            <div className="tab-pane active fade show" id="tab-content-income"
                                                                 role="tabpanel">
                                                                <h5 className="menu-header-title">Target Sales</h5>
                                                                <h6 className="menu-header-subtitle opacity-6">Total performance
                                                                    for
                                                                    this month</h6>
                                                                <div className="mt-3 row">
                                                                    <div className="col-sm-12 col-md-6">
                                                                        <div className="card-border mb-sm-3 mb-md-0 border-light no-shadow card">
                                                                            <div className="widget-content">
                                                                                <div className="widget-content-outer">
                                                                                    <div className="widget-content-wrapper">
                                                                                        <div className="widget-content-left">
                                                                                            <div className="widget-heading">
                                                                                                Orders
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="widget-content-right">
                                                                                            <div className="widget-numbers line-height-1 text-primary">
                                                                                                <span>366</span></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="widget-progress-wrapper mt-1">
                                                                                        <div className="progress-bar-xs progress">
                                                                                            <div className="progress-bar bg-success"
                                                                                                 role="progressbar"
                                                                                                 aria-valuenow="76"
                                                                                                 aria-valuemin="0"
                                                                                                 aria-valuemax="100"
                                                                                                 style="width: 76%;"></div>
                                                                                        </div>
                                                                                        <div className="progress-sub-label">
                                                                                            <div className="sub-label-left">
                                                                                                Monthly
                                                                                                Target
                                                                                            </div>
                                                                                            <div className="sub-label-right">
                                                                                                100%
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12 col-md-6">
                                                                        <div className="card-border border-light no-shadow card">
                                                                            <div className="widget-content">
                                                                                <div className="widget-content-outer">
                                                                                    <div className="widget-content-wrapper">
                                                                                        <div className="widget-content-left">
                                                                                            <div className="widget-heading">
                                                                                                Income
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="widget-content-right">
                                                                                            <div className="widget-numbers line-height-1 text-success">
                                                                                                <span>$2797</span></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="widget-progress-wrapper mt-1">
                                                                                        <div className="progress-bar-xs progress-bar-animated progress">
                                                                                            <div className="progress-bar bg-danger"
                                                                                                 role="progressbar"
                                                                                                 aria-valuenow="23"
                                                                                                 aria-valuemin="0"
                                                                                                 aria-valuemax="100"
                                                                                                 style="width: 23%;"></div>
                                                                                        </div>
                                                                                        <div className="progress-sub-label">
                                                                                            <div className="sub-label-left">
                                                                                                Monthly
                                                                                                Target
                                                                                            </div>
                                                                                            <div className="sub-label-right">
                                                                                                100%
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="tab-content-expenses"
                                                                 role="tabpanel">
                                                                <h5 className="menu-header-title">Tabbed Content</h5>
                                                                <h6 className="menu-header-subtitle opacity-6">Example of
                                                                    various
                                                                    options built with KeroUI</h6>
                                                                <div className="mt-3 row">
                                                                    <div className="col-sm-12 col-md-6">
                                                                        <div className="card-hover-shadow-2x mb-sm-3 mb-md-0 widget-chart widget-chart2 bg-premium-dark text-left card">
                                                                            <div className="widget-chart-content text-white">
                                                                                <div className="widget-chart-flex">
                                                                                    <div className="widget-title">Sales</div>
                                                                                    <div className="widget-subtitle opacity-7">
                                                                                        Monthly Goals
                                                                                    </div>
                                                                                </div>
                                                                                <div className="widget-chart-flex">
                                                                                    <div className="widget-numbers text-success">
                                                                                        <small>$</small>
                                                                                        976
                                                                                        <small className="opacity-8 pl-2">
                                                                                            <i className="fa fa-angle-up"></i>
                                                                                        </small>
                                                                                    </div>
                                                                                    <div className="widget-description ml-auto opacity-7">
                                                                                        <i className="fa fa-angle-up"></i>
                                                                                        <span className="pl-1">175%</span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12 col-md-6">
                                                                        <div className="card-hover-shadow-2x widget-chart widget-chart2 bg-premium-dark text-left card">
                                                                            <div className="widget-chart-content text-white">
                                                                                <div className="widget-chart-flex">
                                                                                    <div className="widget-title">Clients</div>
                                                                                    <div className="widget-subtitle text-warning">
                                                                                        Returning
                                                                                    </div>
                                                                                </div>
                                                                                <div className="widget-chart-flex">
                                                                                    <div className="widget-numbers text-warning">
                                                                                        84
                                                                                        <small>%</small>
                                                                                        <small className="opacity-8 pl-2">
                                                                                            <i className="fa fa-angle-down"></i>
                                                                                        </small>
                                                                                    </div>
                                                                                    <div className="widget-description ml-auto text-warning">
                                                                                        <span className="pr-1">45</span>
                                                                                        <i className="fa fa-angle-up"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mbg-3 h-auto pl-0 pr-0 bg-transparent no-border card-header">
                                            <div className="card-header-title fsize-2 text-capitalize font-weight-normal">Target
                                                Section
                                            </div>
                                            <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                                                <button className="btn btn-link btn-sm">View Details</button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-lg-3">
                                                <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                                    <div className="widget-content p-0 w-100">
                                                        <div className="widget-content-outer">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left pr-2 fsize-1">
                                                                    <div className="widget-numbers mt-0 fsize-3 text-danger">71%
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-right w-100">
                                                                    <div className="progress-bar-xs progress">
                                                                        <div className="progress-bar bg-danger"
                                                                             role="progressbar"
                                                                             aria-valuenow="71" aria-valuemin="0"
                                                                             aria-valuemax="100" style="width: 71%;"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left fsize-1">
                                                                <div className="text-muted opacity-6">Income Target</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <div className="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                                                    <div className="widget-content p-0 w-100">
                                                        <div className="widget-content-outer">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left pr-2 fsize-1">
                                                                    <div className="widget-numbers mt-0 fsize-3 text-success">
                                                                        54%
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-right w-100">
                                                                    <div className="progress-bar-xs progress">
                                                                        <div className="progress-bar bg-success"
                                                                             role="progressbar"
                                                                             aria-valuenow="54" aria-valuemin="0"
                                                                             aria-valuemax="100" style="width: 54%;"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left fsize-1">
                                                                <div className="text-muted opacity-6">Expenses Target</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <div className="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
                                                    <div className="widget-content p-0 w-100">
                                                        <div className="widget-content-outer">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left pr-2 fsize-1">
                                                                    <div className="widget-numbers mt-0 fsize-3 text-warning">
                                                                        32%
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-right w-100">
                                                                    <div className="progress-bar-xs progress">
                                                                        <div className="progress-bar bg-warning"
                                                                             role="progressbar"
                                                                             aria-valuenow="32" aria-valuemin="0"
                                                                             aria-valuemax="100" style="width: 32%;"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left fsize-1">
                                                                <div className="text-muted opacity-6">Spendings Target</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <div className="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                                                    <div className="widget-content p-0 w-100">
                                                        <div className="widget-content-outer">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left pr-2 fsize-1">
                                                                    <div className="widget-numbers mt-0 fsize-3 text-info">89%
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-right w-100">
                                                                    <div className="progress-bar-xs progress">
                                                                        <div className="progress-bar bg-info" role="progressbar"
                                                                             aria-valuenow="89" aria-valuemin="0"
                                                                             aria-valuemax="100" style="width: 89%;"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left fsize-1">
                                                                <div className="text-muted opacity-6">Totals Target</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-card mb-3 card">
                                            <div className="card-header">
                                                <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                                    Company Agents Status
                                                </div>
                                                <div className="btn-actions-pane-right">
                                                    <button type="button" id="PopoverCustomT-1"
                                                            className="btn-icon btn-wide btn-outline-2x btn btn-outline-focus btn-sm">
                                                        Actions Menu
                                                        <span className="pl-2 align-middle opactiy-7">
                                    <i className="fa fa-angle-down"></i>
                                </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="align-middle text-truncate mb-0 table table-borderless table-hover">
                                                    <thead>
                                                    <tr>
                                                        <th className="text-center">#</th>
                                                        <th className="text-center">Avatar</th>
                                                        <th className="text-center">Name</th>
                                                        <th className="text-center">Company</th>
                                                        <th className="text-center">Status</th>
                                                        <th className="text-center">Due Date</th>
                                                        <th className="text-center">Target Achievement</th>
                                                        <th className="text-center">Actions</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="text-center text-muted" style="width: 80px;">#54</td>
                                                        <td className="text-center" style="width: 80px;">
                                                            <img width="40" className="rounded-circle"
                                                                 src="assets/images/avatars/1.jpg" alt="">
                                                        </td>
                                                        <td className="text-center"><a href="javascript:void(0)">Juan C.
                                                            Cargill</a>
                                                        </td>
                                                        <td className="text-center"><a href="javascript:void(0)">Micro
                                                            Electronics</a></td>
                                                        <td className="text-center">
                                                            <div className="badge badge-pill badge-danger">Canceled</div>
                                                        </td>
                                                        <td className="text-center">
                                    <span className="pr-2 opacity-6">
                                        <i className="fa fa-business-time"></i>
                                    </span>
                                                            12 Dec
                                                        </td>
                                                        <td className="text-center" style="width: 200px;">
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-outer">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left pr-2">
                                                                            <div className="widget-numbers fsize-1 text-danger">
                                                                                71%
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right w-100">
                                                                            <div className="progress-bar-xs progress">
                                                                                <div className="progress-bar bg-danger"
                                                                                     role="progressbar" aria-valuenow="71"
                                                                                     aria-valuemin="0" aria-valuemax="100"
                                                                                     style="width: 71%;"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <div role="group" className="btn-group-sm btn-group">
                                                                <button className="btn-shadow btn btn-primary">Hire</button>
                                                                <button className="btn-shadow btn btn-primary">Fire</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center text-muted" style="width: 80px;">#55</td>
                                                        <td className="text-center" style="width: 80px;">
                                                            <img width="40" className="rounded-circle"
                                                                 src="assets/images/avatars/2.jpg" alt="">
                                                        </td>
                                                        <td className="text-center"><a href="javascript:void(0)">Johnathan
                                                            Phelan</a></td>
                                                        <td className="text-center"><a href="javascript:void(0)">Hatchworks</a>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="badge badge-pill badge-info">On Hold</div>
                                                        </td>
                                                        <td className="text-center">
                                    <span className="pr-2 opacity-6">
                                        <i className="fa fa-business-time"></i>
                                    </span>
                                                            12 Dec
                                                        </td>
                                                        <td className="text-center" style="width: 200px;">
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-outer">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left pr-2">
                                                                            <div className="widget-numbers fsize-1 text-warning">
                                                                                54%
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right w-100">
                                                                            <div className="progress-bar-xs progress">
                                                                                <div className="progress-bar bg-warning"
                                                                                     role="progressbar" aria-valuenow="54"
                                                                                     aria-valuemin="0" aria-valuemax="100"
                                                                                     style="width: 54%;"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <div role="group" className="btn-group-sm btn-group">
                                                                <button className="btn-shadow btn btn-primary">Hire</button>
                                                                <button className="btn-shadow btn btn-primary">Fire</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center text-muted" style="width: 80px;">#56</td>
                                                        <td className="text-center" style="width: 80px;">
                                                            <img width="40" className="rounded-circle"
                                                                 src="assets/images/avatars/3.jpg" alt="">
                                                        </td>
                                                        <td className="text-center"><a href="javascript:void(0)">Darrell
                                                            Lowe</a>
                                                        </td>
                                                        <td className="text-center"><a href="javascript:void(0)">Riddle
                                                            Electronics</a></td>
                                                        <td className="text-center">
                                                            <div className="badge badge-pill badge-warning">In Progress</div>
                                                        </td>
                                                        <td className="text-center">
                                    <span className="pr-2 opacity-6">
                                        <i className="fa fa-business-time"></i>
                                    </span>
                                                            12 Dec
                                                        </td>
                                                        <td className="text-center" style="width: 200px;">
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-outer">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left pr-2">
                                                                            <div className="widget-numbers fsize-1 text-success">
                                                                                97%
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right w-100">
                                                                            <div className="progress-bar-xs progress">
                                                                                <div className="progress-bar bg-success"
                                                                                     role="progressbar" aria-valuenow="97"
                                                                                     aria-valuemin="0" aria-valuemax="100"
                                                                                     style="width: 97%;"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <div role="group" className="btn-group-sm btn-group">
                                                                <button className="btn-shadow btn btn-primary">Hire</button>
                                                                <button className="btn-shadow btn btn-primary">Fire</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center text-muted" style="width: 80px;">#56</td>
                                                        <td className="text-center" style="width: 80px;">
                                                            <img width="40" className="rounded-circle"
                                                                 src="assets/images/avatars/4.jpg" alt="">
                                                        </td>
                                                        <td className="text-center"><a href="javascript:void(0)">George T.
                                                            Cottrell</a></td>
                                                        <td className="text-center"><a href="javascript:void(0)">Pixelcloud</a>
                                                        </td>
                                                        <td className="text-center">
                                                            <div className="badge badge-pill badge-success">Completed</div>
                                                        </td>
                                                        <td className="text-center">
                                    <span className="pr-2 opacity-6">
                                        <i className="fa fa-business-time"></i>
                                    </span>
                                                            12 Dec
                                                        </td>
                                                        <td className="text-center" style="width: 200px;">
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-outer">
                                                                    <div className="widget-content-wrapper">
                                                                        <div className="widget-content-left pr-2">
                                                                            <div className="widget-numbers fsize-1 text-info">
                                                                                88%
                                                                            </div>
                                                                        </div>
                                                                        <div className="widget-content-right w-100">
                                                                            <div className="progress-bar-xs progress">
                                                                                <div className="progress-bar bg-info"
                                                                                     role="progressbar" aria-valuenow="88"
                                                                                     aria-valuemin="0" aria-valuemax="100"
                                                                                     style="width: 88%;"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <div role="group" className="btn-group-sm btn-group">
                                                                <button className="btn-shadow btn btn-primary">Hire</button>
                                                                <button className="btn-shadow btn btn-primary">Fire</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="d-block p-4 text-center card-footer">
                                                <button className="btn-pill btn-shadow btn-wide fsize-1 btn btn-dark btn-lg">
                            <span className="mr-2 opacity-7">
                                <i className="fa fa-cog fa-spin"></i>
                            </span>
                                                    <span className="mr-1">View Complete Report</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-lg-6">
                                                <div className="mb-3 card">
                                                    <div className="card-header-tab card-header">
                                                        <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                                            Daily Sales
                                                        </div>
                                                        <div className="btn-actions-pane-right text-capitalize">
                                                            <button className="btn-wide btn-outline-2x btn btn-outline-focus btn-sm">
                                                                View All
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div id="bar-vertical-candle"></div>
                                                    </div>
                                                    <div className="p-0 d-block card-footer">
                                                        <div className="grid-menu grid-menu-2col">
                                                            <div className="no-gutters row">
                                                                <div className="p-2 col-sm-6">
                                                                    <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                                                                        <i className="lnr-apartment text-dark opacity-7 btn-icon-wrapper mb-2"> </i>
                                                                        Overview
                                                                    </button>
                                                                </div>
                                                                <div className="p-2 col-sm-6">
                                                                    <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                                                                        <i className="lnr-database text-dark opacity-7 btn-icon-wrapper mb-2"> </i>
                                                                        Support
                                                                    </button>
                                                                </div>
                                                                <div className="p-2 col-sm-6">
                                                                    <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                                                                        <i className="lnr-printer text-dark opacity-7 btn-icon-wrapper mb-2"> </i>
                                                                        Activities
                                                                    </button>
                                                                </div>
                                                                <div className="p-2 col-sm-6">
                                                                    <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-dark">
                                                                        <i className="lnr-store text-dark opacity-7 btn-icon-wrapper mb-2"> </i>
                                                                        Marketing
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-lg-6">
                                                <div className="mb-3 card">
                                                    <div className="card-header-tab card-header">
                                                        <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                                            Total Expenses
                                                        </div>
                                                        <div className="btn-actions-pane-right text-capitalize">
                                                            <button className="btn-wide btn-outline-2x btn btn-outline-primary btn-sm">
                                                                View All
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div id="chart-col-2"></div>
                                                    </div>
                                                    <div className="p-0 d-block card-footer">
                                                        <div className="grid-menu grid-menu-2col">
                                                            <div className="no-gutters row">
                                                                <div className="p-2 col-sm-6">
                                                                    <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-success">
                                                                        <i className="lnr-lighter text-success opacity-7 btn-icon-wrapper mb-2"> </i>
                                                                        Accounts
                                                                    </button>
                                                                </div>
                                                                <div className="p-2 col-sm-6">
                                                                    <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-warning">
                                                                        <i className="lnr-construction text-warning opacity-7 btn-icon-wrapper mb-2"> </i>
                                                                        Contacts
                                                                    </button>
                                                                </div>
                                                                <div className="p-2 col-sm-6">
                                                                    <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-info">
                                                                        <i className="lnr-bus text-info opacity-7 btn-icon-wrapper mb-2"> </i>
                                                                        Products
                                                                    </button>
                                                                </div>
                                                                <div className="p-2 col-sm-6">
                                                                    <button className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-alternate">
                                                                        <i className="lnr-gift text-alternate opacity-7 btn-icon-wrapper mb-2"> </i>
                                                                        Services
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-wrapper-footer">
                    <div className="app-footer">
                        <div className="">
                            <div className="app-footer__inner">
                                <div className="app-footer-left">
                                    <div className="footer-dots">
                                        <div className="dropdown">
                                            <a aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" className="dot-btn-wrapper">
                                                <i className="dot-btn-icon typcn typcn-warning-outline text-warning"></i>
                                                <div className="badge badge-dot badge-abs badge-dot-sm badge-danger">Danger</div>
                                            </a>
                                            <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu-xl rm-pointers dropdown-menu">
                                                <div className="dropdown-menu-header mb-0">
                                                    <div className="dropdown-menu-header-inner bg-deep-blue">
                                                        <div className="menu-header-image opacity-1" style="background-image: url('assets/images/dropdown-header/city3.jpg');"></div>
                                                        <div className="menu-header-content text-dark">
                                                            <h5 className="menu-header-title">Notifications</h5>
                                                            <h6 className="menu-header-subtitle">You have <b>21</b> unread messages</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="tabs-animated-shadow tabs-animated nav nav-justified tabs-shadow-bordered p-3">
                                                    <li className="nav-item">
                                                        <a role="tab" className="nav-link active" data-toggle="tab" href="#tab-messages-header1">
                                                            <span>Messages</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a role="tab" className="nav-link" data-toggle="tab" href="#tab-events-header1">
                                                            <span>Events</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a role="tab" className="nav-link" data-toggle="tab" href="#tab-errors-header1">
                                                            <span>System</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content">
                                                    <div className="tab-pane active" id="tab-messages-header1" role="tabpanel">
                                                        <div className="scroll-area-sm">
                                                            <div className="scrollbar-container">
                                                                <div className="p-3">
                                                                    <div className="notifications-box">
                                                                        <div className="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--one-column">
                                                                            <div className="vertical-timeline-item dot-danger vertical-timeline-element">
                                                                                <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                    <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4><span className="vertical-timeline-element-date"></span></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="vertical-timeline-item dot-warning vertical-timeline-element">
                                                                                <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                    <div className="vertical-timeline-element-content bounce-in"><p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="vertical-timeline-item dot-success vertical-timeline-element">
                                                                                <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                    <div className="vertical-timeline-element-content bounce-in">
                                                                                        <h4 className="timeline-title">Build the production release
                                                                                            <span className="badge badge-danger ml-2">NEW</span>
                                                                                        </h4>
                                                                                        <span className="vertical-timeline-element-date"></span></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="vertical-timeline-item dot-primary vertical-timeline-element">
                                                                                <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                    <div className="vertical-timeline-element-content bounce-in">
                                                                                        <h4 className="timeline-title">Something not important
                                                                                            <div className="avatar-wrapper mt-2 avatar-wrapper-overlap">
                                                                                                <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                    <div className="avatar-icon"><img
                                                                                                            src="assets/images/avatars/1.jpg"
                                                                                                            alt=""></div>
                                                                                                </div>
                                                                                                <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                    <div className="avatar-icon"><img
                                                                                                            src="assets/images/avatars/2.jpg"
                                                                                                            alt=""></div>
                                                                                                </div>
                                                                                                <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                    <div className="avatar-icon"><img
                                                                                                            src="assets/images/avatars/3.jpg"
                                                                                                            alt=""></div>
                                                                                                </div>
                                                                                                <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                    <div className="avatar-icon"><img
                                                                                                            src="assets/images/avatars/4.jpg"
                                                                                                            alt=""></div>
                                                                                                </div>
                                                                                                <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                    <div className="avatar-icon"><img
                                                                                                            src="assets/images/avatars/5.jpg"
                                                                                                            alt=""></div>
                                                                                                </div>
                                                                                                <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                    <div className="avatar-icon"><img
                                                                                                            src="assets/images/avatars/9.jpg"
                                                                                                            alt=""></div>
                                                                                                </div>
                                                                                                <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                    <div className="avatar-icon"><img
                                                                                                            src="assets/images/avatars/7.jpg"
                                                                                                            alt=""></div>
                                                                                                </div>
                                                                                                <div className="avatar-icon-wrapper avatar-icon-sm">
                                                                                                    <div className="avatar-icon"><img
                                                                                                            src="assets/images/avatars/8.jpg"
                                                                                                            alt=""></div>
                                                                                                </div>
                                                                                                <div className="avatar-icon-wrapper avatar-icon-sm avatar-icon-add">
                                                                                                    <div className="avatar-icon"><i>+</i></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </h4>
                                                                                        <span className="vertical-timeline-element-date"></span></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="vertical-timeline-item dot-info vertical-timeline-element">
                                                                                <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                    <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">This dot has an info state</h4><span className="vertical-timeline-element-date"></span></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="vertical-timeline-item dot-danger vertical-timeline-element">
                                                                                <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                    <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4><span className="vertical-timeline-element-date"></span></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="vertical-timeline-item dot-warning vertical-timeline-element">
                                                                                <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                    <div className="vertical-timeline-element-content bounce-in"><p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="vertical-timeline-item dot-success vertical-timeline-element">
                                                                                <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                    <div className="vertical-timeline-element-content bounce-in">
                                                                                        <h4 className="timeline-title">Build the production release
                                                                                            <span className="badge badge-danger ml-2">NEW</span>
                                                                                        </h4>
                                                                                        <span className="vertical-timeline-element-date"></span></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="vertical-timeline-item dot-dark vertical-timeline-element">
                                                                                <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                                                                    <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">This dot has a dark state</h4><span className="vertical-timeline-element-date"></span></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="tab-events-header1" role="tabpanel">
                                                        <div className="scroll-area-sm">
                                                            <div className="scrollbar-container">
                                                                <div className="p-3">
                                                                    <div className="vertical-without-time vertical-timeline vertical-timeline--animate vertical-timeline--one-column">
                                                                        <div className="vertical-timeline-item vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-success"> </i></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4>
                                                                                    <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b className="text-danger">12:00 PM</b></p>
                                                                                    <p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">Build the production release</h4>
                                                                                    <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span
                                                                                            className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title text-success">Something not important</h4>
                                                                                    <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-success"> </i></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4>
                                                                                    <p>Lorem ipsum dolor sic amet, today at <a href="javascript:void(0);">12:00 PM</a></p><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-warning"> </i></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><p>Another meeting today, at <b className="text-danger">12:00 PM</b></p>
                                                                                    <p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-danger"> </i></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">Build the production release</h4>
                                                                                    <p>Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna elit enim at minim veniam quis nostrud</p><span
                                                                                            className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="vertical-timeline-item vertical-timeline-element">
                                                                            <div><span className="vertical-timeline-element-icon bounce-in"><i className="badge badge-dot badge-dot-xl badge-primary"> </i></span>
                                                                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title text-success">Something not important</h4>
                                                                                    <p>Lorem ipsum dolor sit amit,consectetur elit enim at minim veniam quis nostrud</p><span className="vertical-timeline-element-date"></span></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="tab-errors-header1" role="tabpanel">
                                                        <div className="scroll-area-sm">
                                                            <div className="scrollbar-container">
                                                                <div className="no-results pt-3 pb-0">
                                                                    <div className="swal2-icon swal2-success swal2-animate-success-icon">
                                                                        <div className="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
                                                                        <span className="swal2-success-line-tip"></span>
                                                                        <span className="swal2-success-line-long"></span>
                                                                        <div className="swal2-success-ring"></div>
                                                                        <div className="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                                                                        <div className="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                                                                    </div>
                                                                    <div className="results-subtitle">All caught up!</div>
                                                                    <div className="results-title">There are no system errors!</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="nav flex-column">
                                                    <li className="nav-item-divider nav-item"></li>
                                                    <li className="nav-item-btn text-center nav-item">
                                                        <button className="btn-shadow btn-wide btn-pill btn btn-focus btn-sm">View Latest Changes</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="dots-separator"></div>
                                        <div className="dropdown">
                                            <a className="dot-btn-wrapper dd-chart-btn-2" aria-haspopup="true" data-toggle="dropdown" aria-expanded="false">
                                                <i className="dot-btn-icon typcn typcn-chart-bar-outline text-danger"></i>
                                                <div className="badge badge-dot badge-abs badge-dot-sm badge-warning">Warning</div>
                                            </a>
                                            <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu-xl rm-pointers dropdown-menu">
                                                <div className="dropdown-menu-header">
                                                    <div className="dropdown-menu-header-inner bg-premium-dark">
                                                        <div className="menu-header-image" style="background-image: url('assets/images/dropdown-header/abstract4.jpg');"></div>
                                                        <div className="menu-header-content text-white">
                                                            <h5 className="menu-header-title">Users Online
                                                            </h5>
                                                            <h6 className="menu-header-subtitle">Recent Account Activity Overview
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-chart">
                                                    <div className="widget-chart-content">
                                                        <div className="icon-wrapper rounded-circle">
                                                            <div className="icon-wrapper-bg opacity-9 bg-focus">
                                                            </div>
                                                            <i className="lnr-users text-white">
                                                            </i>
                                                        </div>
                                                        <div className="widget-numbers">
                                                            <span>344k</span>
                                                        </div>
                                                        <div className="widget-subheading pt-2">
                                                            Profile views since last login
                                                        </div>
                                                        <div className="widget-description text-danger">
                                                        <span className="pr-1">
                                                            <span>176%</span>
                                                        </span>
                                                            <i className="fa fa-arrow-left"></i>
                                                        </div>
                                                    </div>
                                                    <div className="widget-chart-wrapper">
                                                        <div id="dashboard-sparkline-carousel-4-pop"></div>
                                                    </div>
                                                </div>
                                                <ul className="nav flex-column">
                                                    <li className="nav-item-divider mt-0 nav-item">
                                                    </li>
                                                    <li className="nav-item-btn text-center nav-item">
                                                        <button className="btn-shine btn-wide btn-pill btn btn-warning btn-sm">
                                                            <i className="fa fa-cog fa-spin mr-2">
                                                            </i>
                                                            View Details
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                
                                    </div>
                                </div>
                                <div className="app-footer-right">
                                    <ul className="header-megamenu nav">
                                        <li className="nav-item">
                                            <a data-placement="top" rel="popover-focus" data-offset="300" data-toggle="popover-custom" className="nav-link">
                                                Footer Menu
                                                <div className="badge badge-success ml-0 ml-1">
                                                    <small>Old</small>
                                                </div>
                                                <i className="fa fa-angle-up ml-2 opacity-8"></i>
                                            </a>
                                            <div className="rm-max-width rm-pointers">
                                                <div className="d-none popover-custom-content">
                                                    <div className="dropdown-mega-menu dropdown-mega-menu-sm">
                                                        <div className="grid-menu grid-menu-2col">
                                                            <div className="no-gutters row">
                                                                <div className="col-sm-6 col-xl-6">
                                                                    <ul className="nav flex-column">
                                                                        <li className="nav-item-header nav-item">Overview</li>
                                                                        <li className="nav-item"><a href="javascript:void(0);" className="nav-link"><i className="nav-link-icon lnr-inbox"> </i><span>Contacts</span></a></li>
                                                                        <li className="nav-item"><a href="javascript:void(0);" className="nav-link"><i className="nav-link-icon lnr-book"> </i><span>Incidents</span>
                                                                            <div className="ml-auto badge badge-pill badge-danger">5</div>
                                                                        </a></li>
                                                                        <li className="nav-item"><a href="javascript:void(0);" className="nav-link"><i className="nav-link-icon lnr-picture"> </i><span>Companies</span></a></li>
                                                                        <li className="nav-item"><a disabled="" href="javascript:void(0);" className="nav-link disabled"><i className="nav-link-icon lnr-file-empty"> </i><span>Dashboards</span></a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-sm-6 col-xl-6">
                                                                    <ul className="nav flex-column">
                                                                        <li className="nav-item-header nav-item">Sales &amp; Marketing</li>
                                                                        <li className="nav-item"><a href="javascript:void(0);" className="nav-link">Queues</a></li>
                                                                        <li className="nav-item"><a href="javascript:void(0);" className="nav-link">Resource Groups</a></li>
                                                                        <li className="nav-item"><a href="javascript:void(0);" className="nav-link">Goal Metrics
                                                                            <div className="ml-auto badge badge-warning">3</div>
                                                                        </a></li>
                                                                        <li className="nav-item"><a href="javascript:void(0);" className="nav-link">Campaigns</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div className="ui-theme-settings">
        <button type="button" id="TooltipDemo" className="btn-open-options btn btn-outline-2x btn-outline-focus">
            <i className="fa fa-sync-alt icon-anim-pulse fa-2x"></i>
        </button>
        <div className="theme-settings__inner">
            <div className="scrollbar-container">
                <div className="theme-settings__options-wrapper">
                    <h3 className="themeoptions-heading">Layout Options
                    </h3>
                    <div className="p-3">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left mr-3">
                                            <div className="switch has-switch switch-container-class" data-className="app-sidebar-full">
                                                <div className="switch-animate switch-off">
                                                    <input type="checkbox" data-toggle="toggle" data-onstyle="success"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-content-left">
                                            <div className="widget-heading">Full Sidebar
                                            </div>
                                            <div className="widget-subheading">Removes sidebar layout spacing.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left mr-3">
                                            <div className="switch has-switch switch-container-class" data-className="body-subnav-pills">
                                                <div className="switch-animate switch-off">
                                                    <input type="checkbox" data-toggle="toggle" data-onstyle="success"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-content-left">
                                            <div className="widget-heading">Pills Page Navigation Style
                                            </div>
                                            <div className="widget-subheading">Changes the page sub navigation style to pills!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <h3 className="themeoptions-heading">
                        <div>
                            Sidebar Options
                        </div>
                        <button type="button" className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-sidebar-cs-class" data-className="">
                            Restore Default
                        </button>
                    </h3>
                    <div className="p-3">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <h5 className="pb-2">Choose Color Scheme
                                </h5>
                                <div className="theme-settings-swatches">
                                    <div className="swatch-holder bg-primary switch-sidebar-cs-class" data-className="bg-primary sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-secondary switch-sidebar-cs-class" data-className="bg-secondary sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-success switch-sidebar-cs-class" data-className="bg-success sidebar-text-dark">
                                    </div>
                                    <div className="swatch-holder bg-info switch-sidebar-cs-class" data-className="bg-info sidebar-text-dark">
                                    </div>
                                    <div className="swatch-holder bg-warning switch-sidebar-cs-class" data-className="bg-warning sidebar-text-dark">
                                    </div>
                                    <div className="swatch-holder bg-danger switch-sidebar-cs-class" data-className="bg-danger sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-light switch-sidebar-cs-class" data-className="bg-light sidebar-text-dark">
                                    </div>
                                    <div className="swatch-holder bg-dark switch-sidebar-cs-class" data-className="bg-dark sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-focus switch-sidebar-cs-class" data-className="bg-focus sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-alternate switch-sidebar-cs-class" data-className="bg-alternate sidebar-text-light">
                                    </div>
                                    <div className="divider">
                                    </div>
                                    <div className="swatch-holder bg-vicious-stance switch-sidebar-cs-class" data-className="bg-vicious-stance sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-midnight-bloom switch-sidebar-cs-class" data-className="bg-midnight-bloom sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-night-sky switch-sidebar-cs-class" data-className="bg-night-sky sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-slick-carbon switch-sidebar-cs-class" data-className="bg-slick-carbon sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-asteroid switch-sidebar-cs-class" data-className="bg-asteroid sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-royal switch-sidebar-cs-class" data-className="bg-royal sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-warm-flame switch-sidebar-cs-class" data-className="bg-warm-flame sidebar-text-dark">
                                    </div>
                                    <div className="swatch-holder bg-night-fade switch-sidebar-cs-class" data-className="bg-night-fade sidebar-text-dark">
                                    </div>
                                    <div className="swatch-holder bg-sunny-morning switch-sidebar-cs-class" data-className="bg-sunny-morning sidebar-text-dark">
                                    </div>
                                    <div className="swatch-holder bg-tempting-azure switch-sidebar-cs-class" data-className="bg-tempting-azure sidebar-text-dark">
                                    </div>
                                    <div className="swatch-holder bg-amy-crisp switch-sidebar-cs-class" data-className="bg-amy-crisp sidebar-text-dark">
                                    </div>
                                    <div className="swatch-holder bg-heavy-rain switch-sidebar-cs-class" data-className="bg-heavy-rain sidebar-text-dark">
                                    </div>
                                    <div className="swatch-holder bg-mean-fruit switch-sidebar-cs-class" data-className="bg-mean-fruit sidebar-text-dark">
                                    </div>
                                    <div className="swatch-holder bg-malibu-beach switch-sidebar-cs-class" data-className="bg-malibu-beach sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-deep-blue switch-sidebar-cs-class" data-className="bg-deep-blue sidebar-text-dark">
                                    </div>
                                    <div className="swatch-holder bg-ripe-malin switch-sidebar-cs-class" data-className="bg-ripe-malin sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-arielle-smile switch-sidebar-cs-class" data-className="bg-arielle-smile sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-plum-plate switch-sidebar-cs-class" data-className="bg-plum-plate sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-happy-fisher switch-sidebar-cs-class" data-className="bg-happy-fisher sidebar-text-dark">
                                    </div>
                                    <div className="swatch-holder bg-happy-itmeo switch-sidebar-cs-class" data-className="bg-happy-itmeo sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-mixed-hopes switch-sidebar-cs-class" data-className="bg-mixed-hopes sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-strong-bliss switch-sidebar-cs-class" data-className="bg-strong-bliss sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-grow-early switch-sidebar-cs-class" data-className="bg-grow-early sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-love-kiss switch-sidebar-cs-class" data-className="bg-love-kiss sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-premium-dark switch-sidebar-cs-class" data-className="bg-premium-dark sidebar-text-light">
                                    </div>
                                    <div className="swatch-holder bg-happy-green switch-sidebar-cs-class" data-className="bg-happy-green sidebar-text-light">
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <h3 className="themeoptions-heading">
                        <div>Main Content Options</div>
                    </h3>
                    <div className="p-3">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <h5 className="pb-2">Color Schemes
                                </h5>
                                <div className="theme-settings-swatches">
                                    <div role="group" className="mt-2 btn-group">
                                        <button type="button" className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-class" data-className="app-theme-white">
                                            White Theme
                                        </button>
                                        <button type="button" className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-class active" data-className="app-theme-gray">
                                            Gray Theme
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="app-drawer-wrapper">
    <div className="drawer-nav-btn">
        <button type="button" className="hamburger hamburger--elastic is-active">
            <span className="hamburger-box"><span className="hamburger-inner"></span></span></button>
    </div>
    <div className="drawer-content-wrapper">
        <div className="scrollbar-container">
            <h3 className="drawer-heading">Servers Status</h3>
            <div className="drawer-section">
                <div className="row">
                    <div className="col">
                        <div className="progress-box"><h4>Server Load 1</h4>
                            <div className="circle-progress circle-progress-gradient-xl mx-auto">
                                <small></small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="progress-box"><h4>Server Load 2</h4>
                            <div className="circle-progress circle-progress-success-xl mx-auto">
                                <small></small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="progress-box"><h4>Server Load 3</h4>
                            <div className="circle-progress circle-progress-danger-xl mx-auto">
                                <small></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="mt-3"><h5 className="text-center card-title">Live Statistics</h5>
                    <div id="sparkline-carousel-3"></div>
                    <div className="row">
                        <div className="col">
                            <div className="widget-chart p-0">
                                <div className="widget-chart-content">
                                    <div className="widget-numbers text-warning fsize-3">43</div>
                                    <div className="widget-subheading pt-1">Packages</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="widget-chart p-0">
                                <div className="widget-chart-content">
                                    <div className="widget-numbers text-danger fsize-3">65</div>
                                    <div className="widget-subheading pt-1">Dropped</div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="widget-chart p-0">
                                <div className="widget-chart-content">
                                    <div className="widget-numbers text-success fsize-3">18</div>
                                    <div className="widget-subheading pt-1">Invalid</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="text-center mt-2 d-block">
                        <button className="mr-2 border-0 btn-transition btn btn-outline-danger">Escalate Issue</button>
                        <button className="border-0 btn-transition btn btn-outline-success">Support Center</button>
                    </div>
                </div>
            </div>
            <h3 className="drawer-heading">File Transfers</h3>
            <div className="drawer-section p-0">
                <div className="files-box">
                    <ul className="list-group list-group-flush">
                        <li className="pt-2 pb-2 pr-2 list-group-item">
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left opacity-6 fsize-2 mr-3 text-primary center-elem">
                                        <i className="fa fa-file-alt"></i>
                                    </div>
                                    <div className="widget-content-left">
                                        <div className="widget-heading font-weight-normal">TPSReport.docx</div>
                                    </div>
                                    <div className="widget-content-right widget-content-actions">
                                        <button className="btn-icon btn-icon-only btn btn-link btn-sm">
                                            <i className="fa fa-cloud-download-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="pt-2 pb-2 pr-2 list-group-item">
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left opacity-6 fsize-2 mr-3 text-warning center-elem">
                                        <i className="fa fa-file-archive"></i>
                                    </div>
                                    <div className="widget-content-left">
                                        <div className="widget-heading font-weight-normal">Latest_photos.zip</div>
                                    </div>
                                    <div className="widget-content-right widget-content-actions">
                                        <button className="btn-icon btn-icon-only btn btn-link btn-sm">
                                            <i className="fa fa-cloud-download-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="pt-2 pb-2 pr-2 list-group-item">
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left opacity-6 fsize-2 mr-3 text-danger center-elem">
                                        <i className="fa fa-file-pdf"></i>
                                    </div>
                                    <div className="widget-content-left">
                                        <div className="widget-heading font-weight-normal">Annual Revenue.pdf</div>
                                    </div>
                                    <div className="widget-content-right widget-content-actions">
                                        <button className="btn-icon btn-icon-only btn btn-link btn-sm">
                                            <i className="fa fa-cloud-download-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="pt-2 pb-2 pr-2 list-group-item">
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left opacity-6 fsize-2 mr-3 text-success center-elem">
                                        <i className="fa fa-file-excel"></i>
                                    </div>
                                    <div className="widget-content-left">
                                        <div className="widget-heading font-weight-normal">Analytics_GrowthReport.xls</div>
                                    </div>
                                    <div className="widget-content-right widget-content-actions">
                                        <button className="btn-icon btn-icon-only btn btn-link btn-sm">
                                            <i className="fa fa-cloud-download-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <h3 className="drawer-heading">Tasks in Progress</h3>
            <div className="drawer-section p-0">
                <div className="todo-box">
                    <ul className="todo-list-wrapper list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="todo-indicator bg-warning"></div>
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-2">
                                        <div className="custom-checkbox custom-control">
                                            <input type="checkbox" id="exampleCustomCheckbox1266" className="custom-control-input"/>
                                            <label className="custom-control-label" for="exampleCustomCheckbox1266">&nbsp;</label></div>
                                    </div>
                                    <div className="widget-content-left">
                                        <div className="widget-heading">Wash the car
                                            <div className="badge badge-danger ml-2">Rejected</div>
                                        </div>
                                        <div className="widget-subheading"><i>Written by Bob</i></div>
                                    </div>
                                    <div className="widget-content-right widget-content-actions">
                                        <button className="border-0 btn-transition btn btn-outline-success">
                                            <i className="fa fa-check"></i>
                                        </button>
                                        <button className="border-0 btn-transition btn btn-outline-danger">
                                            <i className="fa fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="todo-indicator bg-focus"></div>
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-2">
                                        <div className="custom-checkbox custom-control">
                                            <input type="checkbox" id="exampleCustomCheckbox1666" className="custom-control-input"/>
                                            <label className="custom-control-label" for="exampleCustomCheckbox1666">&nbsp;</label></div>
                                    </div>
                                    <div className="widget-content-left">
                                        <div className="widget-heading">Task with hover dropdown menu</div>
                                        <div className="widget-subheading">
                                            <div>By Johnny
                                                <div className="badge badge-pill badge-info ml-2">NEW</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content-right widget-content-actions">
                                        <div className="d-inline-block dropdown">
                                            <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="border-0 btn-transition btn btn-link">
                                                <i className="fa fa-ellipsis-h">
                                                </i>
                                            </button>
                                            <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right"><h6 tabindex="-1" className="dropdown-header">Header</h6>
                                                <button type="button" disabled="" tabindex="-1" className="disabled dropdown-item">Action</button>
                                                <button type="button" tabindex="0" className="dropdown-item">Another Action</button>
                                                <div tabindex="-1" className="dropdown-divider"></div>
                                                <button type="button" tabindex="0" className="dropdown-item">Another Action</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="todo-indicator bg-primary"></div>
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-2">
                                        <div className="custom-checkbox custom-control">
                                            <input type="checkbox" id="exampleCustomCheckbox4777" className="custom-control-input"/>
                                            <label className="custom-control-label" for="exampleCustomCheckbox4777">&nbsp;</label></div>
                                    </div>
                                    <div className="widget-content-left flex2">
                                        <div className="widget-heading">Badge on the right task</div>
                                        <div className="widget-subheading">This task has show on hover actions!</div>
                                    </div>
                                    <div className="widget-content-right widget-content-actions">
                                        <button className="border-0 btn-transition btn btn-outline-success">
                                            <i className="fa fa-check">
                                            </i>
                                        </button>
                                    </div>
                                    <div className="widget-content-right ml-3">
                                        <div className="badge badge-pill badge-success">Latest Task</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="todo-indicator bg-info"></div>
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-2">
                                        <div className="custom-checkbox custom-control">
                                            <input type="checkbox" id="exampleCustomCheckbox2444" className="custom-control-input"/>
                                            <label className="custom-control-label" for="exampleCustomCheckbox2444">&nbsp;</label></div>
                                    </div>
                                    <div className="widget-content-left mr-3">
                                        <div className="widget-content-left"><img width="42" className="rounded" src="assets/images/avatars/1.jpg" alt=""/></div>
                                    </div>
                                    <div className="widget-content-left">
                                        <div className="widget-heading">Go grocery shopping</div>
                                        <div className="widget-subheading">A short description ...</div>
                                    </div>
                                    <div className="widget-content-right widget-content-actions">
                                        <button className="border-0 btn-transition btn btn-sm btn-outline-success">
                                            <i className="fa fa-check"></i>
                                        </button>
                                        <button className="border-0 btn-transition btn btn-sm btn-outline-danger">
                                            <i className="fa fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="todo-indicator bg-success"></div>
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-2">
                                        <div className="custom-checkbox custom-control">
                                            <input type="checkbox" id="exampleCustomCheckbox3222" className="custom-control-input"/>
                                            <label className="custom-control-label" for="exampleCustomCheckbox3222">&nbsp;</label></div>
                                    </div>
                                    <div className="widget-content-left flex2">
                                        <div className="widget-heading">Development Task</div>
                                        <div className="widget-subheading">Finish React ToDo List App</div>
                                    </div>
                                    <div className="widget-content-right">
                                        <div className="badge badge-warning mr-2">69</div>
                                    </div>
                                    <div className="widget-content-right">
                                        <button className="border-0 btn-transition btn btn-outline-success">
                                            <i className="fa fa-check">
                                            </i>
                                        </button>
                                        <button className="border-0 btn-transition btn btn-outline-danger">
                                            <i className="fa fa-trash-alt">
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <h3 className="drawer-heading">Urgent Notifications</h3>
            <div className="drawer-section">
                <div className="notifications-box">
                    <div className="vertical-time-simple vertical-without-time vertical-timeline vertical-timeline--one-column">
                        <div className="vertical-timeline-item dot-danger vertical-timeline-element">
                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">All Hands Meeting</h4><span className="vertical-timeline-element-date"></span></div>
                            </div>
                        </div>
                        <div className="vertical-timeline-item dot-warning vertical-timeline-element">
                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                <div className="vertical-timeline-element-content bounce-in"><p>Yet another one, at <span className="text-success">15:00 PM</span></p><span className="vertical-timeline-element-date"></span></div>
                            </div>
                        </div>
                        <div className="vertical-timeline-item dot-success vertical-timeline-element">
                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                <div className="vertical-timeline-element-content bounce-in">
                                    <h4 className="timeline-title">Build the production release
                                        <div className="badge badge-danger ml-2">NEW</div>
                                    </h4>
                                    <span className="vertical-timeline-element-date"></span></div>
                            </div>
                        </div>
                        <div className="vertical-timeline-item dot-primary vertical-timeline-element">
                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                <div className="vertical-timeline-element-content bounce-in">
                                    <h4 className="timeline-title">Something not important
                                        <div className="avatar-wrapper mt-2 avatar-wrapper-overlap">
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon"><img
                                                        src="assets/images/avatars/1.jpg"
                                                        alt=""></div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon"><img
                                                        src="assets/images/avatars/2.jpg"
                                                        alt=""></div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon"><img
                                                        src="assets/images/avatars/3.jpg"
                                                        alt=""></div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon"><img
                                                        src="assets/images/avatars/4.jpg"
                                                        alt=""></div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon"><img
                                                        src="assets/images/avatars/5.jpg"
                                                        alt=""></div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon"><img
                                                        src="assets/images/avatars/6.jpg"
                                                        alt=""></div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon"><img
                                                        src="assets/images/avatars/7.jpg"
                                                        alt=""></div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm">
                                                <div className="avatar-icon"><img
                                                        src="assets/images/avatars/8.jpg"
                                                        alt=""></div>
                                            </div>
                                            <div className="avatar-icon-wrapper avatar-icon-sm avatar-icon-add">
                                                <div className="avatar-icon"><i>+</i></div>
                                            </div>
                                        </div>
                                    </h4>
                                    <span className="vertical-timeline-element-date"></span></div>
                            </div>
                        </div>
                        <div className="vertical-timeline-item dot-info vertical-timeline-element">
                            <div><span className="vertical-timeline-element-icon bounce-in"></span>
                                <div className="vertical-timeline-element-content bounce-in"><h4 className="timeline-title">This dot has an info state</h4><span className="vertical-timeline-element-date"></span></div>
                            </div>
                        </div>
                        <div className="vertical-timeline-item dot-dark vertical-timeline-element">
                            <div><span className="vertical-timeline-element-icon is-hidden"></span>
                                <div className="vertical-timeline-element-content is-hidden"><h4 className="timeline-title">This dot has a dark state</h4><span className="vertical-timeline-element-date"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="app-drawer-overlay d-none animated fadeIn"></div>
      </div>
    );
  }
}

export default Home;
