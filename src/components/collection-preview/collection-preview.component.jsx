import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

// when collection preview is used in shop, it gives SHOP_DATA as the props
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {items
        // filter index to only display first 4
           .filter((item, idx) => idx < 4)
        // map through the items to give key and name
           .map((item) => (
                <CollectionItem key={item.id}item={item} />
           ))    
        }
        </div>
    </div>
)

export default CollectionPreview;