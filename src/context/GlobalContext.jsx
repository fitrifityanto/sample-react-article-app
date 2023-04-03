import axios from "axios";
import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const ContextProvider = ({children}) => {
    const [articles, setArticles] = useState ([])

    const fetchDatas = async () => {
        try {
          const response = await axios.get('http://localhost:8000/articles')
          setArticles(response.data)
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <GlobalContext.Provider value={{
            articles: articles,
            setArticles: setArticles,
            fetchDatas: fetchDatas
        }}>
            {children}
        </GlobalContext.Provider>
    )
}