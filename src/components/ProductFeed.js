import Product from "./Product";

/**
 * @Author - Vikram Nayyar
 * 
 * @returns - JSX Grid of Products, using the array of product components as a prop.
 */


function ProductFeed({products}) {

    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto scrollbar-hide">
            
                {products.slice(0,4).map(({id,title,price,description,category,image}) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))}

            
            <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt=""/>

            <div className="md:col-span-2">
                {products.slice(4,5).map(({id,title,price,description,category,image}) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))}
            </div>

            

            {products.slice(5,8).map(({id,title,price,description,category,image}) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            ))}

            <div className="md:col-span-3">
                {products.slice(8,9).map(({id,title,price,description,category,image}) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))}
            </div>

            <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt=""/>

            {products.slice(9,18).map(({id,title,price,description,category,image}) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            ))
            }

            <div className="md:col-span-3">
                {products.slice(18,products.length).map(({id,title,price,description,category,image}) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))
                }
            </div>
            
            <div className="ml-10 mr-10 grid md:col-span-4">
                
                
                
            </div>
            
        </div>
    )
}

export default ProductFeed
