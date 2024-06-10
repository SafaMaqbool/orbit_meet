import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

const MainSlider = () => {
    return (
        <Carousel>
            <CarouselContent className="rounded-md">
                <CarouselItem>
                    <Slide1 />
                </CarouselItem>
                <CarouselItem>
                    <Slide2 />
                </CarouselItem>
                <CarouselItem>
                    <Slide3 />
                </CarouselItem>
                {/* <CarouselItem>
                    <Slide4 />
                </CarouselItem> */}
            </CarouselContent>
            <CarouselPrevious className="bg-dark-1 text-white left-3 h-10 w-10 shadow-md" />
            <CarouselNext className="bg-dark-1 text-white right-3 h-10 w-10 shadow-md" />
        </Carousel>
    )
}

export default MainSlider