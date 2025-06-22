import Hero from '@/components/Hero';
import TransferEfficency from '@/components/TransferEfficency';

export default function Welcome() {
    return (
        <>
            <div className="bg-white">
                <Hero />
                <TransferEfficency />
            </div>
        </>
    );
}
