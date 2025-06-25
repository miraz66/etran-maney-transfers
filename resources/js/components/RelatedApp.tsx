import CardImg from '@/assets/CardImg.png';
import ReportImg from '@/assets/ReportPaper.png';
import ManImg from '@/assets/man_img.png';

export default function RelatedApp() {
    return (
        <div>
            <h1 className="mx-auto mt-24 max-w-2xl text-center text-3xl font-bold capitalize">The most reliable App</h1>

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 p-8 md:grid-cols-2 md:gap-8">
                <div className="w-full">
                    <img className="w-full" src={CardImg} alt="card" />
                    <p className="mt-4 text-base text-primary">Scale Your Team, Not Your Card Expenses</p>
                    <p className="mt-2 text-sm text-gray-500">Issue virtual and physical cards at no additional cost to support teams of any size.</p>
                </div>
                <div className="w-full">
                    <img className="w-full" src={ReportImg} alt="report" />
                    <p className="mt-4 text-base text-primary">Effortless Paper Tracking, Mobile Convenience</p>
                    <p className="mt-2 text-sm text-gray-500">
                        Get precise control—at scale—with the ability to lock any card and restrict any type of spend.
                    </p>
                </div>
            </div>

            <hr className="text-primary md:my-20" />

            <div className="mx-auto max-w-7xl p-8">
                <img src={ManImg} alt="single man" />
            </div>
        </div>
    );
}
