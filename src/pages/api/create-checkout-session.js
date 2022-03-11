const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    const {items, email} = req.body;
    //console.log(items);
    //console.log(email);

    const transformedItems = items.map(item => ({
        price_data: {
            description: item.description,
            quantity: 1,
            currency: 'gbp',
            unit_amount: item_price*100,
            product_data: {
                name: item_title,
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
}