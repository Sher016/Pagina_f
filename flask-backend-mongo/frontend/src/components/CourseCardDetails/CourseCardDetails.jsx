//  import { useContext, useState } from "react"
//  import { UserContext } from "../../contexts/userContext"
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
// import { getCourse } from "../../../dbcourses";

function CreateCourses() {
  const { courseId } = useParams();
  const [courseData, setCourse] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const response = await fetch(`http://localhost:5000/courses/${courseId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        setCourse(data); // Update state with fetched course data
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }

    fetchCourse();
  }, [courseId]); // Re-fetch if id changes

  if (!courseData) {
    return <p>Loading...</p>;
  }

  console.log(courseId)

  // const courseData = getCourse(courseId)

  return (
    <div className="rounded overflow-hidden shadow-lg m-4 p-1">
      <img className="w-full" src={courseData.profileImage} alt={courseData.nombre} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#31ad86]">{courseData.nombre}</div>
        <p className="text-gray-700 text-base pt-1 pb-1">
          {courseData.descripcion}
        </p>
        <p className="text-gray-700 text-base pt-1 pb-1">
          {courseData.Duracion}
        </p>
        <p className="text-gray-700 text-base pt-1 pb-1">
          {courseData.intesidad_h}
        </p>
        <p className="text-gray-700 text-base pt-1 pb-1">
          {courseData.Precio}
        </p>
        <p className="text-gray-700 text-base pt-1 pb-1">
          {courseData.Profesor}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">

      </div>
    </div>
  );
}

export default CreateCourses