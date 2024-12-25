import { Link } from "react-router-dom";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import axios from "axios";
import { ImgLight } from "./ImgLight";

const Gallary = () => {
    const [open, setOpen] = React.useState(false);

    const [foods, setFoods] = React.useState(null);
    React.useEffect(() => {
        const loadData = async () => {
            try {
                await axios.get('https://assignment-11-server-eta-gules.vercel.app/allfoods')
                    .then(res => setFoods(res.data))
            } catch (err) {
                console.log(err.message); // Catch errors
            }
        }
        loadData()
    }, [])
    return (
        <div className="mb-10">
            <div
                className='h-80 mb-10 flex justify-center items-center'
                style={{
                    backgroundImage: "url(https://png.pngtree.com/background/20230614/original/pngtree-long-interior-hallway-of-a-restaurant-with-booths-and-tables-picture-image_3494920.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}>
                <nav aria-label="breadcrumb" className="w-max bg-black">
                    <ol className="flex w-full flex-wrap items-center rounded-full border border-white bg-slate-800 p-1">
                        <li className="flex cursor-pointer items-center text-sm text-white transition-colors duration-300">
                            <Link
                                to='/'
                                className="px-3 py-1 hover:underline"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                </svg>
                            </Link>
                            <span className="pointer-events-none mx-2 text-white">
                                |
                            </span>
                        </li>
                        <li className="flex cursor-pointer items-center text-sm text-white transition-colors duration-300">
                            <Link
                                href="#"
                                className="px-3 py-1 hover:underline"
                            >
                                Our Gallary
                            </Link>
                        </li>
                    </ol>
                </nav>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        foods?.map(food => <ImgLight key={food._id} food={food} setOpen={setOpen}></ImgLight>)
                    }
                </div>

                <div>
                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={[
                            { src: "https://png.pngtree.com/background/20230614/original/pngtree-long-interior-hallway-of-a-restaurant-with-booths-and-tables-picture-image_3494920.jpg" },

                        ]}
                    />
                </div>
            </div>
        </div >
    );
};

export default Gallary;