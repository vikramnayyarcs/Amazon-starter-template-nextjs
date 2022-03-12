/**
 * @Author - Vikram Nayyar
 * 
 * Creating an API which creates the checkout session asynchronously.
 * 
 * We then 'transform' the items into a format that Stripe can work with (making it easy to pass the items to them and then they 
 * create the checkout page).
 * 
 * Creates the checkout session, using the 'transformed' items.
 * 
 * Finally returns 200 if ok or 400 if there's an error.
 * 
 */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const {items, email} = req.body;
    //console.log(items);
    //console.log(email);

    const transformedItems = items.map(item => ({
        description: item.description,
        quantity: 1,

        price_data: {
            currency: 'gbp',
            unit_amount: item.price*100,
            product_data: {
                name: item.title,
                images: [item.image]
            },
        }
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_rates: ['shr_1JDsXmBSugDrjAbZjv2T5cfC'],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA']
        },
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map(item => item.image))
        }
    })

    res.status(200).json({id: session.id}) //All went well.
}