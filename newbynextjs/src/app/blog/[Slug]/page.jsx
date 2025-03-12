export async function generateStaticParams() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    let posts = await res.json();
    let ids = posts.map(
        (post)=>(
            {slug:post.id.toString()}
        )
    );
    return ids;
};





export default async function PostDetail({ params }) {
    let { slug } =  params;
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    let goalPost = await res.json();
    console.log(res);
    return (
        <div style={{width:"100%",height:"100vh",background:"gray"}}>
            <h2>{goalPost.title}</h2>
            <p>{goalPost.body}</p>
        </div>
    );
}