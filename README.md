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

- In TS (TypeScript), it is important to define the type of anything like if you define a variable, it should also have a type when you first define it 

    ```
    let words: string = '';
    const numbers: number = 9;
    ```

- Similarly, there are types if you are nesting any component inside another component.

    ```
    export default function App({ Component, pageProps }: AppProps) {
        return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
        );
    }
    ```

    ```
    export default function Layout({ children: Element }) {
        return (
            <div>Layout</div>
        )
    }
    ```

- In the above example, The Layout component is the parent component and the `<Component {...pageProps} />` is the child so inside the Layout's file we had to define that we are destructuring the child element as well as defining that it's a child / children.


- If you are getting an error about the child/children element then you can try to make an interface for this 

    ```
    import { ReactNode } from 'react';
    import Footer from './Footer'
    import Navbar from './Navbar'

    interface LayoutProps {
        children: ReactNode;
    }

    export default function Layout({ children }: LayoutProps) {
        return (
            <div className='content'>
                <Navbar />
                {children}
                <Footer />
            </div>
        );
    }
    ```

- Here, we are using the ReactNode type to indicate that children can be any valid JSX expression, and we are also defining a separate interface for the props with the children prop explicitly typed as ReactNode. (From chat gpt)

- You can also make this method short by defing the interface within the export statement

    ```
    export default function Layout({ children }:  {children: ReactNode})
    ```

### Styling

- There are fews ways to style a component in next js. First is by styling in a global css file that next already has given us, secondly we can do some styling in a JSX way (inline stylig) and lastly we can do in modules like `Home.module.css`.

- The Module way of styling is quite unique as we can use the same class names in different modules and this will ensure that only a certain page has those styles applied on it as only that module is imported for that perticualar page.

    index.tsx
    ```
    <div className="main-page">
        // content
    </div>
    ```

    Home.module.css
    ```
    .mainHeading {
        text-align: center;
    }
    ```

- It is important to make sure that you import the module's file and make sure the styles you are defining are of the class rather than the selector as these modules styles will only work for classes.

    ```
    import styles from '../styles/Home.module.css'
    ```