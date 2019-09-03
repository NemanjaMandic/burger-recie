import React, {FunctionComponent} from 'react';
import { BreadBottom, BreadTop, Seeds1, Seeds2, Meat, Cheese, Salad, Bacon } from './BurgerIngredient.styled';

export interface IBurgerIngredientsProps {
    type: string
}
 
const BurgerIngredients: FunctionComponent<IBurgerIngredientsProps> = (props: IBurgerIngredientsProps) => {
    let ingredient = null;

    switch(props.type){
        case('bread-bottom'):
            ingredient = <BreadBottom />;
         break;
         case('bread-top'):
            ingredient = (
            <BreadTop>
                <Seeds1 />
                <Seeds2 />
            </BreadTop>
         );
         break;
         case('meat'):
            ingredient = <Meat />
         break;
         case('cheese'):
            ingredient = <Cheese />
         break;
         case('bacon'):
            ingredient = <Bacon />
         break;
         case('salad'):
            ingredient = <Salad />
         break;
         default:
                ingredient = null;
         break;
    }
    return ingredient;
}
 
export default BurgerIngredients;