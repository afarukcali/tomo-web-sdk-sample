"use client";

import { TomoContextProvider } from "@tomo-inc/tomo-web-sdk";

export default function ConnectWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <TomoContextProvider
            theme="dark"
            chainTypes={["movement"]}
            clientId={process.env.NEXT_PUBLIC_TOMO_CLIENT_ID}
        >
            {children}
        </TomoContextProvider>
    );
}
