
import { useContext, useEffect, useState } from 'react'
import CardArticles from './components/CardArticles'
import FormCreate from './components/FormCreate'
import Table from './components/Table'
import FormUpdate from './components/FormUpdate'
import { GlobalContext } from './context/GlobalContext'


function App() {
  const {articles, setArticles, fetchDatas, loading} = useContext(GlobalContext)
  const [editArticles, setEditArticles] = useState({})

  useEffect (() => {
    fetchDatas()
  }, [])

  return (
    <div>
      <div className='mx-2'>
      <div>
          <div className='max-w-5xl mx-auto mt-4'>
              {Object.keys(editArticles).length > 0 ? (
                <FormUpdate 
                editArticles={editArticles}
                setEditArticles={setEditArticles}
                 /> 
                 ) 
                 : ( <FormCreate/> )
              }
          </div>
        </div>
        <div>
          <div className='max-w-5xl mx-auto mt-4 '>
                <Table 
                setEditArticles={setEditArticles}
                />
          </div>
        </div>
        <div>
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
      </div>
    </div>
  )
}

export default App
