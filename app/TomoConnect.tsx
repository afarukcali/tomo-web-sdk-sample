"use client";

import { useTomo } from "@tomo-inc/tomo-web-sdk";

export default function TomoConnect() {
    const { openConnectModal, connected, providers, walletState } = useTomo();
    const { movementProvider } = providers;

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                onClick={() => openConnectModal()}
            >
                Connect Wallet
            </button>

            <div
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                    connected
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                }`}
            >
                {connected ? "Connected" : "Not Connected"}
            </div>

            <div>
                {walletState.movementAddress &&
                    `My Address is : ${walletState.movementAddress}`}
            </div>
        </div>
    );
}
