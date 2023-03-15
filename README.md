This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Why use next js

- It is a framework of react js that can create pre-rendered React websites. 

- It offers us both the server side rendering (SSR) and static site generation (SSG). 

- By the time the next app is rendered onto the browser, the react components are already rendered within the html.

- The app can work as an Single Page Application (SPA) resulting in better Search Engine Optimization (SEO) and improves performance.

### Next directory structure

- Next comes along with its pre-defined directory structure.

- The JSX screens we make are kept inside the pages directory.

- Next js automatically creates the routing when you create a file.

- Even if the file in the sub-folder then the routing will start from that sub-folder and then the file name.


### Custom components

- Often in our next js app, we want to reuse certain components like for example a navbar or a footer so we can do that by simply creating a new folder but this new folder has to be outside the pages folder that next js has.

- For good practise it is prefered that this custom components folder is made in the root of the project.


### Navigation

- When working with nextjs, we do not use the anchor tags `<a> </a>` but instead we use the `<Link href={}> </Link>` tags to jump between the pages so that all the navigation is done by JavaScript and that the page does not have to load over and over again when different requests are sent.

- We can send in either a template literal, a simple string or a whole component inside the Link tags `<Link href=''> </Link>` | `<Link href={${}}> </Link>` | `<Link href={<component />}> </Link>`