import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import ButtonBack from './ButtonBase';

import Rest1 from '../assets/1.jpg';
import Rest2 from '../assets/2.jpg';
import Rest3 from '../assets/3.jpg';
import Rest4 from '../assets/4.jpg';
import Fairy from '../assets/fairy.jpg';
import Waffle from '../assets/waffle.jpg';
import Open from '../assets/open.jpeg';
import Spider from '../assets/spider.jpg';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, '
      + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  image: {
    margin: 5,
  },
});

const tileData = [
  {
    img: Rest1,
    title: 'Mr. Charles',
    author: 'author',
    featured: true,
  },
  {
    img: Rest2,
    title: 'Venesuella',
    author: 'author',
    featured: false,
  },
  {
    img: Rest3,
    title: 'Funushka',
    author: 'author',
    featured: true,
  },
  {
    img: Rest4,
    title: 'AcuaDeck',
    author: 'author',
    featured: false,
  },
];

const btnData = [
  {
    src: Fairy,
    title: 'Փերիների փարթի',
    author: 'author',
    featured: true,
  },
  {
    src: Open,
    title: 'Բացօթյա միջոցառում',
    author: 'author',
    featured: false,
  },
  {
    src: Waffle,
    title: 'Վաֆլիներով Դիսնեյ փարթի',
    author: 'author',
    featured: true,
  },
  {
    src: Spider,
    title: 'Սփայդերների փարթի',
    author: 'author',
    featured: false,
  },
];

class AdvancedGridList extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={200} spacing={1} className={classes.gridList}>
          {btnData.map(item => (
            <ButtonBack key={item.title} image={item} />
          ))}

          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={1} rows={1}>
              <img src={tile.img} alt={tile.title} className={classes.image} />
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionIcon={(
                  <IconButton className={classes.icon}>
                    <StarBorderIcon />
                  </IconButton>
                )}
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(AdvancedGridList);
