import BloomingIcon from '../assets/blooming.svg';

const TransferEfficencyData = [
    {
        id: 1,
        icon: BloomingIcon,
        title: 'Blooming',
    },
    {
        id: 1,
        icon: BloomingIcon,
        title: 'BuildRight',
    },
    {
        id: 1,
        icon: BloomingIcon,
        title: 'Flowbat',
    },
    {
        id: 1,
        icon: BloomingIcon,
        title: 'EXPOR',
    },
    {
        id: 1,
        icon: BloomingIcon,
        title: 'Redo',
    },
];

export default function TransferEfficency() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="mx-auto mb-8 max-w-xl text-center text-2xl leading-9 font-bold text-gray-800 lg:text-3xl">
                We escalate transfer efficiency and productivit
            </h2>

            <div className="flex flex-wrap-reverse justify-center gap-4 pt-4 lg:justify-between lg:pt-10">
                {TransferEfficencyData.map((item) => (
                    <div key={item.id} className="mb-4 flex items-center gap-2">
                        <img src={item.icon} alt={item.title} className="h-4 w-4 lg:h-6 lg:w-6" />
                        <span className="text-base font-semibold text-secondary lg:text-2xl">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
