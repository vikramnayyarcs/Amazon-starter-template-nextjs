import { getSession, useSession } from 'next-auth/client';
import React from 'react'
import db from '../../firebase';
import Header from '../components/Header'
import order from '../components/Order'
import moment from 'moment'
import Order from '../components/Order';

function Orders({orders}) {
    //https://youtu.be/4E0WOUYF-QI?t=7782
    const [session] = useSession();

    console.log(orders);

  return (
    <div >
        <Header/>
        <main className="max-w-screen-lg mx-auto p-10">
            <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">Your Orders:</h1>
        
            {
            session ? (
                <h2>{orders.length} Order(s)</h2>
            ) : (
                <h2>Please Sign in TO See YOur Orders</h2>
            )
            }

            <div className="mt-5 space-y-4">
                {orders?.map(({id,amount, amount_shipping, items, timestamp, images}) => (
                    <Order
                        id={id}
                        key={id}
                        amount={amount}
                        amount_shipping={amount_shipping}
                        items={items}
                        timestamp={timestamp}
                        images={images}
                    />
                ))}
            </div>
        </main>
    </div>
  )
}

export default Orders;

export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    //Get the credentials of the logged in user.
    const session = await getSession(context);

    if (!session) {
        return { 
            props: {} 
        }
    };

    const stripeOrders = await db.collection('users').doc(session.user.email).collection('orders').orderBy('timestamp', 'desc').get();

    //Get orders from stripe.
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
        id: order.id,
        amount: order.data().amount,
        amount_shipping: order.data().amount_shipping,
        images: order.data().images,
        timestamp: moment(order.data().timestamp.toDate()).unix(), //Convert to UNIX to avoid losing Timestamp, then back to date.
        items: (
            //Fetch and access data.
            //Go into Session and get the items that come back.
            await stripe.checkout.sessions.listLineItems(order.id, {
                limit: 100
            })
        ).data
    }))
    )

    return {
        props: {
            orders
        }
    }
}