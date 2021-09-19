import React, { useContext } from 'react';
import { CategoryContext } from '../../App';


const Header = (props) => {
    const [category, setCategory] = useContext(CategoryContext);

    return (
        <div>
            <h2>This is header: {category}</h2>
            <button onClick={() => setCategory("laptop")} >Laptop</button>
            <button onClick={() => setCategory("mobile")} >Mobile</button>
            <button onClick={() => setCategory("camera")} >Camera</button>
        </div>
    );
};

export default Header;