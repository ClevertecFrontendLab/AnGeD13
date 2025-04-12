import * as iconTypes from './icons/Icons';

type IconProps = {
    name: keyof typeof iconTypes;
    size: number | undefined;
    id?: string;
};

export default function CustomIcon({ name, size, id }: IconProps) {
    const Component = iconTypes[name];

    return <Component size={size} id={id} />;
}
