import Image from "next/image";
import {MenuIcon, SearchIcon, ShoppingCartIcon,LocationMarkerIcon} from "@heroicons/react/outline";
import {PlayIcon,ChevronDownIcon} from "@heroicons/react/solid";
import {useState, useEffect} from "react";
import { addTerm, selectTerm } from "../slices/termSlice";
import {useSelector, useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {signIn, signOut, useSession} from "next-auth/client";
import { selectItems } from "../slices/basketSlice";


function Header() {
    //https://www.npmjs.com/package/react-country-dropdown
    const dispatch = useDispatch();
    const selector = useSelector(selectTerm);
    const [term, setTerm] = useState(selector);
    const router = useRouter();
    const [session] = useSession();
    const items = useSelector(selectItems);

    //console.log(items)
    
    

    useEffect(() => {
        dispatch(addTerm(term))
        //setTerm(selector)
    }, [term])

    const submitSearch = (e) => {
        e.preventDefault();
        if (term === "") {
            router.push('/')
        }
        else {
            dispatch(addTerm(term));
            router.push(`/results/${term}`);
            setTerm(selector);
            console.log(selector);
        }
        
    }

    return (
        <header className="header" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div 
                    className="hidden sm:flex mt-2 flex items-center flex-grow
                               sm:flex-grow-0 " 
                >
                    <Image
                        className="cursor-pointer"
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        onClick={() => router.push('/')}
                    />
                    <LocationMarkerIcon className="text-white h-6"/>
                    <div className="flex flex-col hover:outline-white px-3 mx-2">
                        <p className="link text-gray-200 text-xs">Hello</p>
                        <p className="font-extrabold md:text-sm link text-white pr-3">Select your address</p>
                    </div>
                    
                </div>

                <form onSubmit={submitSearch} className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    
                    <input
                        className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md outline-none focus:outline-none px-4"
                        type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
            
                    />

                    <SearchIcon onClick={submitSearch} className="h-12 p-4 "/>
                </form>

                
                <div className="flex items-center text-xs space-x-6 mx-6  text-white whitespace-nowrap ">
                    <div onClick={!session ? signIn : signOut} className="link hover:outline-white px-3 mx-2">
                        <p>Hello {session ? session.user.name : ", Please Sign In"}</p>

                        <div className="flex">
                            <p className="font-extrabold md:text-sm">Account & Lists</p>
                            <ChevronDownIcon className="h-6 pt-3 pl--4 cursor-pointer "/>
                        </div>
                        
                        
                    </div>

                    <div onClick={() => router.push("/orders")} className="link hover:outline-white px-3 mx-2">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <div onClick={() => router.push("/checkout")} className="relative link flex items-center hover:outline-white px-3 mx-2">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline font-extrabold md:text-sm">Basket</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center p-1 hover:outline-white">
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </p>
                <p className="link flex items-center p-1 hover:outline-white">Best Sellers</p>
                <p className="link flex items-center p-1 hover:outline-white">Prime Video</p>
                <p className="link flex items-center p-1 hover:outline-white">New Releases</p>
                <p className="link flex items-center p-1 hover:outline-white">Customer Services</p>
                <p className="link flex items-center p-1 hover:outline-white">Prime<ChevronDownIcon className="h-6 pt-3 pl--4 cursor-pointer "/></p>
                
                <p className="link flex items-center p-1 hover:outline-white">Books</p>
                <p className="link flex items-center p-1 hover:outline-white">Today's Deals</p>
                <p className="link flex items-center p-1 hover:outline-white">Home & Garden</p>
                <p className="link flex items-center p-1 hover:outline-white"></p>
                {/**link hidden lg:inline-flex COME BACK LATER?! APPLY AFTER LINE 59? */}
                <div className="hidden md:flex flex items-center right-0">
                    <PlayIcon className="h-8 text-blue-400 cursor-pointer"/>
                    <a href="https://www.amazon.co.uk/amazonprime"><h1 className="text-xl text-blue-400 font-bold cursor-pointer">{`Amazon Prime`} </h1></a>
                    <p className="text-xl text-gray-400 font-bold cursor-pointer">{`| 30-day `}<u className="text-white">free trial</u></p>
                </div>
                

            </div>
        </header>

    )
}

export default Header
