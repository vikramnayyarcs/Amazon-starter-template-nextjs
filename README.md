# Next JS ECommerce CLONE

ECommerce Store using Next JS, Stripe and FireBase.

## Project Structure

app - Contains the REDUX store.

components - Reusable JSX components for the application.

pages - Different pages that make up the application.

api - Build in as part of create-next-app. Also contains our authentication, webhook and create-checkout-session code.

results - Search results.

slices - REDUX slices.

styles - Global styles used to setup Tailwind CSS.

## Installation Steps

### Using npm

Run commands

1) ```npm install```


2) ```npm run dev```


### Or using yarn

Run commands 

1) ```npm install --global yarn```

2) ```yarn install```

3) ```yarn run dev```

## How to Run

### FireBase Admin

Download 'permissions.json' using the following steps:
FireBase
Project Settings
Generate New Project Key
Rename JSON

Make sure you have your own set of ENV variables.

Run both the frontend and the backend (ensure the Stripe Signing Secret that appears when running the Webhook Listener matches the one in your ENV file).

FrontEnd:

```npm run dev```

WebHook Listener:

``` stripe listen --forward-to localhost:3000/api/webhook ```

When filling in the checkout screen, you may need to use to test card (keep typing 424242424242424242 until you can't type anymore characters in).
