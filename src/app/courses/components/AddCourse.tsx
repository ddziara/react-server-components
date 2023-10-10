'use client'

import { useState } from 'react';
import Modal from './Modal';
import AddCourseForm from "./AddCourseForm";


export default function AddCourse({
  addCourseToDB,
}: {
  addCourseToDB: (data: any) => Promise<void>
}) {
  const [showAddModal, setShowAddModal] = useState(false);
  const add = async(data: any) => {
    await addCourseToDB(data);
    setShowAddModal(false);
  }

  return (
    <>
    <button
      onClick={() => setShowAddModal(true)}
    >
      Add Course
    </button>
    <Modal 
      shouldShow={showAddModal} 
      body={
        <AddCourseForm 
          saveAction={add} 
          cancelAction={() => setShowAddModal(false)} />} />
    </>
  )
}