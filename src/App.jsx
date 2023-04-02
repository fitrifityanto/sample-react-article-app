
import { useEffect, useState } from 'react'
import axios from 'axios'
import CardArticles from './components/CardArticles'
import FormCreate from './components/FormCreate'
import Table from './components/Table'
import FormUpdate from './components/FormUpdate'


function App() {
  const [articles, setArticles] = useState ([])
  const [editArticles, setEditArticles] = useState({})

  const fetchDatas = async () => {
    try {
      const response = await axios.get('http://localhost:8000/articles')
      setArticles(response.data)
    } catch (error) {
      console.log(error)
    }
  }

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
                fetchDatas={fetchDatas} 
                 /> 
                 ) 
                 : ( <FormCreate fetchDatas={fetchDatas} /> )
              }
          </div>
        </div>
        <div>
          <div className='max-w-5xl mx-auto mt-4 '>
              <Table articles={articles} fetchDatas={fetchDatas}
              setEditArticles={setEditArticles}
              />
          </div>
        </div>
        <div>
          <div className='max-w-5xl mx-auto mt-4'>
            <h1 className='text-xl font-bold uppercase mb-2 mt-8'>Articles</h1>
          </div>
          <div className='max-w-5xl mx-auto mt-4'>
            <div className='flex gap-4 flex-wrap justify-center p-4'>      
            {
              articles.map((article) => {
                return <CardArticles article={article} key={article.id}/>
              })
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
