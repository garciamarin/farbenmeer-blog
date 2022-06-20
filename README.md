# Farbenmeer Coding Challenge 

## What is it

This a Mock Blog made for a Farbenmeer Coding Challenge.
It is a frontend Next.js Site, which displays blogposts fetched from a provided GraphQl Api. 

## Routes

- `/gql` - Displays all blogposts. 

To display the Detail Page of a given blogpost with id = N there exist two endpoints:

- `/gql/?blog=N` - is a dynamic page, which doesn't fetch the API again after once fetching for /gql page. This is achieved by using *shallow routing*. 

- `/gql/N` - These endpoints are generated using the standard Next.js folder structure for  dynamical pages `[ id ].js` via _getStaticPaths_ and _getStaticProps_.

## Packages

These extra packages are used:

    - Tailwind (for css styling)
	- Apollo Client (to fetch the GraphQL Api)
    - following testing packages: 
        - @testing-library/jest-do  
        - @testing-library/react
        - @testing-library/user-event
        - jest
        - jest-environment-jsdom
	- cross-fetch (for replicating a fetch method for tests )