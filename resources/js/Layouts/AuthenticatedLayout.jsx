import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import MainHeader from './partials/MainHeader';
import SubHeader from './partials/SubHeader';
import PageHeader from './partials/PageHeader';
import Footer from './partials/Footer';
import { toast, ToastContainer } from 'react-toastify';
export default function AuthenticatedLayout({ children, pageHeaderCallback }) {
    const user = usePage().props.auth.user;
    const { status, message } = usePage().props;

    useEffect(() => {
        if (status && message) {
            if (status === 'success') {
                toast.success(message);
            } else {
                toast.error(message);
            }
        }
    }, [status, message]);
    return (
        <div className="page">
            <ToastContainer />
            <MainHeader />
            <SubHeader />
            <div className="page-wrapper">
                <PageHeader pageHeaderCallback={pageHeaderCallback} />
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


