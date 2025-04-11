import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router';

import Content from '~/components/content/Content';
import Footer from '~/components/footer/Footer';
import Header from '~/components/header/Header';
import theme from '~/theme';
import { BreadcrumbPath, BreadcrumbsContext } from '~/utils/breadCrumbsContext';

function App() {
    const [path, setPath] = useState<BreadcrumbPath>([{ title: 'Главная', link: '/' }]);
    const [activePanel, setActivePanel] = useState<boolean>(false);

    return (
        <BreadcrumbsContext.Provider value={{ path, setPath, activePanel, setActivePanel }}>
            <BrowserRouter>
                <ChakraProvider theme={theme}>
                    <Header />
                    <Content />
                    <Footer />
                </ChakraProvider>
            </BrowserRouter>
        </BreadcrumbsContext.Provider>
    );
}

export default App;
