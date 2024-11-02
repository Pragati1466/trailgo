// components/AdminServices.jsx
import { useState } from 'react';

const servicesData = [
    {
        stakeholder: "Passenger",
        services: [
            "User Registration and Account Creation",
            "Authentication",
            "Review Booking Details",
            "Profile Management",
            "Search for Available Commodity Space",
            "Filter and Sort Search Results",
            "Book Commodity Space",
            "Modify or Cancel Bookings",
            "Track Shipment in Real Time",
            "Receive Booking Confirmation",
            "Set Custom Alarms and Notifications",
            "Access Booking and Shipment History",
            "Manage Bookings",
            "Purchase Shipment Insurance",
            "Sync Booking with Personal Calendar",
            "Access Live Support",
            "View Frequently Asked Questions",
            "Save Favorite Routes and Preferences",
            "Personalized AI Chatbot Assistant",
            "Provide Feedback and Ratings",
        ],
    },
    {
        stakeholder: "Ticket Manager",
        services: [
            "Manage User Accounts and Permissions",
            "View and Manage Bookings",
            "Generate Booking and Shipment Reports",
            "Monitor Shipment Status",
            "Send Notifications and Updates",
            "Automated Workflow and Task Management",
            "Access Advanced Analytics and Insights",
            "Manage Dynamic Pricing and Promotions",
            "Communicate with Passengers",
            "Resolve Disputes and Handle Queries",
            "Report Frauds to Admin",
            "Optimize Resource Allocation",
        ],
    },
    {
        stakeholder: "Admin",
        services: [
            "Admin Dashboard with System Statistics",
            "User Management",
            "Manage System Settings and Configurations",
            "Generate Comprehensive Reports",
            "Generate Fraud Reports",
            "Add and Manage Cargo Details",
            "Monitor Train Passage and Station Arrival Timings",
            "Check All Passenger Bookings",
            "Send Update Notifications",
            "Check Payment Records",
        ],
    },
];

const ServicesOverview = () => {
    const [expanded, setExpanded] = useState(null);

    const handleToggle = (index:any) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold text-center mb-8">Admin Services Overview</h1>
            <div className="grid gap-8">
                {servicesData.map((section, index) => (
                    <div key={index} className="border rounded-lg shadow-lg p-4">
                        <button
                            onClick={() => handleToggle(index)}
                            className="w-full text-left flex justify-between items-center text-xl font-bold p-4 bg-gray-200 rounded-lg"
                        >
                            {section.stakeholder} Services
                            <span>{expanded === index ? '-' : '+'}</span>
                        </button>
                        {expanded === index && (
                            <ul className="mt-4 pl-6 list-disc space-y-2 text-gray-700">
                                {section.services.map((service, idx) => (
                                    <li key={idx}>{service}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesOverview;
