import React from 'react';
import Data from '../../components/image/data';

function CategoryPage({match} : {match:any}) {
    return (
        <div>
            {/* <Category id={match.params.id} /> */}
            <Data />
        </div>
    );
}

export default CategoryPage;