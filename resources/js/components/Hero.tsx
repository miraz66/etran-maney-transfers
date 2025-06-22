import Header from './Header';

import InterestLogo from '../assets/interest.png';

function Hero() {
    return (
        <div>
            {/* <!-- Header --> */}
            <Header />

            {/* <!-- Hero section --> */}
            <div className="relative isolate h-screen bg-[url('https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center px-6 pt-14 lg:px-8">
                <div className="absolute inset-0 bg-tertiary/5">
                    <div className="absolute top-3/12 left-1/12 flex items-center justify-center gap-2 rounded-full bg-tertiary/30 px-2 py-1 lg:py-2 xl:top-3/12 xl:left-2/12 xl:px-4">
                        <img src={InterestLogo} className="h-6 rounded-full bg-tertiary p-[1px] lg:h-10 lg:p-0.5" alt="" />
                        <p className="text-base tracking-wider text-white lg:text-2xl">Interest earned!</p>
                    </div>
                    <div className="absolute right-1/12 bottom-3/12 flex items-center justify-center gap-2 rounded-full bg-tertiary/30 px-2 py-1 lg:px-4 lg:py-2 xl:right-2/12 xl:bottom-9/12">
                        <img src={InterestLogo} className="h-6 rounded-full bg-tertiary p-[1px] lg:h-10 lg:p-0.5" alt="" />
                        <p className="text-base tracking-wider text-white lg:text-2xl">Interest earned!</p>
                    </div>
                    <div className="absolute bottom-2/12 left-1/12 flex items-center justify-center gap-2 rounded-full bg-tertiary/30 px-2 py-1 lg:px-4 lg:py-2 xl:bottom-2/12 xl:left-4/12">
                        <img src={InterestLogo} className="h-6 rounded-full bg-tertiary p-[1px] lg:h-10 lg:p-0.5" alt="" />
                        <p className="text-base tracking-wider text-white lg:text-2xl">Interest earned!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
