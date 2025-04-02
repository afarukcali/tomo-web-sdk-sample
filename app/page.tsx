import ConnectWrapper from "./ConnectWrapper";
import "@tomo-inc/tomo-web-sdk/style.css";
import TomoConnect from "./TomoConnect";

export default function Home() {
    return (
        <ConnectWrapper>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <TomoConnect />
            </div>
        </ConnectWrapper>
    );
}
