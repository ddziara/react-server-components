import { dbConnect } from '@/services/mongo'
import { courses } from '@/models/courseModel'
import { addCourseToDB } from './actions/add-course'

import AddCourse from './components/AddCourse'
import CourseList from './components/CourseList'

export default async function Home() {

  // Get a MongoDB connection
  await dbConnect();
  
  // Get all courses from the db using model
  const allCourses = await courses.find().select(
  						["name", "cover", "rating"]);
  
  // This gets printed on the server console
  console.log({allCourses})

  return (
    <main>
      <div>
        <h1>Courses</h1> 
        <AddCourse addCourseToDB={addCourseToDB} />
        <CourseList allCourses={allCourses} />  
      </div>
    </main>
  )
}