import * as iconTypes from './icons/Icons';

type IconProps = {
    name: keyof typeof iconTypes;
    size: number | undefined;
};

export default function CustomIcon({ name, size }: IconProps) {
    const Component = iconTypes[name];

    return <Component size={size} />;
}
