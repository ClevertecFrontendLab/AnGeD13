import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { allRecipes } from '~/data/allRecipes';
import H2 from '~/ui/headings/H2';

import NewRecipeCard from '../newRecipeCard/NewRecipeCard';
import Slider from '../slider/Slider';

export default function NewRecipes() {
    const swiperRef = useRef<SwiperRef | null>(null);

    const nextSlide = () => {
        if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const prevSlide = () => {
        if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <Box as='section' position='relative'>
            <H2>Новые рецепты</H2>
            <Swiper
                data-test-id='carousel'
                ref={swiperRef}
                loop={true}
                navigation={{ enabled: false }}
                speed={0}
                spaceBetween='12px'
                slidesPerView={4}
                watchOverflow={true}
                breakpoints={{
                    360: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1440: {
                        slidesPerView: 3,
                    },
                    1720: {
                        slidesPerView: 4,
                    },
                }}
            >
                {allRecipes.slice(0, 10).map((item, index) => (
                    <SwiperSlide key={index}>
                        <NewRecipeCard {...item} index={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Slider nextSlide={nextSlide} prevSlide={prevSlide} />
        </Box>
    );
}
