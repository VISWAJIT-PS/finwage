
import React, { useState } from 'react';
import { Globe } from './components';

// SVG components
const FinWageLogo = ({ className }: { className?: string }) => (
    <img src='./assets/logo.svg' className={className} alt="FinWage Logo" />
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const Header = () => {
    const [showLoginBanner, setShowLoginBanner] = useState(true);
    const navItems = [
        { name: 'Employers', href: '#employers' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Our Partners', href: '#our-partners' },
        { name: 'Resources', href: '#resources' }
    ];
    return (
        <>
            {/* Login Banner - FinWage Pattern */}
            {showLoginBanner && (
                <div className="bg-[#1d44c3] text-white py-2 px-6 relative animate-slideDown">
                    <div className="container mx-auto flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                            <span>Are you an employee?</span>
                            <a href="#" className="font-semibold hover:text-[#f64162] transition-colors flex items-center gap-1">
                                Log in or sign up
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg>
                            </a>
                        </div>
                        <button 
                            onClick={() => setShowLoginBanner(false)}
                            className="text-white/80 hover:text-white transition-colors"
                            aria-label="Close banner"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                        </button>
                    </div>
                </div>
            )}
            
            <header className="bg-white/98 backdrop-blur-strong sticky top-0 z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
            <div className="container mx-auto px-6 py-5 flex justify-between items-center">
                <div className="flex items-center space-x-12">
                    <FinWageLogo className="h-10" />
                    <nav className="hidden lg:flex items-center space-x-10">
                        {navItems.map(item => (
                            <a key={item.name} href={item.href} className="text-gray-800 hover:text-[#1d44c3] text-sm font-semibold flex items-center group transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#f64162] after:transition-all after:duration-300 hover:after:w-full pb-1">
                                {item.name}
                                <span className="group-hover:rotate-180 transition-transform duration-300"><ChevronDownIcon /></span>
                            </a>
                        ))}
                         <a href="#for-employees" className="text-gray-800 hover:text-[#1d44c3] text-sm font-semibold transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#f64162] after:transition-all after:duration-300 hover:after:w-full pb-1">For Employees</a>
                    </nav>
                </div>
                <div className="flex items-center space-x-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 hover:text-[#1d44c3] cursor-pointer transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <a href="#" className="text-gray-800 hover:text-[#1d44c3] text-sm font-semibold transition-all duration-300">Log in</a>
                    <a href="#" className="bg-[#1d44c3] text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-[#3c65d6] transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5 active:scale-95">
                        Get a Demo
                    </a>
                </div>
            </div>
        </header>
        </>
    );
};


const Hero = () => {
    const [showVideoModal, setShowVideoModal] = useState(false);
    
    return (
        <>
            <section className="py-10 lg:py-20 overflow-hidden relative" style={{
                backgroundImage: 'url(./assets/hero_bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                {/* Background overlay for better text readability */}
                <div className="absolute inset-0"></div>
            <div className="container mx-auto px-6 relative z-10 flex flex-row-reverse justify-between">
                <div className="text-left animate-fadeIn">
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1d44c3] leading-[1.1] animate-slideUp tracking-tight">
                        Your Money, <br/>
                        <span className="inline-flex items-center gap-2">
                            Your Control. 
                            {/* <span className="inline-block w-16 h-16 relative">
                                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f64162" strokeWidth="2" strokeDasharray="5,5"/>
                                </svg>
                            </span> */}
                        </span>
                    </h1>
                    <p className="mt-8 text-[#1d44c3] font-bold text-xl tracking-wide"></p>
                    <p className="mt-5 text-gray-800 text-lg leading-relaxed max-w-md bg-white p-[20px] rounded-[25px] shadow-lg">
                      Work Today, Get Paid Today! A financial wellness benefit that helps employees access their earned wages while saving employers time and money
                    </p>
                </div>
                <div className="relative flex justify-center items-center animate-fadeIn">
                    {/* Video Container - FinWage Pattern */}
                    <div 
                        className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-pointer group transform hover:scale-[1.02] transition-all duration-500"
                        onClick={() => setShowVideoModal(true)}
                    >
                        <img src="./assets/hero-video-thumbnail.jpg" alt="Video thumbnail" className="w-full h-full object-cover" />
                        <div className="absolute inset-0  from-[#1d44c3]/40 to-[#1d44c3]/60 group-hover:from-[#1d44c3]/50 group-hover:to-[#1d44c3]/70 transition-all duration-500 flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-full group-hover:scale-110 transition-all duration-300 shadow-2xl">
                                <svg className="w-12 h-12 text-[#f64162] ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    {/* Notification Card */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl flex items-center space-x-4 animate-bounce-slow hover:scale-110 transition-all duration-300 border border-gray-100 group cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#f64162] to-[#fa7892] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:rotate-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-[#1d44c3] uppercase tracking-wide">FinWage</p>
                            <p className="text-sm text-gray-800 font-medium">Your FinWage balance went up!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Video Modal - FinWage Pattern */}
        {showVideoModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn" onClick={() => setShowVideoModal(false)}>
                <div className="relative w-full max-w-5xl mx-4" onClick={(e) => e.stopPropagation()}>
                    <button 
                        onClick={() => setShowVideoModal(false)}
                        className="absolute -top-12 right-0 text-white hover:text-[#f64162] transition-colors"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                    <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                        <video controls autoPlay className="w-full h-full">
                            <source src="https://dummy.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

const Platform = () => {
    return (
        <section id="solutions" className="bg-gradient-to-b from-white via-gray-50 to-white pt-12 pb-32 flex flex-col items-center justify-center px-16">
               <h2 className="font-serif text-4xl lg:text-5xl text-[#1d44c3] font-bold mb-8 animate-slideUp">Our Platform</h2>
               <div className=" flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">

            <div className="container mx-auto px-6 text-center max-w-4xl flex flex-col items-start">
                 <p className="text-gray-800 text-left text-xl lg:text-md leading-relaxed font-medium tracking-wide animate-slideUp align-left">
                   FinWage is revolutionizing the way people get paid by creating a platform that empowers both employers and employees. For employers, it provides smarter tools to attract, retain, and engage talent. For employees, it opens new ways to earn, save, and grow their financial well-being — helping every individual approach life’s important moments with greater confidence and stability.
                 </p>
                 <a href="#" className="mt-12 inline-flex items-center gap-2 bg-[#1d44c3] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#3c65d6] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 active:scale-95 group ">
                     Explore Platform
                 </a>
            </div>
            <div className="container mx-auto px-6 mt-20 relative">
                 <img src="./assets/second.jpg" alt="FinWage Platform on desktop" className="rounded-3xl shadow-2xl mx-auto hover:shadow-4xl transition-all duration-500 border-8 border-white transform hover:scale-[1.02] animate-scale-in" />
                 <div className="absolute -bottom-24 right-0 lg:right-20 flex items-center gap-4">
                    <img src="./assets/mobile.png" alt="FinWage on mobile" className="w-28 lg:w-32 z-10 mr-[18rem] lg:mr-[18rem] hover:scale-110 transition-all duration-500 shadow-2xl rounded-3xl animate-slideInRight" />
                    <img src="./assets/desktop.png" alt="Cashier" className="w-32 h-32 lg:w-64 lg:h-64 object-cover rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-500 border-6 border-white transform hover:scale-105" />
                 </div>
            </div>

               </div>
        </section>
    );
};

const HowItWorks = () => {
    const WorkIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125V6.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v.001c0 .621.504 1.125 1.125 1.125z" />
        </svg>
    );
    const EarnIcon = () => (
         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1d44c3" viewBox="0 0 256 256" className="h-12 w-12" aria-hidden="true">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path>
        </svg>
    );
    const AccessPayIcon = () => (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5h6M9 10.5h6m-6 3H12" />
        </svg>
    );
    const PeaceOfMindIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    );

    const steps = [
        { title: "Work", description: "Put in the hours and do what you do best. Your earnings accumulate with every shift.", icon: <WorkIcon /> },
        { title: "Earn", description: "Your available earnings update in the FinWage app after each workday. No more waiting.", icon: <EarnIcon /> },
        { title: "Peace of Mind", description: "Take control of your finances, pay bills on time, and reduce financial stress.", icon: <AccessPayIcon /> },
        { title: "Access Pay", description: "Instantly transfer your earned pay to any bank account, debit card, or prepaid card, 24/7.", icon: <PeaceOfMindIcon /> },
    ];

    const animationStyle = `
        @keyframes draw-line-horizontal { from { width: 0; } to { width: 100%; } }
        @keyframes draw-line-vertical { from { height: 0; } to { height: 100%; } }
        .connector-h { animation: draw-line-horizontal 0.5s ease-out forwards; }
        .connector-v { animation: draw-line-vertical 0.5s ease-out forwards; }
        
        .step-card { opacity: 0; animation: fadeIn 0.6s ease-out forwards, slideUp 0.6s ease-out forwards; }
        .step-card-1 { animation-delay: 0s; }
        .connector-1 { animation-delay: 0.3s; }
        .step-card-2 { animation-delay: 0.6s; }
        .connector-2 { animation-delay: 0.9s; }
        .step-card-3 { animation-delay: 1.2s; }
        .connector-3 { animation-delay: 1.5s; }
        .step-card-4 { animation-delay: 1.8s; }
    `;

    return (
        <section className="py-20 lg:py-32 relative min-h-screen flex items-center justify-center" style={{
            backgroundImage: 'url(./assets/cycle.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            {/* Background overlay for better readability */}
            <div className="absolute inset-0"></div>
            <style>{animationStyle}</style>
            <div className="container mx-auto px-6 relative z-10">
                {/* Centered title in the middle of the cycle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                    <h2 className="font-serif text-4xl lg:text-5xl text-[#1d44c3] font-bold">FinWage Cycle</h2>
                </div>

                {/* Four cards positioned in a cycle */}
                <div className="relative w-full h-[600px]">
                    {/* Card 1 - Work (Top Left) */}
                    <div className="absolute top-0 left-0 step-card step-card-1 text-center flex flex-col items-center max-w-xs bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                        <div className="relative  flex items-center justify-center w-24 h-24 rounded-full shadow-sm mb-2 transform hover:scale-105 transition-transform duration-300">
                            <div className="relative text-[#1d44c3]">
                                <WorkIcon />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-[#1d44c3] mb-2">{steps[0].title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{steps[0].description}</p>
                    </div>

                    {/* Card 2 - Earn (Top Right) */}
                    <div className="absolute top-0 right-0 step-card step-card-2 text-center flex flex-col items-center max-w-xs bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                        <div className="relative  flex items-center justify-center w-24 h-24 rounded-full shadow-sm mb-2 transform hover:scale-105 transition-transform duration-300">
                            {/* <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-full"></div> */}
                            <div className="relative text-[#1d44c3]">
                                <EarnIcon />
                            </div>
                            {/* <div className="absolute -top-3 -right-1 bg-[#1d44c3] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-3 border-white shadow-md">
                                2
                            </div> */}
                        </div>
                        <h3 className="text-lg font-bold text-[#1d44c3] mb-2">{steps[1].title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{steps[1].description}</p>
                    </div>

                    {/* Card 3 - Peace of Mind (Bottom Left) */}
                    <div className="absolute bottom-0 left-0 step-card step-card-3 text-center flex flex-col items-center max-w-xs bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                        <div className="relative  flex items-center justify-center w-24 h-24 rounded-full shadow-sm mb-2 transform hover:scale-105 transition-transform duration-300">
                            <div className="relative text-[#1d44c3]">
                                <AccessPayIcon />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-[#1d44c3] mb-2">{steps[2].title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{steps[2].description}</p>
                    </div>

                    {/* Card 4 - Access Pay (Bottom Right) */}
                    <div className="absolute bottom-0 right-0 step-card step-card-4 text-center flex flex-col items-center max-w-xs bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                        <div className="relative  flex items-center justify-center w-24 h-24 rounded-full shadow-sm mb-2 transform hover:scale-105 transition-transform duration-300">
                            <div className="relative text-[#1d44c3]">
                                <PeaceOfMindIcon />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-[#1d44c3] mb-2">{steps[3].title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{steps[3].description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Testimonials = () => {
    const testimonialsData = [
      { quote: "The AI-driven analytics from FinWage have revolutionized our product development cycle. Insights are now more accurate and faster than ever. A game-changer for tech companies.", name: "Alex Rivera", title: "CTO at InnovateTech", avatarUrl: "https://randomuser.me/api/portraits/men/91.jpg" },
      { quote: "Implementing FinWage's customer prediction model has drastically improved our targeting strategy. We're seeing a 50% increase in conversion rates! Highly recommend their solutions.", name: "Samantha Lee", title: "Marketing Director at NextGen Solutions", avatarUrl: "https://randomuser.me/api/portraits/women/12.jpg" },
      { quote: "As a startup, we need to move fast and stay ahead. FinWage's automated assistant helps us do just that. Our development speed has doubled. Essential tool for any startup.", name: "Raj Patel", title: "Founder & CEO at StartUp Grid", avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg" },
      { quote: "FinWage's AI-driven voice synthesis has made creating global products a breeze. Localization is now seamless and efficient. A must-have for global product teams.", name: "Emily Chen", title: "Product Manager at Digital Wave", avatarUrl: "https://randomuser.me/api/portraits/women/83.jpg" },
      { quote: "Leveraging FinWage's AI for our financial models has given us an edge in predictive accuracy. Our investment strategies are now powered by real-time data analytics.", name: "Michael Brown", title: "Data Scientist at FinTech Innovations", avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg" },
      { quote: "FinWage's supply chain optimization tools have drastically reduced our operational costs. Efficiency and accuracy in logistics have never been better.", name: "Linda Wu", title: "VP of Operations at LogiChain Solutions", avatarUrl: "https://randomuser.me/api/portraits/women/5.jpg" },
      { quote: "By integrating FinWage's sustainable energy solutions, we've seen a significant reduction in carbon footprint. Leading the way in eco-friendly business practices.", name: "Carlos Gomez", title: "Head of R&D at EcoInnovate", avatarUrl: "https://randomuser.me/api/portraits/men/14.jpg" },
      { quote: "FinWage's market analysis AI has transformed how we approach fashion trends. Our campaigns are now data-driven with higher customer engagement.", name: "Aisha Khan", title: "CMO at Fashion Forward", avatarUrl: "https://randomuser.me/api/portraits/women/56.jpg" },
      { quote: "Implementing FinWage in our patient care systems has improved patient outcomes significantly. Technology and healthcare working hand in hand for better health.", name: "Tom Chen", title: "Director of IT at HealthTech Solutions", avatarUrl: "https://randomuser.me/api/portraits/men/18.jpg" },
      { quote: "FinWage's personalized learning plans have doubled student performance metrics. Education tailored to every learner's needs. Transforming the educational landscape.", name: "Sofia Patel", title: "CEO at EduTech Innovations", avatarUrl: "https://randomuser.me/api/portraits/women/73.jpg" },
      { quote: "With FinWage's AI-powered security systems, our data protection levels are unmatched. Ensuring safety and trust in digital spaces. Redefining cybersecurity standards.", name: "Jake Morrison", title: "CTO at SecureNet Tech", avatarUrl: "https://randomuser.me/api/portraits/men/25.jpg" },
      { quote: "FinWage's AI has streamlined our creative process, enhancing productivity and innovation. Bringing creativity and technology together. A game-changer for creative industries.", name: "Nadia Ali", title: "Product Manager at Creative Solutions", avatarUrl: "https://randomuser.me/api/portraits/women/78.jpg" }
    ];

    const StarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
    );

    const TestimonialCard = ({ quote, name, title, avatarUrl }) => (
        <div className="mb-8 break-inside-avoid rounded-2xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-row py-1 mb-2">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">"{quote}"</p>
            <div className="flex w-full items-center justify-start gap-4 mt-6">
                <img alt={name} loading="lazy" width="40" height="40" decoding="async" className="h-10 w-10 rounded-full ring-2 ring-offset-2 ring-[#1d44c3]" src={avatarUrl} />
                <div>
                    <p className="font-bold text-sm text-[#1d44c3]">{name}</p>
                    <p className="text-xs text-gray-500">{title}</p>
                </div>
            </div>
        </div>
    );
    
    const col1 = testimonialsData.slice(0, 3);
    const col2 = testimonialsData.slice(3, 6);
    const col3 = testimonialsData.slice(6, 9);
    const col4 = testimonialsData.slice(9, 12);
    
    const TestimonialColumn = ({ testimonials, duration, reverse = false }) => {
        const marqueeClass = reverse ? 'marquee-vertical-reverse' : 'marquee-vertical';
        return (
            <div className="overflow-hidden">
                <div className={marqueeClass} style={{ '--duration': duration } as React.CSSProperties}>
                    <div className="space-y-8 py-4">
                        {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
                    </div>
                    <div className="space-y-8 py-4" aria-hidden="true">
                        {testimonials.map((t, i) => <TestimonialCard key={`dup-${i}`} {...t} />)}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="customer-saying" className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <p className="text-sm font-bold text-[#f64162] tracking-widest uppercase">Testimonials</p>
                    <h2 className="font-serif text-4xl lg:text-5xl text-[#1d44c3] mt-4">What Our Customers Are Saying</h2>
                </div>
                
                <div className="relative mt-6 max-h-[60vh] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <TestimonialColumn testimonials={col1} duration="40s" />
                        <TestimonialColumn testimonials={col2} duration="60s" reverse={true} />
                        <TestimonialColumn testimonials={col3} duration="35s" />
                        <TestimonialColumn testimonials={col4} duration="55s" reverse={true} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const Partners = () => {
    const companies = [
        "https://placehold.co/200x80/e5e7eb/1f2937?text=Duracell",
        "https://placehold.co/200x80/d1d5db/1f2937?text=Adecco",
        "https://placehold.co/200x80/e5e7eb/1f2937?text=HCA+Healthcare",
        "https://placehold.co/200x80/d1d5db/1f2937?text=BMO",
    ];

    return (
        <section id="our-partners" className="bg-white py-20 lg:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-serif text-4xl lg:text-5xl text-[#1d44c3] mb-6">Meet Our Partners</h2>
                    <p className="text-gray-800 text-lg max-w-2xl mx-auto">
                        Partnering with industry leaders, FinWage provides forward-thinking financial solutions for today’s workforce.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {companies.map((company, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <img src={company} alt={`Logo of ${company}`} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <FinWageLogo className="h-10" />
                        <p className="text-gray-400">
                            FinWage is a financial technology company that provides on-demand pay solutions to help employees access their earned wages while saving employers time and money.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg">Products</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">On-Demand Pay</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Employee Benefits</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Financial Wellness</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 text-center text-gray-400">
                    © 2023 FinWage. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

const Engage = () => {
    return (
        <section id="employers" className="bg-white py-20 lg:py-32">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-serif text-4xl lg:text-5xl text-[#1d44c3] leading-tight">Attract, Retain, and Inspire Your Workforce</h2>
                    <p className="mt-6 text-gray-800 text-lg leading-relaxed">FinWage empowers employers to lead their industry by redefining how employees access and manage their pay.</p>
                    <a href="#" className="mt-8 text-[#f64162] font-semibold flex items-center group hover:text-[#e52e50] transition-colors">
                        See how we stand out
                        <span className="ml-2 transition-transform group-hover:translate-x-1">&gt;</span>
                    </a>
                </div>
                <div className="relative group cursor-pointer animate-slideInRight">
                    <img src="./assets/Video-tumb2.png" alt="Man talking" className="rounded-3xl shadow-2xl w-full group-hover:shadow-4xl transition-all duration-500 border-4 border-white" />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/20 to-black/40 group-hover:from-black/30 group-hover:to-black/50 transition-all duration-500 rounded-3xl">
                        <button className="bg-white/50 backdrop-blur-md p-8 rounded-full hover:bg-white/70 transition-all duration-500 transform group-hover:scale-125 shadow-2xl hover:shadow-4xl animate-pulse-glow">
                             <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};


const Wealth = () => {
    return (
        <section id="for-employees" className="bg-gradient-to-b from-white to-gray-50 py-20 lg:py-32">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative h-[500px] animate-slideInLeft">
                    <img src="./assets/Employee1.png" alt="Person" className="absolute top-0 left-0 w-48 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-6 border-white transform hover:scale-105 hover:rotate-2" />
                    <img src="./assets/Employee2.png" alt="Person" className="absolute top-1/4 left-1/4 w-56 rounded-3xl shadow-2xl z-10 hover:shadow-3xl transition-all duration-500 border-6 border-white transform hover:scale-105 hover:-rotate-2" />
                    <div className="absolute top-20 right-10 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl w-64 z-20 hover:shadow-3xl transition-all duration-500 border-2 border-gray-100 transform hover:scale-105 hover:-rotate-1 cursor-pointer group">
                         <p className="text-gray-600 text-sm font-medium">You have</p>
                         <p className="text-3xl font-bold text-green-600 my-1 group-hover:scale-110 transition-transform duration-300">$85.00 planned</p>
                         <p className="text-gray-600 text-sm font-medium">for payday</p>
                    </div>
                    <div className="absolute bottom-0 right-0 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl w-72 z-20 hover:shadow-4xl transition-all duration-500 border-2 border-gray-100 transform hover:scale-105 hover:rotate-1 cursor-pointer group">
                        <p className="font-bold text-sm text-[#1d44c3]">Set a savings goal</p>
                        <p className="text-xs text-gray-600 mt-1">Tap to start building your savings habit with a goal to work towards.</p>
                        <div className="mt-4 bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-100">
                            <p className="text-xs font-semibold text-gray-800">Rainy day jar</p>
                            <div className="flex justify-between items-center text-xs mt-2">
                                <p className="text-gray-700">Account ending: 1890</p>
                                <p className="font-bold text-gray-900">$2,500.00</p>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
                               <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out group-hover:w-[70%]" style={{width: '65%'}}></div>
                            </div>
                             <p className="text-right text-xs text-gray-500 mt-1">Goal: $2,500.00</p>
                        </div>
                    </div>
                </div>
                <div className="lg:pl-12">
                     <h2 className="font-serif text-5xl text-[#1d44c3] leading-tight">Supporting Every Employee’s Journey Toward Financial Growth</h2>
                     <p className="mt-6 text-gray-800">FinWage enables employees to confidently manage and optimize their earnings, fostering financial wellness.</p>
                     <a href="#" className="mt-6 text-[#f64162] font-semibold flex items-center group">
                        See how it works for employees
                        <span className="ml-2 transition-transform group-hover:translate-x-1">&gt;</span>
                     </a>
                </div>
            </div>
        </section>
    );
};

const Awards = () => {
    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-8 lg:py-8">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-serif text-4xl lg:text-5xl text-[#1d44c3] mb-6">Global Recognition for Financial Innovation</h2>
                    {/* <p className="text-gray-800 text-lg max-w-2xl mx-auto">
                        FinWage is recognized worldwide as a leader in financial technology, transforming how people access their earned wages across the globe.
                    </p> */}
                </div>
                
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Globe on the left side */}
                    <div className="w-full h-96  rounded-2xl ">
                        <Globe 
                            className="w-full h-full"
                            config={{
                                width: 800,
                                height: 800,
                                scale: 1,
                                opacity: 1,
                                color: '#ffffff'
                            }}
                        />
                    </div>
                    
                    {/* Award cards on the right side */}
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { title: "Best Fintech Solution", year: "2025" },
                            { title: "Innovation Excellence", year: "2024" },
                            { title: "Employee Benefits", year: "2024" },
                            { title: "Tech Impact Award", year: "2023" },
                            { title: "Global Leadership", year: "2023" },
                            { title: "Financial Wellness", year: "2022" }
                        ].map((award, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <h3 className="font-bold text-[#1d44c3] text-lg">{award.title}</h3>
                                <p className="text-gray-600 mt-2">{award.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="mt-20 text-center">
                    {/* <p className="text-gray-700 max-w-2xl mx-auto">
                        With offices in 12 countries and serving over 2 million users worldwide, FinWage continues to set the standard for on-demand pay solutions.
                    </p> */}
                </div>
            </div>
        </section>
    );
};

const Implementation = () => {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-16">
            <div className="container mx-auto px-6">
                <div className="flex justify-center mb-16">
                <h2 className="font-serif text-4xl lg:text-5xl text-[#1d44c3] mb-6">Implementation </h2>
                </div>
                <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-12 lg:p-20 shadow-2xl border-2 border-gray-100 hover:shadow-3xl transition-shadow duration-500">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-slideInLeft">
                            <p className="text-xs font-bold text-[#f64162] tracking-widest uppercase">SUCCESSFUL IMPLEMENTATION</p>
                            <h2 className="font-serif text-4xl lg:text-5xl text-[#1d44c3] mt-4 leading-tight">Enabling Confident Employee Adoption</h2>
                        </div>
                        <div>
                            <p className="text-gray-800">The FinWage Solution seamlessly and securely integrates with your existing payroll, time management, and banking systems. Our dedicated implementation team ensures minimal impact on payroll operations while delivering a smooth setup process. From there, our collaborative experts guide you through every step—technical integration, customized launch planning, employee activation, onboarding, training, marketing, and ongoing support—to ensure confident and widespread employee adoption.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="grid md:grid-cols-3 gap-10 text-center mt-16">
                    <div className="group p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                        <div className="bg-gradient-to-br from-[#f64162] to-[#fa7892] w-24 h-24 rounded-2xl mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                            <span className="text-4xl">⚡</span>
                        </div>
                        <h4 className="font-bold text-[#1d44c3] mt-8 text-xl group-hover:text-[#f64162] transition-colors duration-300">Simple Implementation</h4>
                    </div>
                    <div className="group p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                        <div className="bg-gradient-to-br from-[#1d44c3] to-[#3c65d6] w-24 h-24 rounded-2xl mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                            <span className="text-4xl">🔧</span>
                        </div>
                        <h4 className="font-bold text-[#1d44c3] mt-8 text-xl group-hover:text-[#f64162] transition-colors duration-300">No building or retooling</h4>
                    </div>
                    <div className="group p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                        <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-24 h-24 rounded-2xl mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                            <span className="text-4xl">🚀</span>
                        </div>
                        <h4 className="font-bold text-[#1d44c3] mt-8 text-xl group-hover:text-[#f64162] transition-colors duration-300">Ready fast</h4>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

const Insights = () => {
    const featuredArticle = {
        title: "FinWage Chosen as Workday’s Trusted Partner for On-Demand Pay Innovation",
        description: "Together, the companies are delivering a more integrated experience for joint customers—empowering employees to access their earned wages whenever they need them most.",
        imageUrl: "./assets/article-image.png",
        link: "#"
    };

    const latestArticles = [
        {
            category: "Report",
            title: "FinWage Tops List as #1 Adopted Financial Wellness Benefit",
            imageUrl: "https://placehold.co/150x100/d1d5db/1f2937?text=Top+Benefit",
            link: "#"
        },
        {
            category: "Blog",
            title: "How Improved Financial Wellness Can Help Employers",
            imageUrl: "https://placehold.co/150x100/e5e7eb/1f2937?text=Financial+Wellness",
            link: "#"
        },
        {
            category: "Blog",
            title: "Empower Your Workforce With Real-Time Digital Access Through FinWage Tips",
            imageUrl: "https://placehold.co/150x100/d1d5db/1f2937?text=Digital+Tips",
            link: "#"
        },
        {
            category: "Blog",
            title: "The Hidden Benefits of On-Demand Pay for Employers",
            imageUrl: "https://placehold.co/150x100/e5e7eb/1f2937?text=Hidden+Benefits",
            link: "#"
        },
    ];

    return (
        <section id="resources" className="bg-white py-20 lg:py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column: Featured Article */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1d44c3] leading-tight mb-4">Actionable Insights, Anytime, Anywhere.</h2>
                        <p className="text-gray-800 mb-6">Discover the latest insights, initiatives, and innovations from FinWage as we shape the future of on-demand pay and modern payroll solutions.</p>
                        <a href="#" className="text-[#f64162] font-bold hover:underline flex items-center gap-2 mb-10">
                            Explore all resources
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path></svg>
                        </a>
                        
                        <a href={featuredArticle.link} className="block group">
                            <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="rounded-xl shadow-lg mb-6 group-hover:shadow-2xl transition-shadow duration-300" />
                            <h3 className="text-2xl font-bold text-[#1d44c3] mb-3 group-hover:text-[#f64162] transition-colors duration-300">{featuredArticle.title}</h3>
                            <p className="text-gray-800 mb-4">{featuredArticle.description}</p>
                            <span className="text-[#f64162] font-bold hover:underline flex items-center gap-2">
                                Learn more
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path></svg>
                            </span>
                        </a>
                    </div>

                    {/* Right Column: Latest Articles */}
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl font-semibold text-[#1d44c3] mb-6 border-b pb-4">Latest</h2>
                        <div className="space-y-6">
                            {latestArticles.map((article, index) => (
                                <a key={index} href={article.link} className="flex items-center gap-6 group p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                    <img src={article.imageUrl} alt={article.title} className="w-32 h-20 object-cover rounded-md flex-shrink-0" />
                                    <div>
                                        <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">{article.category}</p>
                                        <h4 className="font-bold text-[#1d44c3] leading-tight group-hover:text-[#f64162] transition-colors duration-300">{article.title}</h4>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Cta = () => {
    return (
        <section className="bg-white py-20 lg:py-32">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-br from-[#fef5f7] to-[#fdeff2] rounded-3xl p-8 lg:p-16 text-center shadow-xl border border-pink-100">
                    <div className="flex justify-between items-center">
                        <div></div>
                        <h2 className="font-serif text-3xl lg:text-4xl text-[#1d44c3]">Discover Why FinWage is Powering Top Employers</h2>
                        <a href="#" className="hidden md:inline-block bg-[#1d44c3] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#3c65d6] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Let's Talk
                        </a>
                    </div>

                    <div className="mt-16 grid md:grid-cols-2 gap-10 text-left">
                        <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-4xl transition-all duration-500 border-2 border-gray-100 group transform hover:-translate-y-2 animate-slideInLeft">
                            <h4 className="font-bold text-xl text-[#1d44c3] flex items-center">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4 text-[#f64162] group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                Effortless and Safe for Your Business
                            </h4>
                            <p className="mt-4 text-gray-700">Maintain your existing payroll processes—FinWage manages everything compliantly.</p>
                            <hr className="my-4 border-gray-200"/>
                            <p className="mt-4 text-gray-700">Connects effortlessly with HCM, payroll, banking, and benefits apps.</p>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-4xl transition-all duration-500 border-2 border-gray-100 group transform hover:-translate-y-2 animate-slideInRight">
                            <h4 className="font-bold text-xl text-[#1d44c3] flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-4 text-[#f64162] group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                                Empowering Your Workforce
                            </h4>
                            <p className="mt-4 text-gray-700 text-sm">Employees gain greater financial control, with access to up to 100% of their FinWage balance to navigate unexpected financial challenges.</p>
                             <hr className="my-4"/>
                            <p className="mt-4 text-gray-700 text-sm">Start instantly, no prior bank account needed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function App() {
    return (
        <div className="bg-white">
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(246, 65, 98, 0.3); }
                    50% { box-shadow: 0 0 35px rgba(246, 65, 98, 0.6); }
                }
                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                @keyframes shimmer {
                    0% { background-position: -1000px 0; }
                    100% { background-position: 1000px 0; }
                }
                @keyframes marquee-vertical {
                    from { transform: translateY(0); }
                    to { transform: translateY(-50%); }
                }
                .marquee-vertical {
                    animation: marquee-vertical var(--duration) linear infinite;
                }
                @keyframes marquee-vertical-reverse {
                    from { transform: translateY(-50%); }
                    to { transform: translateY(0); }
                }
                .marquee-vertical-reverse {
                    animation: marquee-vertical-reverse var(--duration) linear infinite;
                }
                .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
                .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
                .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
                .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
                .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
                .animate-float { animation: float 4s ease-in-out infinite; }
                .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
                .animate-scale-in { animation: scale-in 0.6s ease-out forwards; }
                .shadow-3xl { box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3); }
                .shadow-4xl { box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.4); }
                .text-shadow { text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
                html { scroll-behavior: smooth; }
                section[id] { scroll-margin-top: 100px; }
                .group:hover .group-hover\:animate-wiggle { animation: wiggle 0.5s ease-in-out; }
                @keyframes wiggle {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-3deg); }
                    75% { transform: rotate(3deg); }
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-marquee { animation: marquee 40s linear infinite; }
                .animate-spin-slow { animation: spin-slow 8s linear infinite; }
                .animate-slideDown { animation: slideDown 0.3s ease-out forwards; }
                .pause-animation:hover { animation-play-state: paused; }
                .hover\:glow { transition: filter 0.3s ease; }
                .hover\:glow:hover { filter: drop-shadow(0 0 20px rgba(246, 65, 98, 0.5)); }
                .backdrop-blur-strong { backdrop-filter: blur(20px); }
                .gradient-text {
                    background: linear-gradient(135deg, #1d44c3 0%, #3c65d6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
            `}</style>
            <Header />
            <main>
                <Hero />
                <Platform />
                <HowItWorks />
                <Testimonials />
                <Partners />
                <Engage />
                <Wealth />
                <Awards />
                <Implementation />
                <Insights />
                <Cta />
            </main>
            <Footer />
        </div>
    )
}
