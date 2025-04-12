import { ExpandedMenuIcon, NotExpandedMenuIcon } from '~/components/icon/icons/Icons';

interface IconProps {
    isExpanded: boolean;
    size: number;
}

export default function MenuIcon({ isExpanded, size }: IconProps) {
    return isExpanded ? <ExpandedMenuIcon size={size} /> : <NotExpandedMenuIcon size={size} />;
}
