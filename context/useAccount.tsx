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

// Create the context with an undefined default value
const AccountContext = createContext<AccountProps | undefined>(undefined);

interface AccountProviderProps {
    children: ReactNode;
}

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
        localStorage.removeItem('currentAccount');
        await axios.get('/api/logout')
        setAccount({ id: "", token: "", type: "" });
        toast.success('Logged Out')
        router.push('/login');
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
