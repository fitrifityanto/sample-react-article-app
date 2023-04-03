import React, { useContext, useEffect, useState } from 'react'
import Table from '../Table'
import Navbar from '../Navbar'
import { GlobalContext } from '../../context/GlobalContext'
import { Link } from 'react-router-dom'

function TablePage() {
    const [editArticles, setEditArticles] = useState({})

    const {articles, setArticles, fetchDatas, loading} = useContext(GlobalContext)

    useEffect (() => {
        fetchDatas()
      }, [])

  return (
    <>
    <Navbar />
    <div className='mx-4'>
    <div className='max-w-5xl mx-auto mt-4 '>
        <h1 className='text-xl font-bold uppercase mb-2 mt-8'>Tabel Artikel</h1>
        <div className='flex justify-end'>
            <Link to={'/create'}>
                <button className='rounded bg-blue-500 text-white px-3 py-1 mb-4'>Create Article</button>
            </Link>
        </div>
        <Table 
            setEditArticles={setEditArticles}
        />
    </div>
    </div>
    </>
  )
}

export default TablePage