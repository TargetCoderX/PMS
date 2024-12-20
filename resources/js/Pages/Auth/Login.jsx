import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div className="card card-md">
                <div className="card-body">
                    <h2 className="h2 text-center mb-4">Login to your account</h2>
                    <form onSubmit={submit} autocomplete="off" novalidate>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full form-control"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">
                                Password
                                <span className="form-label-description">
                                    <Link
                                        href={route('password.request')}>I forgot password</Link>
                                </span>
                            </label>
                            <div className="input-group mb-3">
                                <input id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full form-control"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-2 form-check">
                            <input className="form-check-input" type="checkbox" id="remember" name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData('remember', e.target.checked)
                                } />
                            <label className="form-check-label" htmlFor="remember">
                                Remember me on this device
                            </label>
                        </div>
                        <div className="form-footer d-grid gap-2">
                            <button type="submit" className="ms-4 btn btn-primary btn-block" disabled={processing} >Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="text-center text-muted mt-3">
                Don't have account yet? <Link href={route('register')} tabindex="-1">Create New Organization</Link>
            </div>






















            {/*   {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="mt-4 flex items-center justify-end">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form> */}
        </GuestLayout>
    );
}
