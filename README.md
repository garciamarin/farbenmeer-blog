# Farbenmeer Coding Challenge 

## What is this

It is a Mock Blog made for a Farbenmeer Coding Challenge.
It is a frontend Next.js Site, which displays blog posts fetched from a provided GraphQl or Rest Api. 

## How to start

First thing one needs is the server from Farbenmeer's Code Challenge, which can be found [here](https://github.com/farbenmeer/code-challenge). Clone and run.

Second, please clone this repo to your local files and then do the usual: In a terminal, navigate inside the project's containing folder and run:

`npm install`   

`npm run dev` 

The first command installs required dependencies and the second runs the project using a node server. This reminds me: You need node.js (https://nodejs.org/en/download/) for things to work! Finally, visit `http://localhost:3000/` and navigate.

## Routes

- `/gql` -> Displays all blog posts, which are fetched using the **GraphQl Api**. 

    There exist two endpoints for displaying the Detail Page of a given blog post with id = N:

    - `/gql/?blog=N`

    - `/gql/N` 
    
- `/rest` ->  Displays all blogposts, fetched using the **Rest Api**. 

    - `/rest/?blog=N` - shows the Detail Page of a given blog post with id = N.

## How is that done

- **GraphQl Api** 
 
 All blog posts are fetched at `\gql` using the Apollo Client.  

 At a `/gql/?blog=N` endpoint, the query value `query:{blog:N}` is obtained from the URL with the help of the `useRouter` hook of  Next.js. The details of the particular blog post are gotten from the data which was once fetched at `/gql` and displayed using a conditional statement, which is dependent on the dynamical value of the query. By using the *shallow routing* property of the router from `useRouter`, it's achieved that only one fetch is done in this process.
 
 In contrast, the dynamical `/gql/N` endpoints are generated using the standard Next.js folder structure for  dynamical pages `[ id ].js` via _getStaticPaths_ and _getStaticProps_. In these functions, we use the Apollo Client again to obtain all the blog posts info and the specifical post.
 
- **Rest Api** 
 
 All blogposts are fetched at `\rest` using the custom hook `useRestApi`. 

 Similarity as above, in a `/gql/?blog=N` endpoint, the query from the URL is obtained with `useRouter` to display the details to the desired blog post from the original data fetched at `/rest`. Using *shallow routing* it's achieved that only one fetch is done in the process. 

## Tests

Some tests are included to check layout and interaction. However, tests for the `\rest` page were left out. 

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