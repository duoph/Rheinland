"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, ReactNode, FC, useEffect } from "react";
import toast from "react-hot-toast";

// Define the interface for the context value
interface AccountProps {
    account: {
        id: string;
        token: string;
        type: string;
    };
    LogOut: () => void;
    setAccountData: (accountId: string, token: string, accountType: string) => void;
}

interface AccountProviderProps {
    children: ReactNode;
}

// Create the context with an undefined default value
const AccountContext = createContext<AccountProps | undefined>(undefined);

// Define the provider component
export const AccountProvider: FC<AccountProviderProps> = ({ children }) => {
    const [account, setAccount] = useState({
        id: "",
        token: "",
        type: ""
    });

    const setAccountData = (id: string, token: string, type: string) => {
        const newAccount = { id, token, type };
        setAccount(newAccount);
        localStorage.setItem('currentAccount', JSON.stringify(newAccount));
    };

    useEffect(() => {
        const storedAccount = localStorage.getItem('currentAccount');
        if (storedAccount) {
            const parsedAccount = JSON.parse(storedAccount);
            setAccount(parsedAccount);
        }
    }, []);

    const router = useRouter();

    const LogOut = async () => {
        try {
            // Call the logout API to remove cookies
            const res = await axios.get('/api/logout');

            // Check if the logout was successful and cookies were removed
            if (res.data.success) {
                // Verify if the cookies were successfully deleted
                const tokenCookie = document.cookie.includes("token=");
                const accountTypeCookie = document.cookie.includes("accountType=");

                if (!tokenCookie && !accountTypeCookie) {
                    // If cookies are removed, clear local storage and update the account state
                    localStorage.removeItem('currentAccount');
                    localStorage.removeItem('savedJobs');
                    setAccount({ id: "", token: "", type: "" });
                    toast.success('Logged Out');
                    router.push('/login');
                } else {
                    toast.error('Logout failed. Cookies were not removed.');
                }
            }
        } catch (error) {
            console.error('Error during logout:', error);
            toast.error('Logout failed.');
        }
    };


    return (
        <AccountContext.Provider value={{ account, setAccountData, LogOut }}>
            {children}
        </AccountContext.Provider>
    );
};

// Custom hook to use the account context
export const useAccount = (): AccountProps => {
    const context = useContext(AccountContext);

    if (!context) {
        throw new Error('useAccount must be used within an AccountProvider');
    }

    return context;
};
