//  import { useContext, useState } from "react"
//  import { UserContext } from "../../contexts/userContext"
import { useParams } from "react-router-dom"
import { getCourse } from "../../../dbcourses";

function CreateCourses() {
  // const [courses,setCourses] =useState([])


  // useEffect(() => {
  //     fetch('dbcourses.json') // Ruta al archivo JSON
  //       .then(response => response.json())
  //       .then(data => setCourses(data.courses))
  //       .catch(error => console.error('Error al cargar los cursos:', error));
  //   }, []);
  // console.log(this.props.match.params.id)
  const { courseId } = useParams();
  console.log(courseId)

  const courseData = getCourse(courseId)

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