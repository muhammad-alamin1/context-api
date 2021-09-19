import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h2>This is Home: {category}</h2>
            <Categories />
        </div>
    );
};

export default Home;