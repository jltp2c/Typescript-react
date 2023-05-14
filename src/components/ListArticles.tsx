import { PostArticle } from '../interfaces/PostArticle';
import "./listArticles.css"

interface propsDetails {
    getArticles : PostArticle[] | null
}

const ListArticles :React.FC<propsDetails> = ({getArticles}) => {
  return (
    <div className='listArticle flex-wrap'>
        {
            getArticles?.map(article =>{
                return (
                    <div key={article.id} className="eachArticle">
                        <p>{article.title}</p>
                        <img src={article.image} alt={article.title} width="200"/>
                    </div>
                  
                )
            })
            .slice(0,6)
        }
    </div>
  )
}

export default ListArticles