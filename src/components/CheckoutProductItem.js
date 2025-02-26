import Image from "next/image";
import {StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import {useDispatch} from "react-redux";
import {addToBasket, removeFromBasket} from "../slices/basketSlice";

/**
 * @Author - Vikram Nayyar
 * 
 * The purpose of this component is to return a 'CheckoutProductItem' which differs in relation to a typical product.
 * because it has the 'addItemToBasket' and 'removeItemFromBasket' functionality.
 * 
 * We make use of Redux to send/'dispatch' an item into the store.
 * 
 * The ratings are random.
 * 
 * @param {*} - Props thar relate to the details of each 'CheckoutProductItem'.
 * @returns  - JSX relating to a 'CheckoutProductItem' Component.
 */

function CheckoutProductItem({id,title,price,description,category,image,rating,hasPrime}) {

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {id,title,price,description,category,image,rating,hasPrime}

        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain"/>

            <div className="cols-span-3 mx-5">
                <p>{title}</p>
                
                <div className="flex">
                    {Array(rating).fill().map((_,i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500"/>
                    ))}
                </div>

                <p className="text-xs mt-2 my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency={"GBP"}/>

                {hasPrime && (
                    <div class = "flex items-center space-x-2">
                        <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt=""/>
                        <p className = "text-xs text-gray-500">FREE Next-Day Delivery</p>
                    </div>
                )}
            </div>

            <div className = "flex flex-col space-y-2 my-auto justify-self-end">
                <button className ="button" onClick={addItemToBasket}>Add Another to Basket!</button>
                <button className ="button" onClick={removeItemFromBasket}>Remove From Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProductItem
