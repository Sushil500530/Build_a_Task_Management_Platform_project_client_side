// Import Swiper React components
import banner1 from '../../assets/image/babber1.png';
import banner2 from '../../assets/image/banner.jpg';
import banner3 from '../../assets/image/banner3.webp';
import banner4 from '../../assets/image/banner4.jpg';
import banner5 from '../../assets/image/banner5.webp';
import banner6 from '../../assets/image/banner6.png';
import banner7 from '../../assets/image/banner7.jpg';
import banner8 from '../../assets/image/banner8.png';
import banner9 from '../../assets/image/banner9.png';
import banner10 from '../../assets/image/banner10.webp';
import banner11 from '../../assets/image/banner11.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Container from '../../components/shared/Container';

const Banner = () => {
    return (
        <Container>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={banner1} alt="banner" className='w-full h-[50vh] lg:h-[75vh]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} alt="banner" className='w-full h-[50vh] lg:h-[75vh]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} alt="banner" className='w-full h-[50vh] lg:h-[75vh]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner4} alt="banner" className='w-full h-[50vh] lg:h-[75vh]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner5} alt="banner" className='w-full h-[50vh] lg:h-[75vh]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner6} alt="banner" className='w-full h-[50vh] lg:h-[75vh]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner7} alt="banner" className='w-full h-[50vh] lg:h-[75vh]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner8} alt="banner" className='w-full h-[50vh] lg:h-[75vh]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner9} alt="banner" className='w-full h-[50vh] lg:h-[75vh]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner10} alt="banner" className='w-full h-[50vh] lg:h-[75vh]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner11} alt="banner" className='w-full h-[50vh] lg:h-[75vh]' />
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default Banner;