import { courses } from "../../models/courseModel";
import { dbConnect } from "../../services/mongo";
import AddCourse from "./components/AddCourse";
import CourseList from "./components/CourseList";

const Home = async ({ allCourser, addCourseToDB }: { allCourser: any, addCourseToDB: any }) => {
  // Get a MongoDB connection
  await dbConnect();

  // Get all courses from the db using model
  const allCourses = await courses.find().select(["name", "cover", "rating"])

  // This gets printed on the server console
  console.log({ allCourser });

  return <main className="flex min-h-screen flex-col items-centered">
    <div className="z-10 w-full max-w-5x1 items-center">
        <h1>Courses</h1>
        <AddCourse addCourseToDB={addCourseToDB} />
        <CourseList allCourses={allCourses} />
    </div>
  </main>;
};

export default Home;
