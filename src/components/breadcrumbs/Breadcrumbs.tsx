import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router';

import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';
import { useGetCategoriesQuery } from '~/query/category-api';
import { useAppSelector } from '~/store/hooks';
import { getTitleFromUrl } from '~/utils/generateTitleFromUrl';
import { generateUrl } from '~/utils/generateUrl';

export default function Breadcrumbs() {
    const { data } = useGetCategoriesQuery();
    const categories = data?.filter((category) => category.subCategories) || [];
    const { recipe } = useAppSelector((state) => state.recipe);
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
            const catTitle = getTitleFromUrl(categories, cats[0]);
            const catInbread = categories.find((item) => item.title === catTitle);
            const subIndex = catInbread!.subCategories!.findIndex(
                (item) => item.category === cats[1],
            );
            if (catTitle && subIndex !== undefined) {
                setTabs({ ...tabs, title: catTitle, index: subIndex });
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
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>
            {segments.map((_, index) => {
                const path = segments.slice(0, index + 1).join('/');
                if (segments.length > 1) {
                    const segmentsTitle = getTitleFromUrl(categories, segments[0]);
                    let categoryPath = '';
                    if (segmentsTitle) {
                        categoryPath = generateUrl(categories, segmentsTitle, 0);
                    }
                    if (index === 0) {
                        return (
                            <BreadcrumbItem
                                onClick={() => handleChangeTabs(categoryPath)}
                                key={index}
                                sx={index === segments.length - 1 ? { color: '#000' } : {}}
                            >
                                <BreadcrumbLink as={Link} to={categoryPath}>
                                    {getTitleFromUrl(categories, segments[index])}
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
                                    {getTitleFromUrl(
                                        categories,
                                        segments[index - 1],
                                        segments[index],
                                    )}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        );
                    } else if (recipe) {
                        return (
                            <BreadcrumbItem
                                key={index}
                                sx={index === segments.length - 1 ? { color: '#000' } : {}}
                            >
                                <BreadcrumbLink as={Link} to={path}>
                                    {recipe.title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        );
                    }
                } else if (segments[index] === 'the-juiciest') {
                    return (
                        <BreadcrumbItem
                            key={index}
                            sx={index === segments.length - 1 ? { color: '#000' } : {}}
                        >
                            <BreadcrumbLink as={Link} to={path}>
                                Самое сочное
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    );
                }
            })}
        </Breadcrumb>
    );
}
