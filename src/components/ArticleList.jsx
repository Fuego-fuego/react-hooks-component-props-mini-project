import Article from "./Article";
import blogData from "../data/blog";

function ArticleList (){

    const postElements = blogData.posts.map(post => <Article key ={post.id} {...post}/>)
    return (
        <main>
            {postElements}
        </main>
    )
}

export default ArticleList;