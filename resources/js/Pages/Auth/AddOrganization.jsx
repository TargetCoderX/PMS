import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm } from '@inertiajs/react';
import React from 'react';
import { toast } from 'react-toastify';

function AddOrganization({ user, languages, timezones }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        domain: '',
        phone: '',
        address: '',
        job_title: '',
        language: '',
        timezone: '',
        city: '',
        country: '',
        state: '',
        industry: '',
        website: '',
        registration_number: '',
        logo: null,
        time_zone: '',
        language_preference: '',
    });

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            if (data[key] !== null) {
                formData.append(key, data[key]);
            }
        });
        axios.post(route('organization.store'), formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => {
                if (response.data.message) {
                    toast.success(response.data.message);
                }
                setTimeout(() => {
                    router.visit('/dashboard');
                }, 2000);
            })
            .catch(error => {
                if (error.response.status === 422) {
                    for (const key of Object.keys(error.response.data.errors)) {
                        toast.error(error.response.data.errors[key][0]);
                    }
                }
            });
    };

    const numberOnlyValidation = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === '' || regex.test(e.target.value)) {
            setData(e.target.name, e.target.value);
        }
    };

    return (
        <AuthenticatedLayout header={`Organization`} subtext="Give us some information about your organization">
            <Head title="Add Organization" />
            <div className="card card-md">
                <div className="card-body">
                    <h2 className="h2 text-center mb-4">Add Organization</h2>
                    <form onSubmit={submit}>
                        <div className="row g-3">
                            <div className="col-3">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input className="form-control" id="name" name="name" placeholder="Enter your organization name" required type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="domain">Domain</label>
                                <input required className="form-control" id="domain" name="domain" placeholder="Enter your domain name" type="text" value={data.domain} onChange={(e) => setData('domain', e.target.value)} />
                                {errors.domain && <div className="invalid-feedback">{errors.domain}</div>}
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="phone">Phone</label>
                                <input className="form-control" id="phone" name="phone" placeholder="Enter your phone number" type="text" value={data.phone} onChange={(e) => numberOnlyValidation(e)} maxLength={10} />
                                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="country">Country</label>
                                <input className="form-control" id="country" name="country" placeholder="Enter your country" required type="text" value={data.country} onChange={(e) => setData('country', e.target.value)} />
                                {errors.country && <div className="invalid-feedback">{errors.country}</div>}
                            </div><div className="col-3">
                                <label className="form-label" htmlFor="country">State</label>
                                <input className="form-control" id="state" name="state" placeholder="Enter your state" required type="text" value={data.state} onChange={(e) => setData('state', e.target.value)} />
                                {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="city">City</label>
                                <input required className="form-control" id="city" name="city" placeholder="Enter your city" type="text" value={data.city} onChange={(e) => setData('city', e.target.value)} />
                                {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="address">Address</label>
                                <input required className="form-control" id="address" name="address" placeholder="Enter your address" type="text" value={data.address} onChange={(e) => setData('address', e.target.value)} />
                                {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="industry">Industry</label>
                                <input required className="form-control" id="industry" name="industry" placeholder="Enter your industry" type="text" value={data.industry} onChange={(e) => setData('industry', e.target.value)} />
                                {errors.industry && <div className="invalid-feedback">{errors.industry}</div>}
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="website">Website</label>
                                <input required className="form-control" id="website" name="website" placeholder="Enter your website" type="text" value={data.website} onChange={(e) => setData('website', e.target.value)} />
                                {errors.website && <div className="invalid-feedback">{errors.website}</div>}
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="registration_number">Registration number</label>
                                <input required className="form-control" id="registration_number" name="registration_number" placeholder="Enter your registration number" type="text" value={data.registration_number} onChange={(e) => setData('registration_number', e.target.value)} />
                                {errors.registration_number && <div className="invalid-feedback">{errors.registration_number}</div>}
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="logo">Logo</label>
                                <input className="form-control" id="logo" name="logo" placeholder="Enter your logo" type="file" accept="image/*" onChange={(e) => setData('logo', e.target.files[0])} />
                                {errors.logo && <div className="invalid-feedback">{errors.logo}</div>}
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="time_zone">Time zone</label>
                                <select className="form-select" id="time_zone" name="time_zone" required value={data.time_zone} onChange={(e) => setData('time_zone', e.target.value)}>
                                    <option value="">Select Timezone</option>
                                    {timezones.length && timezones.map((timezone, index) => (
                                        <option key={index} value={timezone.time_zone}>{timezone.time_zone}</option>
                                    ))}
                                </select>
                                {errors.time_zone && <div className="invalid-feedback">{errors.time_zone}</div>}
                            </div>
                            <div className="col-3">
                                <label className="form-label" htmlFor="language_preference">Language preference</label>
                                <select className="form-select" id="language_preference" name="language_preference" required value={data.language_preference} onChange={(e) => setData('language_preference', e.target.value)}>
                                    <option value="">Select Language</option>
                                    {languages.length && languages.map((language, index) => (
                                        <option key={index} value={language.code}>{language.name}</option>
                                    ))}
                                </select>
                                {errors.language_preference && <div className="invalid-feedback">{errors.language_preference}</div>}
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-footer">
                                <button className="btn btn-primary w-100" disabled={processing}>Add Organization</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default AddOrganization;

