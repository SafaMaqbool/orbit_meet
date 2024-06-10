import BlockDiagram from '@/components/BlockDiagram';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Instructor from '@/components/Instructor';
import MainSlider from '@/components/MainSlider';
import MeetingTypeList from '@/components/MeetingTypeList';
import Students from '@/components/Students';
import TechnologyList from '@/components/TechnologyList';

const Home = () => {

    return (
        <section className='flex size-full flex-col gap-10 text-white'>
            <MainSlider/>
            <MeetingTypeList />
            <TechnologyList />
            <BlockDiagram />
            <Features />
            <Instructor />
            <Students />
            <Footer />
        </section>
    )
}

export default Home