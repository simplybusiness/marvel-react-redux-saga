# Marvelous React Saga

A fun Crash Course for React - Redux - Sagas

Here's a link to the [presentation](https://docs.google.com/presentation/d/1PJfp1tZjT2uK-lqnYnTgthH3w7OyZOTQFOGNBswt_iU/edit?usp=sharing)

## Install - it

To install both UI and API (server) dependencies run:

```node
yarn install
```

To install/update ui deps

## Run - it

To run both UI and API run:

```node
yarn start
```

## Own - it

The rest is up to you!

## Exercise steps:

1. Use the already loaded `heroes.json` file to display a list of our heroes (already imported, passed as `prop` in the `HeroList` Component. Feel free to create sub-components if you feel like it - such as `Hero` or `HeroDetails`. Also feel free to style as you want your components using `emotionjs` styled-components). Only display hero `name` and `avatar` on that list.
2. When you click a hero on your list, its full description shows up (name, avatar, description). It can show either next to the list, above or underneath it. For this, you'll need to pass the `onClick` handler as a prop for now.
3. Instead of importing the `json` file and passing the `heroes` list as a prop, create a global store with a `heroes` reducer and load the data in there. Connect the component to the store and make sure your app still works!
4. Instead of passing the `onClick` as a prop, when you click on a hero it will need to dispatch an action to your store, which then update the `selectedHero` property with the selected hero's data. And you'll use this property to update your component's state accordingly.
5. Up until now the hero list is being imported from local environment. At this step you'll need to use `redux-thunk` to load your heroes list from your server (endpoint for this is: `http://localhost:3000/heroes`) to your store.
6. Once you've acoomplished that with `redux-thunk` you can go on and try the exact same thing but using the `redux-saga` middleware.
7. Feel free to play with any variations you want. To infinity and beyond!
