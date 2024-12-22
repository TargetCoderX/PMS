import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import MainHeader from './partials/MainHeader';
import SubHeader from './partials/SubHeader';
import PageHeader from './partials/PageHeader';
import Footer from './partials/Footer';
import { ToastContainer } from 'react-toastify';
export default function AuthenticatedLayout({ children, header, subtext }) {
    const user = usePage().props.auth.user;
    useState(false);

    return (
        <div className="page">
            <ToastContainer />
            <MainHeader />
            <SubHeader />
            <div className="page-wrapper">

                <PageHeader header={header} subtext={subtext} />

                <div className="page-body">
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

