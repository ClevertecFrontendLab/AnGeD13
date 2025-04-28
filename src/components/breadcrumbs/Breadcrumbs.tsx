import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router';

import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';
import { getRecipeTitleById } from '~/data/allRecipes';
import { breadcrumbsMapping, generateUrl, getTitleFromUrl } from '~/data/breadcrumbs';

export default function Breadcrumbs() {
    const { setActivePanel, tabs, setTabs, setIsBurgerOpen } = useContext(BreadcrumbsContext);
    const location = useLocation();
    const segments = location.pathname.split('/').filter(Boolean);

    const handleClick = () => {
        setActivePanel(false);
        setIsBurgerOpen(false);
    };

    const handleChangeTabs = (categoryPath: string) => {
        setIsBurgerOpen(false);
        const cats = categoryPath.split('/').filter(Boolean);
        if (cats.length > 1) {
            const catTitle = getTitleFromUrl(cats[0]);
            const catInbread = breadcrumbsMapping.find((item) => item.name === catTitle);
            const subIndex = catInbread!.subcategories!.find((item) => item.path === cats[1]);
            if (catTitle && subIndex) {
                setTabs({ ...tabs, title: catTitle, index: subIndex.id });
                setActivePanel(true);
            }
        }
    };

    return (
        <Breadcrumb
            data-test-id='breadcrumbs'
            fontFamily='font'
            fontWeight={400}
            fontSize={16}
            lineHeight='150%'
            color='rgba(0, 0, 0, 0.64)'
            listProps={{
                w: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                textOverflow: 'ellipsis',
            }}
            separator={<ChevronRightIcon color='#1a202c' h='24px' />}
        >
            <BreadcrumbItem sx={segments.length === 0 ? { color: '#000' } : {}}>
                <BreadcrumbLink as={Link} to='/' onClick={() => handleClick()}>
                    {getTitleFromUrl('/')}
                </BreadcrumbLink>
            </BreadcrumbItem>
            {segments.map((_, index) => {
                const path = segments.slice(0, index + 1).join('/');
                const segmentsTitle = getTitleFromUrl(segments[0]);
                let categoryPath = '';
                if (segmentsTitle) {
                    categoryPath = generateUrl(segmentsTitle, 0);
                }
                if (index === 0) {
                    return (
                        <BreadcrumbItem
                            onClick={() => handleChangeTabs(categoryPath)}
                            key={index}
                            sx={index === segments.length - 1 ? { color: '#000' } : {}}
                        >
                            <BreadcrumbLink as={Link} to={categoryPath}>
                                {getTitleFromUrl(segments[index])}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    );
                } else if (index === 1) {
                    return (
                        <BreadcrumbItem
                            onClick={() => handleChangeTabs(path)}
                            key={index}
                            sx={index === segments.length - 1 ? { color: '#000' } : {}}
                        >
                            <BreadcrumbLink as={Link} to={path}>
                                {getTitleFromUrl(segments[index - 1], segments[index])}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    );
                } else {
                    return (
                        <BreadcrumbItem
                            key={index}
                            sx={index === segments.length - 1 ? { color: '#000' } : {}}
                        >
                            <BreadcrumbLink as={Link} to={path}>
                                {getRecipeTitleById(segments[index])}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    );
                }
            })}
        </Breadcrumb>
    );
}
