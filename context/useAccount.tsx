"use client";

import React, { createContext, useContext, useState, ReactNode, FC, useEffect } from "react";

// Define the interface for the context value
interface AccountProps {
    currentAccountId: string | undefined;
    token: string | undefined;
    accountType: string | undefined;
    setAccountData: (accountId: string, token: string, accountType: string) => void;
}

// Create the context with an undefined default value
const AccountContext = createContext<AccountProps | undefined>(undefined);

interface AccountProviderProps {
    children: ReactNode;
}

// Define the provider component
export const AccountProvider: FC<AccountProviderProps> = ({ children }) => {
    const [currentAccountId, setCurrentAccountId] = useState<string | undefined>(undefined);
    const [token, setToken] = useState<string | undefined>(undefined);
    const [accountType, setAccountType] = useState<string | undefined>(undefined);

    const setAccountData = (accountId: string, token: string, accountType: string) => {
        setCurrentAccountId(accountId);
        setAccountType(accountType)
        setToken(token);
    };

    useEffect(() => {
        const storedAccount = localStorage.getItem('currentAccount');
        if (storedAccount) {
            const parsedAccount = JSON.parse(storedAccount);
            setAccountData(parsedAccount.accountId, parsedAccount.accountType, parsedAccount.token);
        }
    }, []);


    const LogOut = () => {
        localStorage.removeItem('currentAccount');
    };

    return (
        <AccountContext.Provider value={{ currentAccountId, token, accountType, setAccountData }}>
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
