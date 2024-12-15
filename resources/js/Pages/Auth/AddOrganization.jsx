import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

function AddOrganization({ user }) {
    console.log(user);
    return (
        <GuestLayout showBigForm={true}>
            <Head title="Add Organization" />
            <div className="card card-md">
                <div className="card-body">
                    <h2 className="h2 text-center mb-4">Login to your account</h2>
                    <form>
                        <div className="row g-3">
                            <div className="col-3">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input className="form-control" id="name" name="name" placeholder="Enter your organization name" required type="text" />
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="domain">Domain</label>
                                <input className="form-control" id="domain" name="domain" placeholder="Enter your domain name" type="text" />
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input className="form-control" id="email" name="email" placeholder="Enter your email address" required type="email" />
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="phone">Phone</label>
                                <input className="form-control" id="phone" name="phone" placeholder="Enter your phone number" type="text" />
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="address">Address</label>
                                <input className="form-control" id="address" name="address" placeholder="Enter your address" type="text" />
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="city">City</label>
                                <input className="form-control" id="city" name="city" placeholder="Enter your city" type="text" />
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="country">Country</label>
                                <input className="form-control" id="country" name="country" placeholder="Enter your country" required type="text" />
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="industry">Industry</label>
                                <input className="form-control" id="industry" name="industry" placeholder="Enter your industry" type="text" />
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="website">Website</label>
                                <input className="form-control" id="website" name="website" placeholder="Enter your website" type="text" />
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="registration_number">Registration number</label>
                                <input className="form-control" id="registration_number" name="registration_number" placeholder="Enter your registration number" type="text" />
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="logo">Logo</label>
                                <input className="form-control" id="logo" name="logo" placeholder="Enter your logo" type="text" />
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="time_zone">Time zone</label>
                                <select className="form-select" id="time_zone" name="time_zone" required>
                                    <option value="UTC">UTC</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="language_preference">Language preference</label>
                                <select className="form-select" id="language_preference" name="language_preference" required>
                                    <option value="en">English</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-footer">
                                <button className="btn btn-primary w-100" type="submit">Add Organization</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}

export default AddOrganization;
