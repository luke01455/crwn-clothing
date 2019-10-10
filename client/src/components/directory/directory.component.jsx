import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles';



const Directory = ({sections}) => (
    <DirectoryMenuContainer>
      {
        sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
          //title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} --> equiavlent of typing this
        ))}
    </DirectoryMenuContainer>
  );

  const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
  });

export default connect(mapStateToProps)(Directory);