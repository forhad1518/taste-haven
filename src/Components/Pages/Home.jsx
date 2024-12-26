import Slide from "../ShortComponents/Slide";
import TopFood from "../ShortComponents/TopFood";

const Home = () => {
    return (
        <div className="mb-[60px]">
            {/* Hero Section */}
            <section>
                <Slide></Slide>
            </section>
            {/* top product */}
            <section className="w-10/12 mx-auto">
                <TopFood></TopFood>
            </section>
        </div>
    );
};

export default Home;