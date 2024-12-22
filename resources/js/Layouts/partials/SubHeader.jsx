import { Link } from '@inertiajs/react';
import React from 'react';

function SubHeader() {
    const menuItems = [
        {
            name: "Dashboard",
            link: route('dashboard.index'),
            active: true,
            icon: 'fa fa-house',
            children: []
        }, {
            name: "Projects",
            link: route('project.index'),
            active: true,
            icon: 'fa fa-briefcase',
            children: [/*
                {
                    name: "All Projects",
                    link: "#",
                    active: true,
                    children: []
                },
                {
                    name: "Active Projects",
                    link: "#",
                    active: true,
                    children: []
                },
                {
                    name: "Archived Projects",
                    link: "#",
                    active: true,
                    children: []
                }
             */]
        }, {
            name: "Tasks",
            link: "#",
            active: true,
            icon: 'fa fa-tasks',
            children: [
                {
                    name: "All Tasks",
                    link: "#",
                    active: true,
                    children: []
                },
                {
                    name: "My Tasks",
                    link: "#",
                    active: true,
                    children: []
                },
                {
                    name: "Overdue Tasks",
                    link: "#",
                    active: true,
                    children: []
                },
                {
                    name: "Task Categories",
                    link: "#",
                    active: true,
                    children: []
                }
            ]
        }, {
            name: "Teams & Users",
            link: "#",
            active: true,
            icon: 'fa fa-user-group',
            children: [
                {
                    name: "All Users",
                    link: "#",
                    active: true,
                    children: []
                },
                {
                    name: "Teams",
                    link: "#",
                    active: true,
                    children: []
                },
                {
                    name: "Roles & Permissions",
                    link: "#",
                    active: true,
                    children: []
                }
            ]
        }, {
            name: "Clients",
            link: "#",
            active: true,
            icon: 'fa fa-users',
            children: [
                {
                    name: "All Clients",
                    link: "#",
                    active: true,
                    children: []
                },
                {
                    name: "Add New Client",
                    link: "#",
                    active: true,
                    children: []
                },
                {
                    name: "Invoices by Client",
                    link: "#",
                    active: true,
                    children: []
                }
            ]
        }, {
            name: "Time Sheet",
            link: "#",
            active: true,
            icon: 'fa fa-clock',
            children: [
                {
                    name: "All Time Logs",
                    link: "#",
                    active: true,
                    children: []
                },
                {
                    name: "My Time Logs",
                    link: "#",
                    active: true,
                    children: []
                },
                {
                    name: "Reports",
                    link: "#",
                    active: true,
                    children: []
                }
            ]
        }, {
            name: "Leaves & Attendance",
            link: "#",
            active: true,
            icon: 'fa fa-calendar-check',
            children: [
                {
                    name: "Leave Requests",
                    link: "#",
                    active: true,
                    children: []
                },
                {
                    name: "Attendance Logs",
                    link: "#",
                    active: true,
                    children: []
                },
                {
                    name: "Leave Policies",
                    link: "#",
                    active: true,
                    children: []
                }
            ]
        }, {
            name: "Invoices",
            link: "#",
            active: true,
            icon: 'fa fa-file-invoice',
            children: []
        }, {
            name: "Reports",
            link: "#",
            active: true,
            icon: 'fa fa-chart-line',
            children: [
                {
                    name: "Project Reports",
                    link: "#",
                    active: true,
                    children: []
                },
                {
                    name: "Task Reports",
                    link: "#",
                    active: true,
                    children: []
                },
                {
                    name: "User Reports",
                    link: "#",
                    active: true,
                    children: []
                },
                {
                    name: "Financial Reports",
                    link: "#",
                    active: true,
                    children: []
                }
            ]
        }, {
            name: "Organization Settings",
            link: "#",
            active: true,
            icon: 'fa fa-gear',
            children: []
        },
    ]
    return (
        <header className="navbar-expand-md">
            <div className="navbar-collapse" id="navbar-menu">
                <div className="navbar">
                    <div className="container-fluid justify-content-center">
                        <ul className="navbar-nav">
                            {menuItems.map((menuItem, index) => (
                                <li key={index} className={`nav-item ${menuItem.children.length > 0 ? 'dropdown' : ''}`}>
                                    <Link className={`nav-link ${menuItem.children.length > 0 ? 'dropdown-toggle' : ''}`} href={menuItem.link} {...(menuItem.children.length > 0 && { 'data-bs-toggle': 'dropdown', 'data-bs-auto-close': 'outside', role: 'button', 'aria-expanded': 'false' })}>
                                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                                            <i className={menuItem.icon}></i>
                                        </span>
                                        <span className="nav-link-title">
                                            {menuItem.name}
                                        </span>
                                    </Link>
                                    {menuItem.children.length > 0 && (
                                        <div className="dropdown-menu">
                                            <div className="dropdown-menu-columns">
                                                <div className="dropdown-menu-column">
                                                    {menuItem.children.map((subItem, subIndex) => (
                                                        <Link key={subIndex} className="dropdown-item" href={subItem.link}>
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default SubHeader;
