import axios from "axios";
import { useEffect, useState } from "react";
import { PostArticle } from "../interfaces/PostArticle"
import ListArticles from "./ListArticles";

function Articles() {
    const [articles, setArticles] = useState<PostArticle []| null>(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const resp = await axios.get("https://fakestoreapi.com/products")
                console.log(resp.data)
                setArticles(resp.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])


    return (
        <div>
            <ListArticles getArticles={articles} />
        </div>

    )
}

export default Articles