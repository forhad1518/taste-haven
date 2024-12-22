import TopFood from "../ShortComponents/TopFood";

const Home = () => {
    return (
        <div className="my-[60px]">
            {/* Hero Section */}
            <section>
                Hero
            </section>
            {/* top product */}
            <section className="w-10/12 mx-auto">
                <TopFood></TopFood>
            </section>
        </div>
    );
};

export default Home;