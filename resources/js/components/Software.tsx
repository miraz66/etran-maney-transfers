import FamilyImg from '@/assets/FamilyPlans.png';
import InterestImg from '@/assets/interest.png';
import StorageImg from '@/assets/maney.png';
import SecureImg from '@/assets/secure.png';

export default function Software() {
    return (
        <div className="pt-10 md:pt-20">
            <div>
                <h1 className="mx-auto max-w-4xl text-center text-4xl text-primary capitalize md:mt-24 md:text-7xl">First class software</h1>
                <p className="mx-auto mt-4 max-w-lg text-center text-base text-gray-500">
                    Get real-time insights, seamless transactions, and advanced tools to manage your wealth effortlessly.
                </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 px-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
                <div>
                    <img
                        className="mx-auto h-44 transition-transform duration-500 ease-in-out hover:-translate-y-2 md:h-52 md:w-full"
                        src={StorageImg}
                        alt=""
                    />
                    <p className="pt-4 text-center capitalize">Safe storage</p>
                </div>
                <div>
                    <img
                        className="mx-auto h-44 transition-transform duration-500 ease-in-out hover:-translate-y-2 md:h-52 md:w-full"
                        src={SecureImg}
                        alt=""
                    />
                    <p className="pt-4 text-center capitalize">Secure</p>
                </div>
                <div>
                    <img
                        className="mx-auto h-44 transition-transform duration-500 ease-in-out hover:-translate-y-2 md:h-52 md:w-full"
                        src={InterestImg}
                        alt=""
                    />
                    <p className="pt-4 text-center capitalize">Earn interest</p>
                </div>
                <div>
                    <img
                        className="mx-auto h-44 transition-transform duration-500 ease-in-out hover:-translate-y-2 md:h-52 md:w-full"
                        src={FamilyImg}
                        alt=""
                    />
                    <p className="pt-4 text-center capitalize">Family plans</p>
                </div>
            </div>
        </div>
    );
}
