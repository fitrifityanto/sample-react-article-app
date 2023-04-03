import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useNavigate, useParams } from 'react-router-dom'

function FormUpdate() {
    const navigate = useNavigate()
    const {id} = useParams()
    const {fetchDatas} = useContext(GlobalContext)
    const [input, setInput] = useState({
        title:'',
        description:'',
        image_url:'',
        highlight: false
    })

    const handleChange = (event) => {
        if (event.target.name == 'title') {
            setInput({...input, title: event.target.value})
        } else if (event.target.name == 'description') {
            setInput({...input, description: event.target.value})
        } else if (event.target.name == 'image_url') {
            setInput({...input, image_url: event.target.value})
        } else if (event.target.name == 'highlight') {
            setInput({...input, highlight: event.target.checked})
        }
    }

    const handleUpdate = async () => {
        try {
            const response = await axios.put(`http://localhost:8000/articles/${id}`, {
                title: input.title,
                description: input.description,
                image_url: input.image_url,
                highlight: input.highlight
            })
            alert(`berhasil mengubah artikel berjudul '${input.title}' `)
            navigate('/table')
        } catch (error) {
            console.log(error)
        }
        }
    
    const fetchDetail = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/articles/${id}`)
            const article = response.data
            setInput({
                title: article.title,
                description: article.description,
                image_url: article.image_url,
                highlight: article.highlight
            })
            console.log(response.data)
        } catch (error) {
            console.log(error)
        } 
      }
    
      useEffect (() => {
        fetchDetail()
      }, [])


  return (
    <>
        <div>
          <h1 className='text-xl font-bold uppercase mb-2 mt-8'>Form Update</h1>
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
            <div className=''>
                <input
                    type='checkbox'
                    name='highlight'
                    checked={input.highlight}
                    onChange={handleChange} 
                    />
                <label className='ml-2'>highlight</label>
            </div>
            <div>
                <button
                    onClick={handleUpdate}
                    className='bg-blue-500 text-white px-2 py-1 rounded'> Update </button>
            </div>
          </div>
        </div>
    </>
  )
}

export default FormUpdate