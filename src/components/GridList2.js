import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import Rest1 from '../assets/1.jpg';
import Rest3 from '../assets/3.jpg';
import Rest4 from '../assets/4.jpg';
import Rest5 from '../assets/5.jpg';
import Rest6 from '../assets/6.jpg';
import Rest7 from '../assets/7.jpg';
import Rest8 from '../assets/8.jpg';

const tileData = [
  {
    img: Rest1,
    title: 'Retro Cafe',
    author: 'Retro',
    featured: true,
  },
  {
    img: Rest7,
    title: 'Cakes',
    author: 'Sweets',
    featured: false,
  },
  {
    img: Rest6,
    title: 'Balloons & Decorations',
    author: 'Decorations',
    featured: false,
  },
  {
    img: Rest3,
    title: 'Cafe',
    author: 'Cafe',
    featured: true,
  },
  {
    img: Rest5,
    title: 'Cartoon Heroes',
    author: 'Cartoon',
    featured: false,
  },
  {
    img: Rest8,
    title: 'Restaurant',
    author: 'game',
    featured: false,
  },
];

function TitlebarGridList() {
  return (
    <div>
      <h3 style={{ color: 'white', textAlign: 'center', margin: 25 }}>Քո տոնի մասնիկները</h3>
      <GridList>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={(
                <span>
                  {tile.author}
                </span>
              )}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default TitlebarGridList;
