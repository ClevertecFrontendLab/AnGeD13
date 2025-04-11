interface BlogData {
    name: string;
    nick: string;
    avatarSrc: string;
    text: string;
}

export const blogs: BlogData[] = [
    {
        name: 'Елена Высоцкая',
        nick: '@elenapovar',
        avatarSrc: 'src/assets/images/avatars/elena.png',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        name: 'Alex Cook',
        nick: '@funtasticooking',
        avatarSrc: 'src/assets/images/avatars/alex.png',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        name: 'Екатерина Константинопольская',
        nick: '@bake_and_pie',
        avatarSrc: 'src/assets/images/avatars/kate.png',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];
