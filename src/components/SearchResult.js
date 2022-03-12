import Image from "next/image";

/**
 * @Author - Vikram Nayyar
 * 
 * @returns - Needs to render a horizontal product component.
 */

function SearchResult({id,title,price,description,category,image}) {
    return (
        <div className="flex items-center">
            <div className="my-10">
                <Image
                    className="cursor-pointer "
                    src={image}
                    width={300}
                    height={200}
                    objectFit="contain"
                />
            </div>

            <div>
                <h1 className="font-bold">{title}</h1>
                <h2>£{price}</h2>
                <p>Get it Tomorrow, </p>
            </div>
            
            
        </div>
    )
}

export default SearchResult
