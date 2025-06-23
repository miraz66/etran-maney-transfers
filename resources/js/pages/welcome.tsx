import Hero from '@/components/Hero';
import ProductivityTasks from '@/components/ProductivityTasks';
import TransferEfficency from '@/components/TransferEfficency';

export default function Welcome() {
    return (
        <>
            <div className="bg-white">
                <Hero />
                <TransferEfficency />
                <ProductivityTasks />
            </div>
        </>
    );
}
