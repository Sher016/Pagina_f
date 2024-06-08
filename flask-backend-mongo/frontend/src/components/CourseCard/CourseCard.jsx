

function CourseCard({ courseData }) {

    return (
        <>
            {courseData.map((course) => (
                <div
                    key={course.id}
                    className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
                >
                    <img src={course.profileImage} className="w-100 h-40 mb-3" />
                    <div className="p-4 pt-2">
                        <div className="mb-8">
                            <a href={'/courses/'+course.id} className="text-gray-900 font-bold text-lg mb-2 hover:text-[#00df9a] inline-block">{course.nombre}</a>
                            <p className="text-gray-700 text-sm">{course.shortDescription}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <a href="#">
                                    <img className="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar" />
                                </a>
                                <div className="text-sm">
                                    <a href="#" className="text-gray-900 font-semibold leading-none hover:text-[#00df9a]">{course.Profesor}</a>
                                </div>
                            </div>
                            <div className="text-sm">
                                <p className="text-gray-900 font-semibold">{course.Precio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}


export default CourseCard