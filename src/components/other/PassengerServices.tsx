// /pages/passengerServices.jsx or /components/PassengerServices.jsx

import React from 'react';

const PassengerServices = () => {
  const passengerServices = [
    { title: "User Account Management", description: "Register, authenticate, and manage your profile with secure access to your booking details." },
    { title: "Commodity Space Booking", description: "Search, filter, and book space for your commodities easily, with flexible options to modify or cancel bookings." },
    { title: "Real-Time Shipment Tracking", description: "Monitor your shipment status in real-time with live updates and notifications." },
    { title: "Booking Confirmation & History", description: "Receive instant booking confirmations and access a comprehensive history of all bookings and shipments." },
    { title: "Custom Alerts & Notifications", description: "Set up custom alerts to stay updated on your shipment and booking status." },
    { title: "Purchase Shipment Insurance", description: "Opt for insurance coverage for additional security of your commodities during transit." },
    { title: "Sync with Personal Calendar", description: "Add booking dates directly to your calendar for streamlined planning." },
    { title: "Live Customer Support", description: "Access 24/7 support for all your queries and assistance needs." },
    { title: "Personalized Preferences", description: "Save favorite routes, set preferences, and access a personalized AI chatbot for assistance and tailored recommendations." },
    { title: "Feedback & Ratings", description: "Share feedback and rate services to improve your experience and help others." },
  ];

  return (
    <>
      <section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
              Passenger Services </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
              Enhance your experience with advanced features
            </p>
          </div>
          <div
            className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                <i className="fa-solid fa-chart-column text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">User Account Management</h3>
              <p className="mt-5 text-base text-gray-600">
                Register, authenticate, and manage your profile with secure access to your booking details.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                <i className="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Commodity Space Booking</h3>
              <p className="mt-5 text-base text-gray-600">
                Search, filter, and book space for your commodities easily, with flexible options to modify or cancel bookings.

              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                <i className="fa-solid fa-shield text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Real-Time Shipment Tracking</h3>
              <p className="mt-5 text-base text-gray-600">
                Monitor your shipment status in real-time with live updates and notifications.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                <i className="fa-solid fa-cloud text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Booking Confirmation & History</h3>
              <p className="mt-5 text-base text-gray-600">
                Receive instant booking confirmations and access a comprehensive history of all bookings and shipments.

              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
                <i className="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Custom Alerts & Notifications</h3>
              <p className="mt-5 text-base text-gray-600">
                Set up custom alerts to stay updated on your shipment and booking status.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
                <i className="fa-solid fa-bolt text-3xl text-gray-900"></i>
              </div>
              <h3 className="mt-12 text-xl font-bold text-gray-900">Purchase Shipment Insurance</h3>
              <p className="mt-5 text-base text-gray-600">
                Opt for insurance coverage for additional security of your commodities during transit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <div className={styles.container}>
        <h1 className={styles.title}>Passenger Services</h1>
        <div className={styles.grid}>
          {passengerServices.map((service, index) => (
            <div key={index} className={styles.card}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default PassengerServices;
