import axios from 'axios'
import React, { useState } from 'react'

function FormCreate({fetchDatas}) {
    const [input, setInput] = useState({
        title:'',
        description:'',
        image_url:''
    })
    const handleChange = (event) => {
        let key = event.target.name
        let value = event.target.value
        setInput({
            ...input,
            [key]: value
        })
    }
    const handleSubmit = async () => {
    try {
        const response = await axios.post('http://localhost:8000/articles', {
            title: input.title,
            description: input.description,
            image_url: input.image_url
        })
        fetchDatas()
        setInput({
            title:'',
            description:'',
            image_url:''
        })
        alert('berhasil menambah data')
    } catch (error) {
        console.log(error.response.data)
    }
    }
  return (
    <div>
        <div className='max-w-5xl mx-auto mt-4'>
          <h1 className='text-xl font-bold uppercase'>Form Create</h1>
          <div className='grid gap-3'>
            <div className='grid gap-1'>
                <label>Judul Artikel</label>
                <input
                    type='text'
                    name='title'
                    value={input.title}
                    onChange={handleChange}
                    className='border rounded max-w-md'
                />
            </div>
            <div className='grid gap-2'>
                <label>Deskripsi Artikel</label>
                <input
                    type='text'
                    name='description'
                    value={input.description}
                    onChange={handleChange}
                    className='border rounded max-w-md'
                />
            </div>
            <div className='grid gap-2'>
                <label>Image URL</label>
                <input
                    type='text'
                    name='image_url'
                    value={input.image_url}
                    onChange={handleChange}
                    className='border rounded max-w-md'
                />
            </div>
            <div>
                <button
                    onClick={handleSubmit}
                    className='bg-blue-500 text-white px-2 py-1 rounded'> Create </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FormCreate