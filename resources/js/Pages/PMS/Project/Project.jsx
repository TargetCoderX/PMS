import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { addButton, addHeaderSubtext, addHeaderText } from '@/Redux/Reducers/HeaderReducer';
import { Head } from '@inertiajs/react';
import React, { use, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

function Project() {
    const dispatch = useDispatch();
    const refs = useRef({
        modalTitleRef: null,
        modalButtonRef: null
    });
    useEffect(() => {
        dispatch(addHeaderText("Projects"));
        dispatch(addHeaderSubtext("Here you can see all your projects, create new project, and perform all the work related to projects."));
        dispatch(addButton({ buttonKey: 'OPEN-PROJECT-MODAL', buttonVisible: true }));
    }, [dispatch])
    useEffect(() => {
        refs.current.modalTitleRef.innerText = "Add Project";
        refs.current.modalButtonRef.innerText = "Add Project";
    }, []);
    return (
        <AuthenticatedLayout>
            <Head title="Projects" />
            <div className="card">
                <div className="card-header border-bottom">
                    <ul className="nav nav-tabs card-header-tabs" data-bs-toggle="tabs" role="tablist" style={{ backgroundColor: '#f9f9f9' }}>
                        <li className="nav-item" role="presentation">
                            <a href="#tabs-active-1" className="nav-link active" data-bs-toggle="tab" aria-selected="true" role="tab" tabindex="-1">Active <span className="badge bg-primary ms-2">3</span></a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a href="#tabs-onhold-1" className="nav-link" data-bs-toggle="tab" aria-selected="false" role="tab" tabindex="-1">On Hold <span className="badge bg-warning ms-2">2</span></a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a href="#tabs-completed-1" className="nav-link" data-bs-toggle="tab" aria-selected="false" role="tab" tabindex="-1">Completed <span className="badge bg-success ms-2">5</span></a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a href="#tabs-archived-1" className="nav-link" data-bs-toggle="tab" aria-selected="false" role="tab" tabindex="-1">Archived <span className="badge bg-secondary ms-2">1</span></a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="tab-content">
                        <div className="tab-pane active show" id="tabs-active-1" role="tabpanel">
                            <div className="table-responsive" style={{ maxHeight: '49vh', overflowY: 'auto' }}>
                                <table className="table card-table table-vcenter text-nowrap datatable">
                                    <thead>
                                        <tr>
                                            <th className="w-1"><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all invoices" /></th>
                                            <th className="w-1">No.
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-sm icon-thick"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 15l6 -6l6 6"></path></svg>
                                            </th>
                                            <th>Invoice Subject</th>
                                            <th>Client</th>
                                            <th>VAT No.</th>
                                            <th>Created</th>
                                            <th>Status</th>
                                            <th>Price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001401</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Design Works</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-us me-2"></span>
                                                Carlson Limited
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                15 Dec 2017
                                            </td>
                                            <td>
                                                <span className="badge bg-success me-1"></span> Paid
                                            </td>
                                            <td>$887</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001402</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">UX Wireframes</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-gb me-2"></span>
                                                Adobe
                                            </td>
                                            <td>
                                                87956421
                                            </td>
                                            <td>
                                                12 Apr 2017
                                            </td>
                                            <td>
                                                <span className="badge bg-warning me-1"></span> Pending
                                            </td>
                                            <td>$1200</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001403</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">New Dashboard</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-de me-2"></span>
                                                Bluewolf
                                            </td>
                                            <td>
                                                87952621
                                            </td>
                                            <td>
                                                23 Oct 2017
                                            </td>
                                            <td>
                                                <span className="badge bg-warning me-1"></span> Pending
                                            </td>
                                            <td>$534</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001404</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Landing Page</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-br me-2"></span>
                                                Salesforce
                                            </td>
                                            <td>
                                                87953421
                                            </td>
                                            <td>
                                                2 Sep 2017
                                            </td>
                                            <td>
                                                <span className="badge bg-secondary me-1"></span> Due in 2 Weeks
                                            </td>
                                            <td>$1500</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001405</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Marketing Templates</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-pl me-2"></span>
                                                Printic
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                29 Jan 2018
                                            </td>
                                            <td>
                                                <span className="badge bg-danger me-1"></span> Paid Today
                                            </td>
                                            <td>$648</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001406</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Sales Presentation</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-br me-2"></span>
                                                Tabdaq
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                4 Feb 2018
                                            </td>
                                            <td>
                                                <span className="badge bg-secondary me-1"></span> Due in 3 Weeks
                                            </td>
                                            <td>$300</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001407</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Logo &amp; Print</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-us me-2"></span>
                                                Apple
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                22 Mar 2018
                                            </td>
                                            <td>
                                                <span className="badge bg-success me-1"></span> Paid Today
                                            </td>
                                            <td>$2500</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001408</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Icons</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-pl me-2"></span>
                                                Tookapic
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                13 May 2018
                                            </td>
                                            <td>
                                                <span className="badge bg-success me-1"></span> Paid Today
                                            </td>
                                            <td>$940</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane" id="tabs-onhold-1" role="tabpanel">
                            <div className="table-responsive" style={{ maxHeight: '49vh', overflowY: 'auto' }}>
                                <table className="table card-table table-vcenter text-nowrap datatable">
                                    <thead>
                                        <tr>
                                            <th className="w-1"><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all invoices" /></th>
                                            <th className="w-1">No.
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-sm icon-thick"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 15l6 -6l6 6"></path></svg>
                                            </th>
                                            <th>Invoice Subject</th>
                                            <th>Client</th>
                                            <th>VAT No.</th>
                                            <th>Created</th>
                                            <th>Status</th>
                                            <th>Price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001401</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Design Works</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-us me-2"></span>
                                                Carlson Limited
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                15 Dec 2017
                                            </td>
                                            <td>
                                                <span className="badge bg-success me-1"></span> Paid
                                            </td>
                                            <td>$887</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001402</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">UX Wireframes</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-gb me-2"></span>
                                                Adobe
                                            </td>
                                            <td>
                                                87956421
                                            </td>
                                            <td>
                                                12 Apr 2017
                                            </td>
                                            <td>
                                                <span className="badge bg-warning me-1"></span> Pending
                                            </td>
                                            <td>$1200</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001403</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">New Dashboard</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-de me-2"></span>
                                                Bluewolf
                                            </td>
                                            <td>
                                                87952621
                                            </td>
                                            <td>
                                                23 Oct 2017
                                            </td>
                                            <td>
                                                <span className="badge bg-warning me-1"></span> Pending
                                            </td>
                                            <td>$534</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001404</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Landing Page</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-br me-2"></span>
                                                Salesforce
                                            </td>
                                            <td>
                                                87953421
                                            </td>
                                            <td>
                                                2 Sep 2017
                                            </td>
                                            <td>
                                                <span className="badge bg-secondary me-1"></span> Due in 2 Weeks
                                            </td>
                                            <td>$1500</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001405</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Marketing Templates</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-pl me-2"></span>
                                                Printic
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                29 Jan 2018
                                            </td>
                                            <td>
                                                <span className="badge bg-danger me-1"></span> Paid Today
                                            </td>
                                            <td>$648</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001406</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Sales Presentation</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-br me-2"></span>
                                                Tabdaq
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                4 Feb 2018
                                            </td>
                                            <td>
                                                <span className="badge bg-secondary me-1"></span> Due in 3 Weeks
                                            </td>
                                            <td>$300</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001407</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Logo &amp; Print</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-us me-2"></span>
                                                Apple
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                22 Mar 2018
                                            </td>
                                            <td>
                                                <span className="badge bg-success me-1"></span> Paid Today
                                            </td>
                                            <td>$2500</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001408</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Icons</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-pl me-2"></span>
                                                Tookapic
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                13 May 2018
                                            </td>
                                            <td>
                                                <span className="badge bg-success me-1"></span> Paid Today
                                            </td>
                                            <td>$940</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane" id="tabs-completed-1" role="tabpanel">
                            <div className="table-responsive" style={{ maxHeight: '49vh', overflowY: 'auto' }}>
                                <table className="table card-table table-vcenter text-nowrap datatable">
                                    <thead>
                                        <tr>
                                            <th className="w-1"><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all invoices" /></th>
                                            <th className="w-1">No.
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-sm icon-thick"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 15l6 -6l6 6"></path></svg>
                                            </th>
                                            <th>Invoice Subject</th>
                                            <th>Client</th>
                                            <th>VAT No.</th>
                                            <th>Created</th>
                                            <th>Status</th>
                                            <th>Price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001401</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Design Works</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-us me-2"></span>
                                                Carlson Limited
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                15 Dec 2017
                                            </td>
                                            <td>
                                                <span className="badge bg-success me-1"></span> Paid
                                            </td>
                                            <td>$887</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001402</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">UX Wireframes</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-gb me-2"></span>
                                                Adobe
                                            </td>
                                            <td>
                                                87956421
                                            </td>
                                            <td>
                                                12 Apr 2017
                                            </td>
                                            <td>
                                                <span className="badge bg-warning me-1"></span> Pending
                                            </td>
                                            <td>$1200</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001403</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">New Dashboard</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-de me-2"></span>
                                                Bluewolf
                                            </td>
                                            <td>
                                                87952621
                                            </td>
                                            <td>
                                                23 Oct 2017
                                            </td>
                                            <td>
                                                <span className="badge bg-warning me-1"></span> Pending
                                            </td>
                                            <td>$534</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001404</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Landing Page</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-br me-2"></span>
                                                Salesforce
                                            </td>
                                            <td>
                                                87953421
                                            </td>
                                            <td>
                                                2 Sep 2017
                                            </td>
                                            <td>
                                                <span className="badge bg-secondary me-1"></span> Due in 2 Weeks
                                            </td>
                                            <td>$1500</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001405</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Marketing Templates</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-pl me-2"></span>
                                                Printic
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                29 Jan 2018
                                            </td>
                                            <td>
                                                <span className="badge bg-danger me-1"></span> Paid Today
                                            </td>
                                            <td>$648</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001406</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Sales Presentation</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-br me-2"></span>
                                                Tabdaq
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                4 Feb 2018
                                            </td>
                                            <td>
                                                <span className="badge bg-secondary me-1"></span> Due in 3 Weeks
                                            </td>
                                            <td>$300</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001407</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Logo &amp; Print</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-us me-2"></span>
                                                Apple
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                22 Mar 2018
                                            </td>
                                            <td>
                                                <span className="badge bg-success me-1"></span> Paid Today
                                            </td>
                                            <td>$2500</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001408</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Icons</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-pl me-2"></span>
                                                Tookapic
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                13 May 2018
                                            </td>
                                            <td>
                                                <span className="badge bg-success me-1"></span> Paid Today
                                            </td>
                                            <td>$940</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane" id="tabs-archived-1" role="tabpanel">
                            <div className="table-responsive" style={{ maxHeight: '49vh', overflowY: 'auto' }}>
                                <table className="table card-table table-vcenter text-nowrap datatable">
                                    <thead>
                                        <tr>
                                            <th className="w-1"><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all invoices" /></th>
                                            <th className="w-1">No.
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-sm icon-thick"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 15l6 -6l6 6"></path></svg>
                                            </th>
                                            <th>Invoice Subject</th>
                                            <th>Client</th>
                                            <th>VAT No.</th>
                                            <th>Created</th>
                                            <th>Status</th>
                                            <th>Price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001401</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Design Works</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-us me-2"></span>
                                                Carlson Limited
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                15 Dec 2017
                                            </td>
                                            <td>
                                                <span className="badge bg-success me-1"></span> Paid
                                            </td>
                                            <td>$887</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001402</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">UX Wireframes</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-gb me-2"></span>
                                                Adobe
                                            </td>
                                            <td>
                                                87956421
                                            </td>
                                            <td>
                                                12 Apr 2017
                                            </td>
                                            <td>
                                                <span className="badge bg-warning me-1"></span> Pending
                                            </td>
                                            <td>$1200</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001403</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">New Dashboard</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-de me-2"></span>
                                                Bluewolf
                                            </td>
                                            <td>
                                                87952621
                                            </td>
                                            <td>
                                                23 Oct 2017
                                            </td>
                                            <td>
                                                <span className="badge bg-warning me-1"></span> Pending
                                            </td>
                                            <td>$534</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001404</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Landing Page</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-br me-2"></span>
                                                Salesforce
                                            </td>
                                            <td>
                                                87953421
                                            </td>
                                            <td>
                                                2 Sep 2017
                                            </td>
                                            <td>
                                                <span className="badge bg-secondary me-1"></span> Due in 2 Weeks
                                            </td>
                                            <td>$1500</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001405</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Marketing Templates</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-pl me-2"></span>
                                                Printic
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                29 Jan 2018
                                            </td>
                                            <td>
                                                <span className="badge bg-danger me-1"></span> Paid Today
                                            </td>
                                            <td>$648</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001406</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Sales Presentation</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-br me-2"></span>
                                                Tabdaq
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                4 Feb 2018
                                            </td>
                                            <td>
                                                <span className="badge bg-secondary me-1"></span> Due in 3 Weeks
                                            </td>
                                            <td>$300</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001407</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Logo &amp; Print</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-us me-2"></span>
                                                Apple
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                22 Mar 2018
                                            </td>
                                            <td>
                                                <span className="badge bg-success me-1"></span> Paid Today
                                            </td>
                                            <td>$2500</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><input className="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" /></td>
                                            <td><span className="text-secondary">001408</span></td>
                                            <td><a href="invoice.html" className="text-reset" tabindex="-1">Icons</a></td>
                                            <td>
                                                <span className="flag flag-xs flag-country-pl me-2"></span>
                                                Tookapic
                                            </td>
                                            <td>
                                                87956621
                                            </td>
                                            <td>
                                                13 May 2018
                                            </td>
                                            <td>
                                                <span className="badge bg-success me-1"></span> Paid Today
                                            </td>
                                            <td>$940</td>
                                            <td className="text-end">
                                                <span className="dropdown">
                                                    <button className="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal modal-blur fade" id="modal-add-projects" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title modal-title" ref={(el) => refs.current.modalTitleRef = el}></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-12 mb-3 form-group">
                                        <label htmlFor="">Project Name</label>
                                        <input type="text" className="form-control" />
                                    </div> <div className="col-md-3 mb-3 form-group">
                                        <label htmlFor="">Status</label>
                                        <select name="" id="" className="form-control">
                                            <option value="active">Active</option>
                                            <option value="completed">Completed</option>
                                            <option value="on hold">On Hold</option>
                                            <option value="archived">Archived</option>
                                        </select>
                                    </div><div className="col-md-3 mb-3 form-group">
                                        <label htmlFor="">Priority</label>
                                        <select name="" id="" className="form-control">
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                            <option value="critical">Critical</option>
                                        </select>
                                    </div><div className="col-md-3 mb-3 form-group">
                                        <label>Budget</label>
                                        <input type="number" name="budget" className="form-control" placeholder="Enter budget amount" />
                                    </div><div className="col-md-3 mb-3 form-group">
                                        <label>Start Date</label>
                                        <input type="date" className="form-control" placeholder="" />
                                    </div>
                                    <div className="col-md-3 mb-3 form-group">
                                        <label>End Date</label>
                                        <input type="date" className="form-control" placeholder="" />
                                    </div>
                                    <div className="col-md-3 mb-3 form-group">
                                        <label>Duration</label>
                                        <input type="date" className="form-control" placeholder="" />
                                    </div>
                                    <div className="col-md-3 mb-3 form-group">
                                        <label>Project Type</label>
                                        <select name="" id="" className="form-control">
                                            <option value="internal">Internal</option>
                                            <option value="client">Client</option>
                                            <option value="r&d">R&D</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3 form-group">
                                        <label>Project Visiblity</label>
                                        <select name="" id="" className="form-control">
                                            <option value="private">Private</option>
                                            <option value="public">Public</option>
                                        </select>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div class="modal-footer">
                            <a href="#" class="btn btn-link link-secondary" data-bs-dismiss="modal">
                                Cancel
                            </a>
                            <a href="#" class="btn btn-primary ms-auto" data-bs-dismiss="modal"><i className='fa fa-plus me-2'></i>
                                <span ref={(el) => refs.current.modalButtonRef = el}></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </AuthenticatedLayout >
    );
}

export default Project;
