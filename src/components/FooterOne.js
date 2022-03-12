import {ChevronRightIcon} from "@heroicons/react/solid";
import Image from "next/image";

/**
 * @Author - Vikram Nayyar
 * 
 * @returns - JSX Banner containing a series of information to give a similar frontend to Amazon's.
 */

function FooterOne() {
    return (
        <div className="bg-amazon_blue-light w-full">

            <div className="flex  justify-evenly">
                <div className="flex flex-col">
                <h1 className="text-white font-bold mt-5 pb-3">Get to Know Us</h1>
                <p className="text-white link text-sm">Careers</p>
                <p className="text-white link text-sm">About Us</p>
                <p className="text-white link text-sm">UK Modern Slavery Statement</p>
                <p className="text-white link text-sm">Sustainability</p>
            </div>

            <div className="flex flex-col">
                <h1 className="text-white font-bold bold mt-5 pb-3">Make Money With Us</h1>
                <p className="text-white link text-sm">Sell on Amazon</p>
                <p className="text-white link text-sm">Sell Under Private Brands</p>
                <p className="text-white link text-sm">Sell on Amazon Business</p>
                <p className="text-white link text-sm">Sell on Amazon Handmade</p>
                <p className="text-white link text-sm">Sell on Amazon Launchpad</p>
                <p className="text-white link text-sm">Associates Programme</p>
                <p className="text-white link text-sm">Fulfillment by Amazon</p> 
                <p className="text-white link text-sm">Seller Fulfilled Prime</p>
                <p className="text-white link text-sm">Advertise Your Products</p>
                <p className="text-white link text-sm">Independently Publish With Us</p>
                <p className="text-white link text-sm">Amazon Pay</p>
                <p className="text-white link text-sm">Host an Amazon Hub</p>
                <p className="flex items-center text-white link text-sm mb-5"><ChevronRightIcon className="h-4 text-sm"/>See All</p>
            </div>

            <div className="flex flex-col">
                <h1 className="text-white font-bold bold mt-5 pb-3">Amazon Payment Methods</h1>
                <p className="text-white link text-sm">Amazon Platinum Mastercard</p>
                <p className="text-white link text-sm">Amazon Classic Mastercard</p>
                <p className="text-white link text-sm">Amazon Money Store</p>
                <p className="text-white link text-sm">Gift Cards</p>
                <p className="text-white link text-sm">Amazon Currency Converter</p>
                <p className="text-white link text-sm">Payment Methods Help</p>
                <p className="text-white link text-sm">Shop With Points</p>
                <p className="text-white link text-sm">Top Up Your Account</p>
                <p className="text-white link text-sm">Top Up Your Account In Store</p>
                <p className="text-white link text-sm"></p>
            </div>

            <div className="flex flex-col">
                <h1 className="text-white font-bold bold mt-5 pb-3">Let Us Help You</h1>
                <p className="text-white link text-sm">COVID-19 & Amazon</p>
                <p className="text-white link text-sm">Track Packages or View Orders</p>
                <p className="text-white link text-sm">Delivery Rates & Policies</p>
                <p className="text-white link text-sm">Amazon Prime</p>
                <p className="text-white link text-sm">Returns & Replacements</p>
                <p className="text-white link text-sm">Recycling</p>
                <p className="text-white link text-sm">Managing Your Content and Devices</p>
                <p className="text-white link text-sm">Amazon Mobile App</p>
                <p className="text-white link text-sm">Amazon Assistant</p>
                <p className="text-white link text-sm">Customer Service</p>
            </div>

            </div>

            <hr className="h-1 "/>

            <div className="flex justify-center mt-5">
                <Image
                    className="cursor-pointer"
                    src="https://links.papareact.com/f90"
                    width={150}
                    height={30}
                    objectFit="contain"
                />
            </div>

            <div className="flex justify-between mx-10 pb-10">
                    <p className="text-white link text-xs">Australia</p>
                    <p className="text-white link text-xs">Brazil</p>
                    <p className="text-white link text-xs">Canada</p>
                    <p className="text-white link text-xs">China</p>
                    <p className="text-white link text-xs">France</p>
                    <p className="text-white link text-xs">Germany</p>
                    <p className="text-white link text-xs">India</p>
                    
                    <p className="text-white link text-xs">Italy</p>
                    <p className="text-white link text-xs">Japan</p>
                    <p className="text-white link text-xs">Mexico</p>
                    <p className="text-white link text-xs">Netherlands</p>
                    <p className="text-white link text-xs">Poland</p>
                    <p className="text-white link text-xs">Singapore</p>
                    <p className="text-white link text-xs">Spain</p>
                    <p className="text-white link text-xs">Turkey</p>
                    <p className="text-white link text-xs">United Arab Emirates</p>
                    <p className="text-white link text-xs">United Kingdom</p>
                </div>
            
        </div>
    )
}

export default FooterOne
