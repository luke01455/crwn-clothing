import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer, PreviewContainer, Title } from './collection-preview.styles';

// when collection preview is used in shop, it gives SHOP_DATA as the props
const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <Title>{title.toUpperCase()}</Title>
        <PreviewContainer>
        {items
        // filter index to only display first 4
           .filter((item, idx) => idx < 4)
        // map through the items to give key and name
           .map((item) => (
                <CollectionItem key={item.id}item={item} />
           ))    
        }
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPreview;