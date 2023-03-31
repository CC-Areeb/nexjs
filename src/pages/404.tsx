import Link from "next/link";
import { useEffect } from "react";

const NotFound = () => {

    useEffect(() => {

    }, []) 

    return (
        <>
            <div className="not-found text-center mt-4">
                <h1 className="display-4">Oooops...</h1>
                <h4 className="display-5">The page cannot be found.</h4>
                <p>
                    Back to home 👉<Link href="/" className="text-decoration-none text-success fs-5">Homepage</Link>
                </p>
            </div>
        </>
    );
}

export default NotFound;