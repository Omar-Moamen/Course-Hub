import './Courses.css'
import {useDispatch, useSelector} from "react-redux";
import {getCourses} from "../../store/coursesSlice";
import React, {useEffect, useState, useMemo} from "react";
import Course from './Course';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

import {register} from 'swiper/element/bundle';
// register Swiper custom elements
register();

function Courses()
{


   const {coursesData, loading} = useSelector(state => state.courses);

   const [currentSlide, setCurrentSlide] = useState(0);

   const courses = coursesData && coursesData.map((course, i) => (
      <swiper-slide key={course.academyCourseId}>
         <Course
            data={course} index={i}
            firstSlide={currentSlide}
            len={coursesData.length} />
      </swiper-slide>)
   );

   console.log(courses)





   const dispatch = useDispatch();

   useEffect(() =>
   {
      console.log('coursesTest')

      let swiperEl = document.querySelector('swiper-container');
      console.log(swiperEl.swiper)

      dispatch(getCourses());
   }, [dispatch]);

   // let settings = {
   //    dots: false,
   //    infinite: false,
   //    lazyLoad: true,
   //    speed: 500,
   //    slidesToShow: 5,
   //    slidesToScroll: 3,
   //    swipeToSlide: false,
   //    nextArrow: <SampleNextArrow />,
   //    prevArrow: <SamplePrevArrow />,
   //    afterChange: (current) => setCurrentSlide(current),
   //    responsive: [
   //       {
   //          breakpoint: 1198,
   //          settings: {
   //             slidesToShow: 4,
   //             slidesToScroll: 3,
   //          }
   //       },
   //       {
   //          breakpoint: 1024,
   //          settings: {
   //             slidesToShow: 3,
   //             slidesToScroll: 3,
   //          }
   //       },
   //       {
   //          breakpoint: 767,
   //          settings: {
   //             slidesToShow: 2,
   //             slidesToScroll: 2,
   //          }
   //       },
   //       {
   //          breakpoint: 576,
   //          settings: {
   //             slidesToShow: 1,
   //             slidesToScroll: 1,
   //          }
   //       },
   //       {}
   //    ],
   // };

   const swiperEl = document.querySelector("swiper-container");

   const swiperParams = useMemo(() => (
      {
         slidesPerView: 1,
         breakpoints: {
            400: {
               slidesPerView: 1,
            },
            640: {
               slidesPerView: 2,
            },
            767: {
               slidesPerView: 3,
            },
            1024: {
               slidesPerView: 4,
            },
            1400: {
               slidesPerView: 5
            },
         },

      }
   ), [])

   useEffect(() =>
   {
      if (swiperEl)
      {
         Object.assign(swiperEl, swiperParams);
         swiperEl.initialize();
      }

   }, [swiperEl, swiperParams])



   return (
      <>
         <div className='carousel-wrapper position-relative' >
            <swiper-container navigation="true" css-mode="true">
               {courses}
            </swiper-container>
         </div>

      </>
   )
}

export default React.memo(Courses);
