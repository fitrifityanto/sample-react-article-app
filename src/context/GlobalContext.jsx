import axios from "axios";
import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const ContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState ([])

    const fetchDatas = async () => {
        try {
            setLoading(true)
            const response = await axios.get('http://localhost:8000/articles')
            setArticles(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
      }

    return (
        <GlobalContext.Provider value={{
            articles: articles,
            setArticles: setArticles,
            fetchDatas: fetchDatas,
            loading: loading
        }}>
            {children}
        </GlobalContext.Provider>
    )
}