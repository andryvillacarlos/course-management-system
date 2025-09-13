import LandingPageLayout from '@/Layouts/LandingPageLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <LandingPageLayout>
            <Head title="Register" />
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row">
                    
                    {/* Left Panel */}
                    <div className="hidden md:flex md:w-1/2 bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white flex-col justify-center p-10 space-y-6">
                        <h2 className="text-3xl font-bold">Welcome to Your CMS</h2>
                        <p className="text-indigo-100">
                            Join as a student to start managing and accessing your content easily.
                        </p>
                        <ul className="list-disc list-inside text-indigo-200 space-y-1">
                            <li>Access courses and materials</li>
                            <li>Track your progress</li>
                            <li>Collaborate with teachers</li>
                            <li>Receive notifications</li>
                        </ul>
                        <p className="text-sm text-indigo-200 mt-auto">
                            Teachers are added by admin only. &copy; 2025 Your CMS
                        </p>
                    </div>

                    {/* Registration Form */}
                    <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center md:text-left">
                            Create Your Account
                        </h1>

                        <form onSubmit={submit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Full Name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                    autoFocus
                                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                                        errors.name ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
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
                                    name="password"
                                    type="password"
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

                            {/* Confirm Password */}
                            <div>
                                <input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                                        errors.password_confirmation ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                />
                                {errors.password_confirmation && (
                                    <p className="mt-1 text-sm text-red-500">{errors.password_confirmation}</p>
                                )}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
                            >
                                Register
                            </button>

                            <div className="text-sm text-center text-gray-600">
                                Already registered?{' '}
                                <Link href={route('login')} className="text-indigo-600 hover:underline">
                                    Log in
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LandingPageLayout>
    );
}
