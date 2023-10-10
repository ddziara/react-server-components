import Image from 'next/image'
import Link from 'next/link'

export default function CourseList(courseList: any) {
  const allCourses = courseList.allCourses;
  return(
    <div>
      {
        allCourses.map((course: any) =>
        <Link key={course['_id']} href={`/courses/${course['_id']}`}>
          <div>
            <Image
              src={course.cover}
              width={200}
              height={200}
              alt={course.name}
            />
            <h2>{course.name}</h2>
            <p>{course.rating}</p>
          </div> 
        </Link> 
      )}
    </div>  
  )

}