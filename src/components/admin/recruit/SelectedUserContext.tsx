import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SelectedUserContextProps {
    selectedUserIds: number[];
    setSelectedUserIds: React.Dispatch<React.SetStateAction<number[]>>;
    selectAll: boolean;
    setSelectAll: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectedUserContext = createContext<SelectedUserContextProps | undefined>(
    undefined,
);

export const useSelectedUsers = () => {
    const context = useContext(SelectedUserContext);
    if (context === undefined) {
        throw new Error(
            'useSelectedUsers must be used within a SelectedUsersProvider',
        );
    }
    return context;
};

interface SelectedUsersProviderProps {
    children: ReactNode;
}

export const SelectedUsersProvider: React.FC<SelectedUsersProviderProps> = ({
    children,
}) => {
    const [selectedUserIds, setSelectedUserIds] = useState<number[]>([]);
    const [selectAll, setSelectAll] = useState<boolean>(false);

    return (
        <SelectedUserContext.Provider
            value={{
                selectedUserIds,
                setSelectedUserIds,
                selectAll,
                setSelectAll,
            }}
        >
            {children}
        </SelectedUserContext.Provider>
    );
};

export {};
