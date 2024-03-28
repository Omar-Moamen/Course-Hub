import {useEffect} from 'react';

function Course({data, index})
{
   let url = "http://localhost:5000/cardImages/";

   useEffect(() =>
   {
      let spansList = document.querySelectorAll(`.course-process${data.academyCourseId} span`);

      spansList.forEach((span, i) => i < data.courseLevel ? span.classList.add("fill") : null)

   }, [data.academyCourseId, data.courseLevel])

   return (
      <div
         className={`course-card text-start position-relative ${(index + 1) % 5 === 0 &&
            "left"}`}
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
