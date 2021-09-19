import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoriesDetails from '../CategoriesDetails/CategorieDetails';


const AllProducts = [
    {
        name: 'Asus',
        category: 'laptop',
    },
    {
        name: 'Dell',
        category: 'laptop'
    },
    {
        name: 'Samsung',
        category: 'mobile',
    },
    {
        name: 'Nokia',
        category: 'mobile'
    },
    {
        name: 'Canon',
        category: 'camera',
    },
    {
        name: 'Sony',
        category: 'camera'
    },
];

const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const matchProduct = AllProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchProduct);

    }, [category])


    return (
        <div>
            <h4>Select Your  category: {category} </h4>
            {
                products.map(product => <CategoriesDetails product={product} />)
            }
        </div>
    );
};

export default Categories;