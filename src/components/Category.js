import React from 'react'
import {Link} from 'react-router-dom'
import CategoryCard from './CategoryCard'
import data from '../data/db.json'

const Category = () => {
    return (
        <div className="category-component">
            <div className="header-popular px-4">
                <h1>There's something for everyone!</h1>
            </div>
            <div className="category-container">
                <div className="container">
                    <div className="row">
                        {data.categories.map((category,index) => (
                                <div className="col-lg-3 col-md-3  col-6 mt-2" key={index}>
                                 <Link className="category-link" to="/">    
                                <CategoryCard
                                        id={category.id}
                                        name={category.name}
                                    />
                                     </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
