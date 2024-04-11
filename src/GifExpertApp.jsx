import { useState } from 'react';
import { AddCategory, GIfGrid } from './components';

export const GifExpertApp = ( ) => {

    const [categories, setCategories] = useState(['Sirenita']);

    const onAddCategory = ( newCategory) =>  {
        

        if (categories.includes(newCategory) ) return; // si ya existe no lo inserta 

        setCategories ( [newCategory, ...categories] )
    
    }


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ (value) => onAddCategory( value )}
            />
            
            {
                categories.map( (category) => (
                    <GIfGrid 
                        key={ category }
                        category={ category }/>

                )) 
            }
        </>
    )
}
