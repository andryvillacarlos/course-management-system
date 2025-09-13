import LandingPageLayout from '@/Layouts/LandingPageLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
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
        <LandingPageLayout>
            <Head title="Log in" />
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="bg-white rounded-xl overflow-hidden max-w-4xl w-full flex">

                    {/* Left Panel */}
                    <div className="hidden md:flex md:w-1/2 bg-indigo-600 text-white flex-col justify-center p-10">
                        <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                        <p className="mb-6 text-indigo-100">
                            Log in to access your CMS dashboard and manage content efficiently.
                        </p>
                        <div className="text-sm text-indigo-200 mt-auto">
                            &copy; 2025 Your CMS. All rights reserved.
                        </div>
                    </div>

                    {/* Login Form */}
                    <div className="w-full md:w-1/2 p-8 md:p-10">
                        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center md:text-left">
                            Log in
                        </h1>

                        {status && (
                            <div className="mb-4 text-sm text-green-600 text-center md:text-left">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-5">
                            {/* Email */}
                            <div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    autoFocus
                                    required
                                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                            </div>

                            {/* Password */}
                            <div>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                                        errors.password ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                />
                                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                            </div>

                            {/* Remember Me */}
                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition"
                            >
                                Log in
                            </button>

                            {/* Forgot Password */}
                            {canResetPassword && (
                                <div className="text-sm text-right">
                                    <Link
                                        href={route('password.request')}
                                        className="text-indigo-600 hover:underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                            )}
                        </form>

                        {/* Sign Up Link */}
                        <p className="mt-6 text-center text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link
                                href={route('register')}
                                className="text-indigo-600 font-medium hover:underline"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </LandingPageLayout>
    );
}
