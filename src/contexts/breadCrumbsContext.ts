import { createContext, Dispatch, SetStateAction } from 'react';

export type MenuTab = { category: string; title: string; index: number };

interface BreadcrumbsContext {
    activePanel: boolean;
    setActivePanel: Dispatch<SetStateAction<boolean>>;
    tabs: MenuTab;
    setTabs: Dispatch<SetStateAction<MenuTab>>;
    isBurgerOpen: boolean;
    setIsBurgerOpen: Dispatch<SetStateAction<boolean>>;
    isFilterOpen: boolean;
    setIsFilterOpen: Dispatch<SetStateAction<boolean>>;
    filterRecipeTitle: string;
    setFilterRecipeTitle: Dispatch<SetStateAction<string>>;
    filterIngredients: string[];
    setFilterIngredients: Dispatch<SetStateAction<string[]>>;
    filterGlobalMeatType: string[];
    setFilterGlobalMeatType: Dispatch<SetStateAction<string[]>>;
    filterGlobalSideType: string[];
    setFilterGlobalSideType: Dispatch<SetStateAction<string[]>>;
    filterGlobalAuthor: string[];
    setFilterGlobalAuthor: Dispatch<SetStateAction<string[]>>;
    filterGlobalCategories: string[];
    setFilterGlobalCategories: Dispatch<SetStateAction<string[]>>;
    isAuthorized: boolean;
    setIsAuthorized: Dispatch<SetStateAction<boolean>>;
    isActiveSwitcher: boolean;
    setIsActiveSwitcher: Dispatch<SetStateAction<boolean>>;
    isSearching: boolean;
    setIsSearching: Dispatch<SetStateAction<boolean>>;
}

export const BreadcrumbsContext = createContext<BreadcrumbsContext>({
    activePanel: false,
    setActivePanel: () => {},
    tabs: { category: '', title: '', index: 0 },
    setTabs: () => {},
    isBurgerOpen: false,
    setIsBurgerOpen: () => {},
    isFilterOpen: false,
    setIsFilterOpen: () => {},
    filterRecipeTitle: '',
    setFilterRecipeTitle: () => {},
    filterIngredients: [],
    setFilterIngredients: () => {},
    filterGlobalMeatType: [],
    setFilterGlobalMeatType: () => {},
    filterGlobalSideType: [],
    setFilterGlobalSideType: () => {},
    filterGlobalAuthor: [],
    setFilterGlobalAuthor: () => {},
    filterGlobalCategories: [],
    setFilterGlobalCategories: () => {},
    isAuthorized: false,
    setIsAuthorized: () => {},
    isActiveSwitcher: false,
    setIsActiveSwitcher: () => {},
    isSearching: false,
    setIsSearching: () => {},
});
