import { createContext, Dispatch, SetStateAction } from 'react';

export type BreadcrumbPath = Array<{ title: string; link: string }>;

interface BreadcrumbsContext {
    path: BreadcrumbPath;
    setPath: Dispatch<SetStateAction<BreadcrumbPath>>;
    activePanel: boolean;
    setActivePanel: Dispatch<SetStateAction<boolean>>;
}

export const BreadcrumbsContext = createContext<BreadcrumbsContext>({
    path: [{ title: 'Главная', link: '/' }],
    setPath: () => {},
    activePanel: false,
    setActivePanel: () => {},
});
