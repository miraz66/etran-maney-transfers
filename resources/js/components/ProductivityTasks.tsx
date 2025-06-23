import CentralizeIcon from '../assets/CentralizeFinances.svg';
import IncreaseIcon from '../assets/Increase.svg';

export default function ProductivityTasks() {
    return (
        <div className="pt- mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:pt-24">
            <div className="mx-auto mb-10 max-w-xl text-center md:mb-14">
                <h2 className="mx-auto max-w-xl text-center text-2xl leading-9 text-primary capitalize md:text-5xl">Get more done in a week</h2>
                <p className="pt-4 text-gray-600 md:pt-8 md:text-lg">
                    Maximize your productivity with smarter tools designed to streamline your workflow to automate tasks, stay organized
                </p>
            </div>

            <div className="grid gap-8 px-10 md:grid-cols-2 lg:px-0">
                <div className="h-64 w-full rounded-xl bg-tertiary lg:h-80">
                    <div className="flex h-full flex-col items-center justify-center">
                        <h1 className="text-8xl text-primary lg:text-9xl">2x</h1>
                        <p className="pt-8 text-xl text-primary lg:text-2xl">Double Your Productivity</p>
                    </div>
                </div>
                <div className="h-64 w-full rounded-xl bg-tertiary lg:h-80">
                    <div className="flex h-full flex-col items-center justify-center">
                        <img src={IncreaseIcon} alt="Increase Icon" className="h-28 w-48 lg:h-32 lg:w-52" />
                        <p className="pt-8 text-xl text-primary lg:text-2xl">Efficiency Increase Per Transfer</p>
                    </div>
                </div>
                <div className="h-64 w-full rounded-xl bg-tertiary lg:h-80">
                    <div className="flex h-full flex-col items-center justify-center">
                        <img src={CentralizeIcon} alt="Increase Icon" className="h-24 w-28 lg:h-32 lg:w-36" />
                        <p className="pt-8 text-xl text-primary lg:text-2xl">Centralize Your Finances</p>
                    </div>
                </div>
                <div className="h-64 w-full rounded-xl bg-tertiary lg:h-80">
                    <div className="flex h-full flex-col items-center justify-center">
                        <h1 className="text-7xl text-primary lg:text-8xl">130%</h1>
                        <p className="pt-8 text-xl text-primary lg:text-2xl">More Activity</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
