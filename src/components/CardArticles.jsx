import React from 'react'

const CardArticles = ({article}) => {
  return (
    <div>
      <div className='w-56'>    
        <div><img src={article.image_url} /></div>    
        <div><h2 className='text-xl'>{article.title}</h2></div>    
        <div><p>{article.description}</p></div> 
      </div>
    </div>
  )
}

export default CardArticles