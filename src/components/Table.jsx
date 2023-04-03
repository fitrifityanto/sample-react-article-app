import React, { useContext } from 'react'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalContext'

function Table({setEditArticles}) {
    const {articles, fetchDatas} = useContext(GlobalContext)

    const onDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8000/articles/${id}`)
            alert(`berhasil menghapus artikel id ${id}` )
        } catch (error) {
            console.log(error.response.data)
            alert('gagal melakukan delete artikel')
        } finally {
            fetchDatas()
        }
    }

    const onUpdate = (article) => {
        setEditArticles(article)
        console.log(article)
      }

    const listArticle = articles.map (article => 
        <tr key={article.id}>
            <td className='px-2 py-1 border border-blue-300 text-center' >{article.id} </td>
            <td className='px-2 py-1 border border-blue-300'>{article.title} </td>
            <td className='px-2 py-1 border border-blue-300 break-words w-48'>{article.description} </td>
            <td className='px-2 py-1 border border-blue-300'><img src={article.image_url} />  </td>
            <td className='px-2 py-1 border border-blue-300 text-center'> {article.highlight == true ? 'ON' : 'OFF'}
            </td>
            <td className='px-2 py-1 border border-blue-300'>
                <button 
                onClick={() => onUpdate(article) }
                className='rounded bg-yellow-500 text-white px-2 py-1 mr-4'>Update</button>
                <button 
                onClick={() => onDelete(article.id)}
                className='rounded bg-red-500 text-white px-2 py-1'>Delete</button>
            </td>
        </tr>
    )
  return (
    <>
        <div>
            <h1 className='text-xl font-bold uppercase mb-2 mt-8'>Tabel Artikel</h1>
            <div className='flex justify-center'>
                <div>
                <table className='border-collapse table-fixed'>
                    <thead className='bg-blue-500 text-white'>
                        <tr>
                        <th className='px-2 py-1 border text-lg'>ID Title</th>
                            <th className='px-2 py-1 border text-lg'>Title</th>
                            <th className='px-2 py-1 border text-lg'>Description</th>
                            <th className='px-2 py-1 border text-lg'>Image URL</th>
                            <th className='px-2 py-1 border text-lg'>Highlight</th>
                            <th className='px-2 py-1 border text-lg'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listArticle}                        
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Table