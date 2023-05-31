import { DUMMY_MEALS } from "./dummy-meals";
import styles from './MealList.module.css';
import { Card } from "../UI/Card/Card";
import { MealItem } from "./MealsItem/MealItem";

export const MealsList = () => {

    const mealList = DUMMY_MEALS.map(meal => <li> <MealItem name = {meal.name} description = {meal.description} price = {meal.price}key={meal.id}/></li>);


    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>
    )
}