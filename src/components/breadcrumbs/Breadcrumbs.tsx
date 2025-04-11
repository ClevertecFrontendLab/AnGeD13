import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router';

import { BreadcrumbsContext } from '~/utils/breadCrumbsContext';

export default function Breadcrumbs() {
    const { path, setPath } = useContext(BreadcrumbsContext);

    const handleClick = (newTitle: string) => {
        if (newTitle === 'Главная') {
            setPath([{ title: 'Главная', link: '/' }]);
        }
    };

    return (
        <Breadcrumb
            display={{
                base: 'none',
                lg: 'block',
            }}
            fontFamily='font'
            fontWeight={400}
            fontSize={16}
            lineHeight='150%'
            color='rgba(0, 0, 0, 0.64)'
            separator={<ChevronRightIcon color='#1a202c' h='24px' />}
        >
            {path.map(({ title, link }, index) => (
                <BreadcrumbItem key={index} sx={index === path.length - 1 ? { color: '#000' } : {}}>
                    <Link to={link} onClick={() => handleClick(title)}>
                        {title}
                    </Link>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
}
