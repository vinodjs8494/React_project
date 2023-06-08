import '../styles/categories.css'
const Categories = () => {
    let categories=[
        {link:"All"},
        {link:"Travel"},
        {link:"Music"},
        {link:"Food"},
        {link:"Live"},
        {link:"Gardening"},
        {link:"Sandalwood movies"},
        {link:"History"},
        {link:"Sports"},
        {link:"Gaming"}
    ]
    return ( 
    <div className="categories">
<ul>
    {categories.map((data)=>{
return (
    <li><a href="">{data.link}</a></li>
)
    })}
</ul>


    </div> );
}
 
export default Categories;