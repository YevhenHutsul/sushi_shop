import React from "react"
import { MealsList } from "./MealsList"
import { PromoText } from "./PromoText"

export const Meals = () => {
    return (
        <React.Fragment>
            <PromoText />
            <MealsList />
        </React.Fragment>

    )
}