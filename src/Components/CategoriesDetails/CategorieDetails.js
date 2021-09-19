import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoriesDetails = (props) => {
    console.log(props);
    const { name } = props.product;

    // const [category] = useContext(CategoryContext);
    return (
        <div>
            <h4>This is CategoryDetails: {name} </h4>
        </div>
    );
};

export default CategoriesDetails;