import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, } = useForm({
        'first_name': '',
        'last_name': '',
        'email': '',
        'phone': '',
        'address': '',
        'job_title': '',
    });
    const submit = (e) => {
        e.preventDefault();
        post(route('save-user-data'), { data });
    };

    const handleOnchange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <GuestLayout>
            <Head title="Register" />
            <div className="card card-md">
                <div className="card-body">
                    <h2 className="h2 text-center mb-4">Create New Account</h2>
                    <form onSubmit={submit} autocomplete="off" novalidate>
                        <div className="form-group mb-2">
                            <label className="form-label" htmlFor="first_name">First Name</label>
                            <input type="text" name="first_name" value={data.first_name} onChange={(e) => handleOnchange(e)} className="form-control" />
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label" htmlFor="last_name">Last Name</label>
                            <input type="text" name="last_name" value={data.last_name} onChange={(e) => handleOnchange(e)} className="form-control" />
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input type="text" name="email" value={data.email} onChange={(e) => handleOnchange(e)} className="form-control" />
                        </div> <div className="form-group mb-2">
                            <label className="form-label" htmlFor="address">Address</label>
                            <input type="text" name="address" value={data.address} onChange={(e) => handleOnchange(e)} className="form-control" />
                        </div><div className="form-group mb-2">
                            <label className="form-label" htmlFor="address">Phone</label>
                            <input type="number" name="phone" value={data.phone} onChange={(e) => handleOnchange(e)} className="form-control" />
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label" htmlFor="Job Title">Job Title</label>
                            <input type="text" name="job_title" value={data.job_title} onChange={(e) => handleOnchange(e)} className="form-control" />
                        </div>
                        <div className="form-footer d-grid gap-2">
                            <button disabled={processing} className="btn btn-primary">Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="text-center text-muted mt-3">
                Have an account? <Link href={route('login')} tabindex="-1">Login</Link>
            </div>
        </GuestLayout>
    );
}
