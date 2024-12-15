import { usePage } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    const { status, message } = usePage().props;
    return (
        <div className="page page-center">
            <div className="container container-tight py-4">
                <div className="text-center mb-4">
                    <a href="." className="navbar-brand navbar-brand-autodark"><img src="./static/logo.svg" height="36" alt="" /></a>
                </div>
                {status && message && (
                    <div className={`alert alert-${status === 'success' ? 'success' : 'danger'}`}>
                        {message}
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}
