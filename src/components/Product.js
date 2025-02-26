import Image from "next/image";
import {useState} from "react";
import {StarIcon} from "@heroicons/react/solid";
import Currency from 'react-currency-formatter';
import {useDispatch} from 'react-redux';
import {addToBasket} from "../slices/basketSlice";

/**
 * @Author - Vikram Nayyar
 * 
 * This component is used within ProductFeed.
 * 
 * We randomly assign ratings.
 * 
 * We 'dispatch' products into the Basket Slice.
 * 
 * @returns - JSX Component for each product.
 */

function Product({id,title,price,description,category,image}) {
    const MAX_RATING = 5;
    const MIN_RATING = 1;
    const [rating, setRating] = useState(Math.floor(Math.random() * (MAX_RATING-MIN_RATING + 1)) + MIN_RATING);
    const [hasPrime, setHasPrime] = useState(Math.random() < 0.5);
    const dispatch = useDispatch();

    //Dispatch product into REDUX Basket Slice:
    const addItemToBasket = () => {
        const product = {id,title,price,description,category,image,rating,hasPrime}
        dispatch(addToBasket(product));
    }

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10 cursor-pointer">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

            <Image
                src={image}
                width={200}
                height={200}
                objectFit="contain"
            />

            <h4 className="my-3">{title}</h4>

            <div className="flex">
                {Array(rating).fill().map((_,i) => (
                    <StarIcon key={i} className="h-5 text-yellow-500"/>
                ))}
            </div>

            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
                <Currency quantity={price} currency="GBP"/>
            </div>

            {/**
             * Additional prime logo if that applies.
             */}
            {hasPrime && 
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12 object-contain" src="https://links.papareact.com/fdw" alt="Prime Logo"/>
                    <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
                </div>
            }

            <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>
        </div>
    )
};

export default Product
