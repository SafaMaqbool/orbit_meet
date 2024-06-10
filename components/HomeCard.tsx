import { cn } from '@/lib/utils';
import Image from 'next/image'

interface HomeCardProps {

    img: string;
    title: string;
    description: string;
    className: string;
    handleClick: () => void;

}

const HomeCard = ({ img, title, description, className, handleClick }: HomeCardProps) => {
    return (
        <div className={cn('group px-4 py-6 flex flex-col justify-between rounded-md items-center w-full xl:max-w-[270px] min-h-[260px] cursor-pointer shadow-lg', className)} onClick={handleClick}>
            <div className="flex-center size-20 rounded-[10px]">
                <Image src={img} alt="meeting" width={72} height={72} className='group-hover:translate-y-4 transition-all'  />
            </div>
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-2xl font-bold line-clamp-1">{title}</h1>
                <p className="text-lg font-normal">{description}</p>
            </div>
        </div>
    )
}

export default HomeCard