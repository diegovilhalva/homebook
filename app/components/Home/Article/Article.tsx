import { articleData } from "@/app/data/data"
import ArticleCard from "./ArticleCard"


const Article = () => {
    return (
        <div className="pt-20 pb-20 bg-gray-100">
            <div className="w-[80%] mx-auto">
                <h1 className="text-4xl md:text-gray-900 font-bold">Últimas Postagens</h1>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {articleData.map((article,index) => (
                        <div className="" key={article.id} data-aos="zoom-out"
                        data-aos-delay={`${index * 150}`} data-aos-achor-placement="top-center">
                            <ArticleCard article={article}  />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Article