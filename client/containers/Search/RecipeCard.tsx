import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import * as i from '../../interface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      minHeight: 200,
      margin: '1em 0'
    },
    image: {
      width: '100%'
    },
    recipeDetailContainer: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  })
);

const RecipeCard = (props: i.IRecipe) => {
  const c = useStyles();
  return (
    <main className={c.mainContainer}>
      <img className={c.image} src={props.image} />
      <article className={c.recipeDetailContainer}>
        <section>
          <div onClick={(e) => e.stopPropagation()}>
            <a href={props.sourceUrl}>{props.title}</a>
          </div>
          <div>Ready in: {props.readyInMinutes}mins</div>
          <div>Servings: {props.servings}</div>
        </section>
        <section>You have all the ingredients</section>
      </article>
    </main>
  );
};

export default RecipeCard;
