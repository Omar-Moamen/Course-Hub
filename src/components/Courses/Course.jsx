import {useEffect, useState} from 'react';


function Course({data, index, firstSlide, len})
{
   let url = "http://localhost:5000/cardImages/";

   const [numSlides, setNumSlides] = useState(0);
   const [numOfSwaps, setNumOfSwaps] = useState(0);

   const setSide = (firstSlide, numSlides, index) =>
   {
      if (len - 1 === index)
      {
         return "left"
      }
      else if (firstSlide === 0)
      {
         if (numSlides - 1 === index)
         {
            return "left"
         }
      } else if ((firstSlide + numSlides - 1) === index)
      {
         return "left"
      }
      return "right"

   }

   useEffect(() =>
   {
      const windowWidth = window.innerWidth;
      if (windowWidth < 576)
      {
         setNumSlides(1)
         setNumOfSwaps(1)
      } else if (windowWidth < 767)
      {
         setNumSlides(2)
         setNumOfSwaps(2)
      } else if (windowWidth < 1024)
      {
         setNumSlides(3)
         setNumOfSwaps(3)
      } else if (windowWidth < 1400)
      {
         setNumSlides(4)
         setNumOfSwaps(3)
      } else
      {
         setNumSlides(5)
         setNumOfSwaps(3)
      }

      let spansList = document.querySelectorAll(`.course-process${data.academyCourseId} span`);
      spansList.forEach((span, i) => i < data.courseLevel && span.classList.add("fill"))
   }, [data.academyCourseId, data.courseLevel])

   return (
      <div
         className={`course-card text-start position-relative ${setSide(firstSlide, numSlides, index)}`}
         data-index={index}
      >
         <div className="image-holder">
            <img src={url + data.courseName + ".jpg"} alt={`${data.courseName}`} />
         </div>
         <div className="course-info">
            <h6 className="course-title text-capitalize">{data.courseName}</h6>
            <div className="course-level d-flex align-items-center gap-2">
               <span>
                  Level {data.courseLevel}
               </span>
               <div className={`course-process${data.academyCourseId}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
            </div>
            <span className='course-price d-block text-uppercase'>
               {`EGP ${data.coursePrice}`}
            </span>
         </div>
         <div className="course-popover position-absolute">
            <div className="popover-arrow position-absolute"></div>
            <h5 className='text-capitalize'>{data.courseName}</h5>
            <p>{data.courseDescription}</p>
         </div>
      </div>
   )
}

export default Course;
