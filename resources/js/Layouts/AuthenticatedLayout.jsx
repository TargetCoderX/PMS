import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import MainHeader from './partials/MainHeader';
import SubHeader from './partials/SubHeader';
import PageHeader from './partials/PageHeader';
import Footer from './partials/Footer';

export default function AuthenticatedLayout({ children }) {
    const user = usePage().props.auth.user;
        useState(false);

    return (
        <div className="page">
            <MainHeader />
            <SubHeader />
            <div className="page-wrapper">

                <PageHeader />

                <div className="page-body">
                  {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}
