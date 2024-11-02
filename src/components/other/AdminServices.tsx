const AdminServices = () => {
    return (
        <>
            <section className="overflow-hidden bg-white py-8 sm:py-16">
                <div className="mx-auto max-w-7xl ">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Streamline Your Operations</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Admin Services Overview</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">Comprehensive services tailored for efficient management of the railway commodity reservation system.</p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">🔍 Booking Oversight</dt>
                                        <dd className="inline">Monitor and review all passenger bookings, including modifications and cancellations.</dd>
                                    </div>
                                    
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">⚙️ System Configuration</dt>
                                        <dd className="inline">Manage system settings and configurations for optimal performance.</dd>
                                    </div>
                                    
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">🚦 Train Monitoring</dt>
                                        <dd className="inline">Check train passages, station arrival timings, and overall logistics.</dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">💳 Payment Management</dt>
                                        <dd className="inline">Access and verify payment records for bookings and shipments.</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get Started</a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-700">Schedule a Demo <span aria-hidden="true">→</span></a>
                            </div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Admin dashboard" className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
                    </div>
                </div>
            </section>

        </>
    );
}

export default AdminServices;