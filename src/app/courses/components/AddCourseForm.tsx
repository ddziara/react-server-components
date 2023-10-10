"use client";

import { useState } from "react";

const AddCourseForm = ({
  saveAction,
  cancelAction,
}: {
  saveAction: any;
  cancelAction: any;
}) => {
  const data = {
    name: "New Course Name Here!",
    cover: "https://via.placeholder.com/360x270",
    rating: 4,
    price: 20,
    description: `This is where you can describe your course`,
    type: "playlist",
    link: "https://youtube.com/tapasadhikary",
  };

  const [course, setCourse] = useState({
    name: "",
    cover: "",
    price: 0,
    description: "",
    type: "",
    link: "",
    rating: 5,
  });

  return <div>add course form</div>;
};

export default AddCourseForm;
