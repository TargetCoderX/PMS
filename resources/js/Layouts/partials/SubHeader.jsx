import React from 'react';

function SubHeader() {
  return (
    <header className="navbar-expand-md">
    <div className="navbar-collapse" id="navbar-menu">
        <div className="navbar">
            <div className="container-xl">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="./" >
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                            </span>
                            <span className="nav-link-title">
                                Home
                            </span>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#navbar-base" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" >
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /><path d="M16 5.25l-8 4.5" /></svg>
                            </span>
                            <span className="nav-link-title">
                                Interface
                            </span>
                        </a>
                        <div className="dropdown-menu">
                            <div className="dropdown-menu-columns">
                                <div className="dropdown-menu-column">
                                    <a className="dropdown-item" href="./accordion.html">
                                        Accordion
                                    </a>
                                    <a className="dropdown-item" href="./blank.html">
                                        Blank page
                                    </a>
                                    <a className="dropdown-item" href="./badges.html">
                                        Badges
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./buttons.html">
                                        Buttons
                                    </a>
                                    <div className="dropend">
                                        <a className="dropdown-item dropdown-toggle" href="#sidebar-cards" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" >
                                            Cards
                                            <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                        </a>
                                        <div className="dropdown-menu">
                                            <a href="./cards.html" className="dropdown-item">
                                                Sample cards
                                            </a>
                                            <a href="./card-actions.html" className="dropdown-item">
                                                Card actions
                                                <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                            </a>
                                            <a href="./cards-masonry.html" className="dropdown-item">
                                                Cards Masonry
                                            </a>
                                        </div>
                                    </div>
                                    <a className="dropdown-item" href="./colors.html">
                                        Colors
                                    </a>
                                    <a className="dropdown-item" href="./datagrid.html">
                                        Data grid
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./datatables.html">
                                        Datatables
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./dropdowns.html">
                                        Dropdowns
                                    </a>
                                    <a className="dropdown-item" href="./modals.html">
                                        Modals
                                    </a>
                                    <a className="dropdown-item" href="./maps.html">
                                        Maps
                                    </a>
                                    <a className="dropdown-item" href="./map-fullsize.html">
                                        Map fullsize
                                    </a>
                                    <a className="dropdown-item" href="./maps-vector.html">
                                        Vector maps
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./navigation.html">
                                        Navigation
                                    </a>
                                    <a className="dropdown-item" href="./charts.html">
                                        Charts
                                    </a>
                                    <a className="dropdown-item" href="./pagination.html">

                                        Pagination
                                    </a>
                                </div>
                                <div className="dropdown-menu-column">
                                    <a className="dropdown-item" href="./placeholder.html">
                                        Placeholder
                                    </a>
                                    <a className="dropdown-item" href="./steps.html">
                                        Steps
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./stars-rating.html">
                                        Stars rating
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./tabs.html">
                                        Tabs
                                    </a>
                                    <a className="dropdown-item" href="./tables.html">
                                        Tables
                                    </a>
                                    <a className="dropdown-item" href="./carousel.html">
                                        Carousel
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./lists.html">
                                        Lists
                                    </a>
                                    <a className="dropdown-item" href="./typography.html">
                                        Typography
                                    </a>
                                    <a className="dropdown-item" href="./offcanvas.html">
                                        Offcanvas
                                    </a>
                                    <a className="dropdown-item" href="./markdown.html">
                                        Markdown
                                    </a>
                                    <a className="dropdown-item" href="./dropzone.html">
                                        Dropzone
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./lightbox.html">
                                        Lightbox
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./tinymce.html">
                                        TinyMCE
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./inline-player.html">
                                        Inline player
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <div className="dropend">
                                        <a className="dropdown-item dropdown-toggle" href="#sidebar-authentication" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" >
                                            Authentication
                                        </a>
                                        <div className="dropdown-menu">
                                            <a href="./sign-in.html" className="dropdown-item">
                                                Sign in
                                            </a>
                                            <a href="./sign-in-link.html" className="dropdown-item">
                                                Sign in link
                                            </a>
                                            <a href="./sign-in-illustration.html" className="dropdown-item">
                                                Sign in with illustration
                                            </a>
                                            <a href="./sign-in-cover.html" className="dropdown-item">
                                                Sign in with cover
                                            </a>
                                            <a href="./sign-up.html" className="dropdown-item">
                                                Sign up
                                            </a>
                                            <a href="./forgot-password.html" className="dropdown-item">
                                                Forgot password
                                            </a>
                                            <a href="./terms-of-service.html" className="dropdown-item">
                                                Terms of service
                                            </a>
                                            <a href="./auth-lock.html" className="dropdown-item">
                                                Lock screen
                                            </a>
                                        </div>
                                    </div>
                                    <div className="dropend">
                                        <a className="dropdown-item dropdown-toggle" href="#sidebar-error" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" >

                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-inline me-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 14l6 0" /></svg>
                                            Error pages
                                        </a>
                                        <div className="dropdown-menu">
                                            <a href="./error-404.html" className="dropdown-item">
                                                404 page
                                            </a>
                                            <a href="./error-500.html" className="dropdown-item">
                                                500 page
                                            </a>
                                            <a href="./error-maintenance.html" className="dropdown-item">
                                                Maintenance page
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./form-elements.html" >
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11l3 3l8 -8" /><path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                            </span>
                            <span className="nav-link-title">
                                Form elements
                            </span>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#navbar-extra" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" >
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                            </span>
                            <span className="nav-link-title">
                                Extra
                            </span>
                        </a>
                        <div className="dropdown-menu">
                            <div className="dropdown-menu-columns">
                                <div className="dropdown-menu-column">
                                    <a className="dropdown-item" href="./empty.html">
                                        Empty page
                                    </a>
                                    <a className="dropdown-item" href="./cookie-banner.html">
                                        Cookie banner
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./activity.html">
                                        Activity
                                    </a>
                                    <a className="dropdown-item" href="./gallery.html">
                                        Gallery
                                    </a>
                                    <a className="dropdown-item" href="./invoice.html">
                                        Invoice
                                    </a>
                                    <a className="dropdown-item" href="./search-results.html">
                                        Search results
                                    </a>
                                    <a className="dropdown-item" href="./pricing.html">
                                        Pricing cards
                                    </a>
                                    <a className="dropdown-item" href="./pricing-table.html">
                                        Pricing table
                                    </a>
                                    <a className="dropdown-item" href="./faq.html">
                                        FAQ
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./users.html">
                                        Users
                                    </a>
                                    <a className="dropdown-item" href="./license.html">
                                        License
                                    </a>
                                </div>
                                <div className="dropdown-menu-column">
                                    <a className="dropdown-item" href="./logs.html">
                                        Logs
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./music.html">
                                        Music
                                    </a>
                                    <a className="dropdown-item" href="./photogrid.html">
                                        Photogrid
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./tasks.html">
                                        Tasks
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./uptime.html">
                                        Uptime monitor
                                    </a>
                                    <a className="dropdown-item" href="./widgets.html">
                                        Widgets
                                    </a>
                                    <a className="dropdown-item" href="./wizard.html">
                                        Wizard
                                    </a>
                                    <a className="dropdown-item" href="./settings.html">
                                        Settings
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./trial-ended.html">
                                        Trial ended
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./job-listing.html">
                                        Job listing
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./page-loader.html">
                                        Page loader
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#navbar-layout" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" >
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M14 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>
                            </span>
                            <span className="nav-link-title">
                                Layout
                            </span>
                        </a>
                        <div className="dropdown-menu">
                            <div className="dropdown-menu-columns">
                                <div className="dropdown-menu-column">
                                    <a className="dropdown-item" href="./layout-horizontal.html">
                                        Horizontal
                                    </a>
                                    <a className="dropdown-item" href="./layout-boxed.html">
                                        Boxed
                                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">New</span>
                                    </a>
                                    <a className="dropdown-item" href="./layout-vertical.html">
                                        Vertical
                                    </a>
                                    <a className="dropdown-item" href="./layout-vertical-transparent.html">
                                        Vertical transparent
                                    </a>
                                    <a className="dropdown-item" href="./layout-vertical-right.html">
                                        Right vertical
                                    </a>
                                    <a className="dropdown-item" href="./layout-condensed.html">
                                        Condensed
                                    </a>
                                    <a className="dropdown-item" href="./layout-combo.html">
                                        Combined
                                    </a>
                                </div>
                                <div className="dropdown-menu-column">
                                    <a className="dropdown-item" href="./layout-navbar-dark.html">
                                        Navbar dark
                                    </a>
                                    <a className="dropdown-item" href="./layout-navbar-sticky.html">
                                        Navbar sticky
                                    </a>
                                    <a className="dropdown-item" href="./layout-navbar-overlap.html">
                                        Navbar overlap
                                    </a>
                                    <a className="dropdown-item" href="./layout-rtl.html">
                                        RTL mode
                                    </a>
                                    <a className="dropdown-item" href="./layout-fluid.html">
                                        Fluid
                                    </a>
                                    <a className="dropdown-item" href="./layout-fluid-vertical.html">
                                        Fluid vertical
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./icons.html" >
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" /><path d="M10 10l.01 0" /><path d="M14 10l.01 0" /><path d="M10 14a3.5 3.5 0 0 0 4 0" /></svg>
                            </span>
                            <span className="nav-link-title">
                                4158 icons
                            </span>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#navbar-help" data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false" >
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M15 15l3.35 3.35" /><path d="M9 15l-3.35 3.35" /><path d="M5.65 5.65l3.35 3.35" /><path d="M18.35 5.65l-3.35 3.35" /></svg>
                            </span>
                            <span className="nav-link-title">
                                Help
                            </span>
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="https://tabler.io/docs" target="_blank" rel="noopener">
                                Documentation
                            </a>
                            <a className="dropdown-item" href="./changelog.html">
                                Changelog
                            </a>
                            <a className="dropdown-item" href="https://github.com/tabler/tabler" target="_blank" rel="noopener">
                                Source code
                            </a>
                            <a className="dropdown-item text-pink" href="https://github.com/sponsors/codecalm" target="_blank" rel="noopener">

                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-inline me-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                                Sponsor project!
                            </a>
                        </div>
                    </li>
                </ul>
                <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                    <form action="./" method="get" autocomplete="off" novalidate>
                        <div className="input-icon">
                            <span className="input-icon-addon">

                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                            </span>
                            <input type="text" value="" className="form-control" placeholder="Search…" aria-label="Search in website" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </header>

  );
}

export default SubHeader;
