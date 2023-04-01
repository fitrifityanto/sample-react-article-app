
import { useEffect, useState } from 'react'
import axios from 'axios'
import CardArticles from './components/CardArticles'
import FormCreate from './components/FormCreate'


function App() {
  const [articles, setArticles] = useState ([])
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
              <FormCreate fetchDatas={fetchDatas} />
          </div>
        </div>
        <div>
          <div className='max-w-5xl mx-auto mt-4'>
            <h1 className='text-xl font-bold uppercase'>Articles</h1>
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
