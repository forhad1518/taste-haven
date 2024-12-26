// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../customCss/style.css';

// import required modules
import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@material-tailwind/react';
import { JackInTheBox, Roll, Zoom } from 'react-awesome-reveal';

export default function Slide() {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Parallax, Pagination, Navigation]}
                className="mySwiper min-h-screen"
            >
                <SwiperSlide
                    style={{
                        'background-image':
                            'url(https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.jpg?s=612x612&w=0&k=20&c=QbFk2SfDb-7oK5Wo9dKmzFGNoi-h8HVEdOYWZbIjffo=)',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}
                    className='min-h-screen '
                >
                    <div className='flex justify-between'>
                        <div className='w-[50%] min-sm:hidden'>

                        </div>
                        <div className='w-[50%] flex flex-col justify-start gap-y-5 pt-10'>
                            <JackInTheBox>
                                <h1 className='text-2xl md:text-4xl lg:text-6xl leading-normal font-bold'>Our Top rated salad, and masla</h1>
                            </JackInTheBox>
                            <div>
                                <Button className='btn'>Lear More</Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        'background-image':
                            'url(https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=612x612&w=0&k=20&c=kzlrX7KJivvufQx9mLd-gMiMHR6lC2cgX009k9XO6VA=)',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}
                    className='min-h-screen'
                >
                    <div className='flex justify-between'>
                        <div className='w-[50%]'>

                        </div>
                        <div className='w-[50%] flex flex-col justify-start gap-y-5 pt-10'>
                            <Zoom>
                                <h1 className='text-2xl md:text-4xl lg:text-6xl leading-normal font-bold'>World Wide Famus Tekka Salad</h1>
                            </Zoom>
                            <div>
                                <Button className='btn'>Lear More</Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        'background-image':
                            'url(https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                    }}
                    className='min-h-screen'

                >
                    <div className='flex justify-between'>
                        <div className='w-[50%]'>

                        </div>
                        <div className='w-[50%] flex flex-col justify-start gap-y-5 pt-10'>
                            <Roll>
                                <h1 className='text-2xl md:text-4xl lg:text-6xl leading-normal font-bold'>For event best booking our restaurant</h1>
                            </Roll>
                            <div>
                                <Button className='btn'>Lear More</Button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
