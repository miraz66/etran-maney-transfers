import Hero from '@/components/Hero';
import ProductivityTasks from '@/components/ProductivityTasks';
import RelatedApp from '@/components/RelatedApp';
import Software from '@/components/Software';
import TransferEfficency from '@/components/TransferEfficency';

export default function Welcome() {
    return (
        <>
            <div className="bg-white">
                <Hero />
                <TransferEfficency />
                <ProductivityTasks />
                <RelatedApp />
                <Software />
            </div>
        </>
    );
}
