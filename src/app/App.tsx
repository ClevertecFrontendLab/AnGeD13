import { Box, ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router';

import Loader from '~/components/appLoader/Loader';
import Content from '~/components/content/Content';
import Footer from '~/components/footer/Footer';
import Header from '~/components/header/Header';
import { BreadcrumbsContext, MenuTab } from '~/contexts/breadCrumbsContext';
import { selectGlobalLoading } from '~/query/selectors';
import { useAppSelector } from '~/store/hooks';
import theme from '~/theme';

function App() {
    const isLoading = useAppSelector(selectGlobalLoading);

    const [activePanel, setActivePanel] = useState<boolean>(false);
    const [tabs, setTabs] = useState<MenuTab>({ category: '', title: '', index: 0 });
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const [isAuthorized, setIsAuthorized] = useState<boolean>(true);
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [isActiveSwitcher, setIsActiveSwitcher] = useState<boolean>(false);
    const [filterRecipeTitle, setFilterRecipeTitle] = useState<string>('');
    const [filterIngredients, setFilterIngredients] = useState<string[]>([]);
    const [filterGlobalMeatType, setFilterGlobalMeatType] = useState<string[]>([]);
    const [filterGlobalSideType, setFilterGlobalSideType] = useState<string[]>([]);
    const [filterGlobalAuthor, setFilterGlobalAuthor] = useState<string[]>([]);
    const [filterGlobalCategories, setFilterGlobalCategories] = useState<string[]>([]);

    return (
        <BreadcrumbsContext.Provider
            value={{
                activePanel,
                setActivePanel,
                tabs,
                setTabs,
                isBurgerOpen,
                setIsBurgerOpen,
                isFilterOpen,
                setIsFilterOpen,
                filterRecipeTitle,
                setFilterRecipeTitle,
                filterIngredients,
                setFilterIngredients,
                filterGlobalMeatType,
                setFilterGlobalMeatType,
                filterGlobalSideType,
                setFilterGlobalSideType,
                filterGlobalAuthor,
                setFilterGlobalAuthor,
                filterGlobalCategories,
                setFilterGlobalCategories,
                isAuthorized,
                setIsAuthorized,
                isActiveSwitcher,
                setIsActiveSwitcher,
                isSearching,
                setIsSearching,
            }}
        >
            <BrowserRouter>
                <ChakraProvider theme={theme}>
                    <Header />
                    <Content />
                    <Footer />
                    <Box
                        position='absolute'
                        top='0px'
                        left='0px'
                        w='100%'
                        h='100%'
                        zIndex={isBurgerOpen ? 1 : 3}
                        bg='rgba(0, 0, 0, 0.16)'
                        backdropFilter='blur(4px)'
                        display={isBurgerOpen || isFilterOpen ? 'block' : 'none'}
                    />
                    {isLoading && <Loader />}
                </ChakraProvider>
            </BrowserRouter>
        </BreadcrumbsContext.Provider>
    );
}

export default App;
