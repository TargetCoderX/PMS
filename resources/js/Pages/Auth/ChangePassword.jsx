import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import React from 'react';

function ChangePassword({ token }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
        password_confirmation: '',
        token: token,
    });
    const submit = (e) => {
        e.preventDefault();
        post(route('password.change'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };
    return (
        <GuestLayout>
            <Head title="Create Password" />
            <div className="card card-md">
                <div className="card-body">
                    <h2 className="h2 text-center mb-4">Change Password</h2>
                    <form onSubmit={submit} autocomplete="off" novalidate>
                        <div className="mb-3">
                            <label className="form-label">New Password</label>
                            <input id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full form-control"
                                autoComplete="off"
                                isFocused={true}
                                onChange={(e) => setData('password', e.target.value)} />
                                {errors.password && <span className="text-danger">{errors.password}</span>}
                        </div>
                        <div className="mb-2">
                            <label className="form-label">
                                Confirm Password
                            </label>
                            <div className="input-group mb-3">
                                <input id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full form-control"
                                    autoComplete="off"
                                    onChange={(e) => setData('password_confirmation', e.target.value)} />
                                     {errors.password_confirmation && <span className="text-danger">{errors.password_confirmation}</span>}
                            </div>
                        </div>
                        <div className="form-footer d-grid gap-2">
                            <button type="submit" className="btn btn-primary btn-block" disabled={processing} >Create Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}

export default ChangePassword;
