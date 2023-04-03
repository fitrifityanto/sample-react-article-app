import React, { useContext, useEffect } from 'react'
import CardArticles from '../CardArticles'
import { GlobalContext } from '../../context/GlobalContext'
import Navbar from '../Navbar'

function Homepage() {
    const {articles, setArticles, fetchDatas, loading} = useContext(GlobalContext)

    useEffect (() => {
        fetchDatas()
      }, [])

  return (
    <>
        <Navbar />
        <div className='mx-4'>
            <div className='max-w-5xl mx-auto mt-4'>
                <h1 className='text-xl font-bold uppercase mb-2 mt-8'>Articles</h1>
            </div>
            <div className='max-w-5xl mx-auto mt-4'>
            {
                loading === true ? (
                <div className='flex justify-center'>
                    <h1 className='text-red-500 text-xl'>Loading Articles ...</h1> 
                </div>
                )
                :
                (
                <div className='flex gap-4 flex-wrap justify-center p-4'>      
                {
                articles.map((article) => {
                    return <CardArticles article={article} key={article.id}/>
                })
                }
                </div>
                )
            }
            </div>
        </div>
    </>
  )
}

export default Homepage