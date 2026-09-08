import type { Project } from '@/types';

import ShopFlowImg from '../assets/images/shop-flow.jpg';
import DigitalTrustImg from '../assets/images/digital-trust.png';
import ConnectRideImg from '../assets/images/connect-ride.png';
import DineHubImg from '../assets/images/dine-hub.png';
import PetAppImg from '../assets/images/pet-management.png';
import HRMSImg from '../assets/images/hrms.png';
import EventImg from '../assets/images/event.jpg';
import EducationImg from '../assets/images/education.png';
import FurnitureImg from '../assets/images/furniture.png';
import LoanImg from '../assets/images/loan.png';
import courseImg from '../assets/images/course.png';
import socialMediaImg from '../assets/images/social-media.webp';
import weatherImg from '../assets/images/weather.png';

export const projects: Project[] = [
  {
    id: 'shopflow',
    title: 'ShopFlow',
    duration: 'Jan 2026 - Present',
    company: 'Freelance Client',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    description: 'A full-featured e-commerce platform with real-time inventory management, secure payment processing via Stripe, multi-role admin dashboard, and comprehensive analytics reporting.',
    image: ShopFlowImg,
    featured: true,
    role: 'Full Stack Engineer',
    overview:
      'ShopFlow is an end-to-end e-commerce platform I designed and built from scratch to solve the common pain points of growing online stores: scattered inventory, slow checkouts, and blind spot analytics. The platform supports real-time stock sync, a secure Stripe-powered checkout flow, and a role-based admin console that lets store owners and staff manage products, orders, and customers from one place. I focused heavily on performance, keeping Lighthouse scores above 95 across all key pages while maintaining a smooth, animated interface.',
    features: [
      'Real-time inventory tracking with automatic low-stock alerts and restock suggestions',
      'Secure Stripe checkout with support for cards, subscriptions, and order refunds',
      'Multi-role admin dashboard with granular permissions for owners, managers, and support',
      'Comprehensive analytics reporting including revenue, conversion funnels, and churn metrics',
      'Smart product search with fuzzy matching, category filters, and faceted navigation',
      'Automated order status emails and real-time customer notifications via webhooks',
    ],
    outcomes: [
      { label: 'Peak Lighthouse', value: '98' },
      { label: 'Checkout Conversion', value: '+32%' },
      { label: 'Core Features', value: '12+' },
      { label: 'Avg Page Load', value: '<1.2s' },
    ],
    live: '',
    github: '',
  },
  {
    id: 'connectRide',
    title: 'Connect Ride',
    duration: 'Jun 2026 - Present',
    company: 'Freelance Client',
    tech: ['Nest.js', 'TypeScript', 'Microservices', 'Postgres'],
    description: 'Connect Ride is a taxi booking platform connecting passengers with individual drivers and taxi companies, featuring booking, verification, live tracking, payments, and ride management.',
    image: ConnectRideImg ,
    featured: true,
    role: 'Backend Developer',
    overview:
      `Connect Ride is a comprehensive online taxi booking platform designed to connect passengers with individual drivers and registered taxi companies. I worked on building a seamless ride-booking experience with separate onboarding and management flows for individual drivers and taxi companies. The platform includes driver and vehicle verification, document and license validation, ride booking and confirmation, real-time ride tracking, secure payment and withdrawal workflows, earnings management, and post-ride reviews. The system is designed to manage the complete taxi-booking lifecycle, from driver registration and verification to ride completion and earnings settlement.`,
    features: [
      'Separate registration flows for individual drivers and taxi companies.',
      'Document, license, and vehicle registration verification.',
      'Ride requests, confirmations, status updates, and cancellations.',
      'Live driver and ride tracking with real-time location updates.',
      'Secure ride payments and driver earnings withdrawal.',
      'Driver earnings management and passenger ratings/reviews.',
      'Real-time ride notifications and role-based management.'
    ],
    outcomes: [
      { label: 'Ride Management Flows', value: '5+' },
      { label: 'Faster Ride Confirmation', value: '40%' },
      { label: 'Safety & Verification Checks', value: '10+' },
      { label: 'Customer Support', value: '24*7' },
    ],
    live: '',
    github: '',
  },
  {
    id: 'digitalTrustPlatform',
    title: 'Digital Trust Platform',
    duration: 'Feb 2025 - Apr 2026',
    company: 'Esparkbiz Technologies',
    tech: ['Nest.js', 'Microservices', 'AWS', 'Redis', 'PostgreSQL'],
    description: 'A digital trust and verification platform that enables secure identity, organization, asset, and transaction verification through validated data, cryptographic proof, and auditable workflows.',
    image: DigitalTrustImg,
    featured: true,
    role: 'Backend Engineer',
    overview:
      'An enterprise-grade verification platform designed to establish trusted digital identities and verifiable real-world data before allowing high-value workflows to proceed. The platform combines identity verification, business verification, validated data tokens, secure transactions, digital agreements, and audit capabilities into a unified ecosystem. I worked on building and integrating multiple platform services, including identity and organization onboarding, verification workflows, token-based data validation, transaction processing, API integrations, and asynchronous webhook-driven workflows.',
    features: [
      'Secure KYC/KYB workflows for individuals and organizations.',
      'Converts verified information into structured, traceable, and tamper-evident digital proof.',
      'Supports verified payments, agreements, approvals, and transaction workflows.',
      'Enables secure document, payment, and agreement execution with identity verification.',
      'Provides verification history, provenance, lifecycle status, and independently verifiable records.',
      'Integrates verification and transaction capabilities with external applications through APIs and event-driven webhooks.',
      'Supports different workflows and permissions for individuals, organizations, administrators, and integrated systems.'
    ],
    outcomes: [
      { label: 'Verification Workflow', value: '3+' },
      { label: 'Faster Verification Processing', value: '40%' },
      { label: 'Core Components', value: '6+' },
      { label: 'Improved API Response Performance', value: '25%' },
    ],
    live: 'https://chainit.com/product/chainit-id/#',
    github: '',
  },
  {
    id: 'dine-hub',
    title: 'DineHub',
    duration: 'Jan 2026 - Jan 2026',
    company: 'Freelance Client',
    tech: ['React.js', 'Tailwind', 'UI/UX'],
    description: 'A modern and responsive restaurant website designed to showcase the brand, menu, dining experience, and services while providing customers with an intuitive digital experience.',
    image: DineHubImg,
    featured: false,
    role: 'UI/UX Developer',
    overview:
      'Developed the frontend of a modern restaurant website focused on delivering an engaging and seamless customer experience. The platform presents the restaurant\'s brand, menu, food offerings, locations, and services through a visually appealing and responsive interface. The website was designed with a mobile-first approach, intuitive navigation, reusable UI components, and optimized layouts to provide a consistent experience across desktop, tablet, and mobile devices.',
    features: [
      'Present food items with categories, descriptions, pricing, and visual content',
      'Highlight the restaurant\'s brand, ambience, offerings, and dining experience',
      'Deliver a consistent and optimized experience across desktop, tablet, and mobile devices',
      'Provide restaurant locations, contact information, opening hours, and directions',
      'Showcase special offers, popular dishes, seasonal items, and featured content'
    ],
    outcomes: [
      { label: 'Responsive Design', value: '100%' },
      { label: 'Reusable UI Components', value: '20+' },
      { label: 'Interactive Sections', value: '5+' },
      { label: 'Experience', value: 'Mobile-First' },
    ],
    live: 'https://niteshgupta5.github.io/DineHub/',
    github: '',
  },
  {
    id: 'veterinaryManagement',
    title: 'Veterinary Management SaaS',
    duration: 'Jun 2024 - Dec 2025',
    company: 'Esparkbiz Technologies',
    tech: ['Electron.js', 'Node.js', 'Postgres', 'JWT'],
    description: 'A comprehensive veterinary practice management platform designed to streamline pet care, appointments, patient records, evaluations, billing, and clinic operations.',
    image: PetAppImg,
    featured: false,
    role: 'Full Stack Developer',
    overview:
      'Veterinary Management SaaS is a full-featured platform built for veterinary professionals to manage patients, appointments, clinical evaluations, billing, contacts, locations, and historical records from a centralized system. The platform streamlines day-to-day veterinary operations while providing structured access to patient information and care history.',
    features: [
      'Manage pet profiles, owners, medical information, and complete patient histories',
      'Schedule, manage, and track veterinary appointments with streamlined workflows',
      'Record patient assessments, treatment details, chiropractic point mapping, and evaluation history',
      'Comprehensive patient record and visit history management',
      'Manage multiple clinic locations, contacts, and operational information',
      'Create and manage invoices and track financial transactions',
      'Control access to platform features based on user roles and responsibilities',
      'Organize and securely manage large volumes of veterinary and operational data'
    ],
    outcomes: [
      { label: 'Patient Records', value: '500+' },
      { label: 'Faster Appointment Management', value: '40%' },
      { label: 'Reduced Administrative Work', value: '30%' },
      { label: 'Clinical & Management Features', value: '25+' },
    ],
    live: 'https://pet-dev.taskgrids.com',
    github: '',
  },
  {
    id: 'hrms',
    title: 'Employee Management HRMS',
    duration: 'Aug 2023 - May 2024',
    company: 'Glasier Inc.',
    tech: ['Next.js', 'Nest.js', 'Express.js', 'MongoDB'],
    description: 'A comprehensive HRMS SaaS platform for managing employees, attendance, leave, shifts, training, and workforce operations through a centralized system.',
    image: HRMSImg,
    featured: false,
    role: 'Full Stack Engineer',
    overview:
      'Employee Management HRMS is a centralized workforce management platform designed to streamline HR operations and employee administration. The system enables organizations to manage employee records, attendance, leave requests, shift schedules, training programs, and role-based access from a unified platform. The platform automates repetitive HR workflows, provides managers with better visibility into workforce activities, and gives employees self-service access to their attendance, leave, schedules, and training information.',
    features: [
      'Centralized employee profiles, departments, roles, and employment information',
      'Track employee attendance, working hours, and attendance history',
      'Leave requests, approvals, balances, and leave history',
      'Create and manage employee shifts and work schedules',
      'Manage training programs, employee assignments, and completion status',
      'Different permissions and workflows for administrators, HR teams, managers, and employees',
      'Employees can access their profiles, attendance, leave, schedules, and training information',
      'Centralized dashboards and reports for workforce insights and HR operations'
    ],
    outcomes: [
      { label: 'Reduced HR Administration', value: '30%' },
      { label: 'HR Management Modules', value: '8+' },
      { label: 'User Roles', value: '4+' },
      { label: 'Improved Employee Experience', value: '25%' },
    ],
    live: '',
    github: '',
  },
  {
    id: 'eventManagement',
    title: 'Event Management & Ticketing Platform',
    duration: 'Aug 2023 - Nov 2024',
    company: 'Freelance Client',
    tech: ['React.js', 'Node.js', 'TypeScript', 'MongoDB'],
    description: 'A comprehensive event management and ticketing platform for creating, managing, discovering, and booking events with flexible ticket categories and secure online payments.',
    image: EventImg,
    featured: false,
    role: 'Full Stack Developer',
    overview:
      'The Event Management Platform is a full-featured solution designed to simplify event creation, ticket management, bookings, and attendee administration. The platform provides an administrative portal for managing events and generating different ticket categories, while users can browse events, select suitable ticket types, complete bookings, and make secure online payments. The system includes role-based access control, event lifecycle management, flexible ticketing options such as VIP and Premium, booking management, payment processing, and centralized administration for managing the complete event and ticketing workflow.',
    features: [
      'Create, publish, update, and manage events from the admin portal',
      'Generate and manage multiple ticket categories such as VIP, Premium, General, and other custom tiers',
      'Users can browse events, select ticket types, and complete bookings',
      'Integrated online payment processing for ticket purchases',
      'Track ticket bookings, availability, orders, and attendee information',
      'Browse and explore upcoming events with relevant event details',
    ],
    outcomes: [
      { label: 'Digital Ticketing', value: '100%' },
      { label: 'Ticket Categories', value: 'Custom' },
      { label: 'Event Management Modules', value: '6+' },
      { label: 'UX Score', value: '4.9/5' },
    ],
    live: '',
    github: '',
  },
  {
    id: 'educationManagement',
    title: 'University & Education Management SaaS Platform',
    duration: 'Mar 2023 - Sep 2023',
    company: 'Glasier Inc.',
    tech: ['React.js', 'UI/UX', 'TypeScript', 'MongoDB'],
    description: 'A comprehensive higher education management platform for universities and affiliated colleges, covering student lifecycle, academic operations, administration, compliance, and campus services through a unified system.',
    image: EducationImg,
    featured: false,
    role: 'Frontend Developer',
    overview:
      'The University & Education Management Platform is an enterprise SaaS solution designed to centralize the management of universities and their affiliated colleges. It enables universities to manage multiple affiliated institutions, campuses, academic structures, users, and operations from a unified platform while allowing each college to manage its own day-to-day activities. The platform supports the complete student lifecycle, from admission and multi-stage onboarding through academic management and student services. Dedicated portals provide universities, colleges, students, teachers, and staff with role-specific access to their respective workflows and information. The system also integrates essential academic and campus operations including attendance, timetable and scheduling, compliance management, library, canteen, hostel management, dashboards, reporting, and many other institutional workflows.',
    features: [
      'Manage university-level information, academic structures, affiliated institutions, and centralized operations',
      'Manage multiple colleges and their branches under a university with institution-specific data and workflows',
      'Manage admissions through configurable phases, documentation, verification, and student onboarding workflows',
      'Handle faculty and staff profiles, departments, responsibilities, and institutional assignments',
      'Manage attendance, subjects, classes, timetables, schedules, and academic sessions',
      'Granular permissions based on organizational hierarchy, roles, and responsibilities',
      'Institutional compliance processes, records, documentation, and requirements',
      'Manage library resources & circulation, canteen and hostel allotment & operations'
    ],
    outcomes: [
      { label: 'Dedicated Portals', value: '5+' },
      { label: 'Management Modules', value: '15+' },
      { label: 'Institution Structure', value: 'Multi-Level' },
      { label: 'Student Lifecycle', value: 'End-to-End' },
    ],
    live: '',
    github: '',
  },
  {
    id: 'adichwalFurniture',
    title: 'Adichwal Furniture — E-commerce Website',
    duration: 'Oct 2023 - Dec 2023',
    company: 'Freelance Client',
    tech: ['Next.js', 'UI/UX', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    description: 'A modern e-commerce platform for browsing and purchasing premium solid-wood furniture, featuring product discovery, category-based navigation, customization options, and a seamless shopping experience.',
    image: FurnitureImg,
    featured: false,
    role: 'Frontend Developer',
    overview:
      'Adichwal Furniture is a modern e-commerce platform built to showcase and sell premium solid-wood furniture across multiple categories, including living room, bedroom, dining, storage, home office, and outdoor furniture. The platform provides customers with an intuitive shopping experience through structured product categories, new arrivals, best sellers, product collections, promotional pricing, product customization, and responsive interfaces across devices. As a Frontend Developer, I contributed to building and refining the customer-facing experience, focusing on responsive UI, reusable components, product discovery, interactive shopping flows, and performance-oriented frontend implementation.',
    features: [
      'Browse furniture through categories, collections, new arrivals, and best sellers',
      'Detailed product listings with images, pricing, discounts, specifications, and descriptions',
      'Support for customized furniture requirements, including available sizes, materials, and finishes',
      'Smooth cart management and streamlined purchasing experience',
      'Optimized shopping experience across desktop, tablet, and mobile devices',
      'Dedicated sections for offers, featured collections, and promotional products'
    ],
    outcomes: [
      { label: 'Shopping Categories', value: '6+' },
      { label: 'UI Components', value: '25+' },
      { label: 'Responsive Design', value: '100%' },
      { label: 'Optimized Page Experience', value: '< 2s' },
    ],
    live: 'https://www.adichwalfurniture.com/',
    github: '',
  },
  {
    id: 'digitalLoan',
    title: 'Digital Loan Management Platform',
    duration: 'Mar 2023 - May 2023',
    company: 'Glasier Inc.',
    tech: ['React.js', 'UI/UX', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    description: 'A digital loan management platform that streamlines loan applications, identity verification, credit assessment, approval workflows, and application tracking through a centralized system.',
    image: LoanImg,
    featured: false,
    role: 'Frontend Developer',
    overview:
      'The Loan Management Platform enables users to apply for loans digitally and complete the required verification and assessment processes through a guided workflow. The platform handles user registration, identity and document verification, credit score assessment, eligibility checks, and multiple stages of loan processing. Users can track their application status through a centralized dashboard, while administrators and authorized teams can manage applications, verification stages, documentation, and approval workflows.',
    features: [
      'Secure onboarding and management of applicant information',
      'Digital verification of required documents and identity information, including Aadhaar and PAN',
      'CIBIL/credit score checks and eligibility assessment as part of the loan evaluation process',
      'Guided application, verification, assessment, approval, and processing stages',
      'Track loan applications, verification status, pending requirements, and application progress',
      'Manage loan details, submitted documents, verification records, and application history'
    ],
    outcomes: [
      { label: 'Loan Processing Stages', value: '6+' },
      { label: 'Digital Application', value: '100%' },
      { label: 'Verification Workflows', value: '3+' },
      { label: 'Identity & Data Handling', value: 'Secure' },
    ],
    live: '',
    github: '',
  },
  {
    id: 'coursePlatform',
    title: 'Online Learning & Course',
    duration: 'Dec 2023 - Feb 2024',
    company: 'Glasier Inc.',
    tech: ['Nest.js', 'RestAPI', 'TypeScript', 'MongoDB', 'JWT', 'Socket.io'],
    description: 'A comprehensive online learning platform for discovering, purchasing, and completing courses with structured modules, video lessons, assessments, progress tracking, and digital certification.',
    image: courseImg,
    featured: false,
    role: 'Backend Developer',
    overview:
      'The Online Learning Platform is a complete e-learning solution that enables users to discover courses, register and make payments, follow structured learning paths, complete video lessons, take module and final assessments, and earn certificates upon successful course completion. The platform includes a powerful administrative portal where administrators can create and manage courses, organize content into modules and video lessons, review and approve courses, and monitor learner activity. Real-time course progress tracking provides users and administrators with visibility into learning progress and completion status.',
    features: [
      'Browse and search available courses based on relevant categories and requirements',
      'Admins can create courses, organize content into modules, and add video-based lessons',
      'Review and approve courses before making them available to learners',
      'Track course, module, and lesson completion with real-time progress updates',
      'Automatically generate certificates for learners who successfully complete the required course criteria',
      'Integrated payment workflows for course registration and purchases'
    ],
    outcomes: [
      { label: 'courses', value: 'Custom' },
      { label: 'Digital Certification', value: '100%' },
      { label: 'Learning Modules', value: '8+' },
      { label: 'Course Progress', value: 'Real-Time' },
    ],
    live: '',
    github: '',
  },
  {
    id: 'socialMediaApplication',
    title: 'Social Media Application',
    duration: 'Dec 2022 - Feb 2023',
    company: 'Personal Project',
    tech: ['React.js', 'Node.js', 'Tailwind', 'MongoDB', 'Socket.io'],
    description: 'A feature-rich social media platform enabling users to create and share content, connect with others, interact through posts and messaging, and engage through real-time social experiences.',
    image: socialMediaImg,
    featured: false,
    role: 'MERN Stack Developer',
    overview:
      'The Social Media Platform is a full-featured social networking application designed to provide users with an interactive environment for content sharing, social connections, communication, and community engagement. Users can create and manage posts, interact with content, connect with other users, communicate through real-time messaging, and receive notifications for relevant activities. The platform also includes authentication, user profiles, privacy controls, and scalable API-driven social workflows.',
    features: [
      'Create profiles, manage connections, and build personalized social networks',
      'Create, edit, and share posts with text, images, and other supported content',
      'Like, comment, share, and interact with content across the platform',
      'Communicate with other users through real-time one-to-one conversations',
      'Receive real-time notifications for interactions, connections, messages, and other social activities',
      'Secure authentication with user-specific access and privacy controls'
    ],
    outcomes: [
      { label: 'Social Features', value: '20+' },
      { label: 'Messaging', value: 'Real-Time' },
      { label: 'Responsive UI', value: '100%' },
    ],
    live: 'https://niteshgupta5-instaapp.cyclic.app/',
    github: '',
  },
  {
    id: 'weatherApplication',
    title: 'Weather Application',
    duration: 'Nov 2022 - Nov 2022',
    company: 'Personal Project',
    tech: ['React.js', 'Tailwind', 'Third-party API'],
    description: 'A responsive weather application providing real-time weather conditions, forecasts, location-based weather information, and essential environmental data through an intuitive interface.',
    image: weatherImg,
    featured: false,
    role: 'Frontend Developer',
    overview:
      'The Weather Application provides users with real-time weather information based on their selected or current location. The application integrates weather APIs to retrieve and display current conditions, temperature, humidity, wind information, and forecast data through a clean and responsive interface. The application focuses on fast data retrieval, intuitive weather visualization, responsive design, and a seamless experience across desktop and mobile devices.',
    features: [
      'Display real-time temperature, weather conditions, humidity, wind, and other weather information',
      'Search for cities and retrieve weather information for selected locations',
      'Display upcoming weather conditions and forecast informationns',
      'Integrate third-party weather APIs for real-time weather data',
      'Optimized experience across desktop, tablet, and mobile devices'
    ],
    outcomes: [
      { label: 'Weather Data', value: 'Real-Time' },
      { label: 'Weather Metrics', value: '5+' },
      { label: 'Responsive UI', value: '100%' },
    ],
    live: 'https://niteshgupta5.github.io/weather-app/',
    github: '',
  },
];
