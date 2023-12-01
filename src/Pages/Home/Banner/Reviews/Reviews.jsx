import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
        <h1 className="text-center md:text-3xl text-xl mt-8 w-4/12 mx-auto font-bold text-[#854D0E] uppercase border-y-4 py-4">Testimonials Section</h1>

        <Swiper navigation={true} autoplay modules={[Navigation]} className="mySwiper">

            {
                reviews.map(review => <SwiperSlide
                    key={review._id}>
                    <div className="flex flex-col items-center mx-24 my-16">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        <p className="my-10">{review.details}</p>
                        <h2 className="text-3xl text-[#854D0E]">{review.name}</h2>
                        <h3 className="text-2xl text-[#854D0E]">{review.role}</h3>
                    </div>
                </SwiperSlide>)
            }
        </Swiper>

    </div>
    );
};

export default Reviews;