import React from 'react'
import Navbar from '../Navbar'
import FormCreate from '../FormCreate'

function FormCreatePage() {
  return (
    <>
    <Navbar />
    <div className='mx-4'>
    <FormCreate />
    </div>
    </>
  )
}

export default FormCreatePage