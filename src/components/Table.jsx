import React, { useContext } from 'react'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom'

function Table() {
    const {articles, fetchDatas, loading} = useContext(GlobalContext)

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


    const listArticle = articles.map (article => 
        <tr key={article.id}>
            <td className='px-2 py-1 border border-blue-300 text-center' >{article.id} </td>
            <td className='px-2 py-1 border border-blue-300'>{article.title} </td>
            <td className='px-2 py-1 border border-blue-300 break-words '>{article.description} </td>
            <td className='px-2 py-1 border border-blue-300'><img src={article.image_url} />  </td>
            <td className='px-2 py-1 border border-blue-300 text-center'> {article.highlight == true ? 'ON' : 'OFF'}
            </td>
            <td className='px-2 py-1 border border-blue-300'>
                <Link to={`/table/edit/${article.id}`}>
                <button 
                className='rounded bg-yellow-500 text-white px-2 py-1 mr-4'>Update</button>
                </Link>
                <button 
                onClick={() => onDelete(article.id)}
                className='rounded bg-red-500 text-white px-2 py-1'>Delete</button>
            </td>
        </tr>
    )
  return (
    <>
        <div>

            <div className='flex justify-center border'>
                <div >
                <table className='border-collapse table-fixed w-full'>
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
                        {
                    loading === true ? (
                    <tr>
                        <td colSpan={6}>
                        <h1 className='text-red-500 text-xl font-bold text-center'>Loading tabel artikel ...</h1> 
                        </td>
                    </tr>
                    ) : listArticle                        
                        }

                
                    </tbody>
                </table>
                </div>
            </div>
 
        </div>
    </>
  )
}

export default Table