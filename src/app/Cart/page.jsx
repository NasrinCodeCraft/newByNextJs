

import ClientFile from "./clientfile";

export function generateMetadata() {
    return {
        title: "Home|Your online cart",
        description: "Browse amazing cart Products...",
        openGraph: {
            title: "Home|Your online cart social media",
            description: "Browse amazing cart social media",
        }

    }
}

export default function Cart() {

    return (
        <ClientFile />
    );
}