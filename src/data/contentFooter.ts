import * as iconTypes from '../components/icon/icons/Icons';

interface Card {
    title: string;
    description: string;
    badgeCategory: string;
    badgeIcon: keyof typeof iconTypes;
    bookmark?: number;
    emoji?: number;
    svgId: string;
}

interface List {
    title: string;
    icon: keyof typeof iconTypes;
    svgId: string;
}

interface ContentSection {
    title: string;
    description: string;
    cards: Card[];
    list: List[];
}

interface RelevantData {
    [key: string]: ContentSection;
}

export const contentFooter: RelevantData = {
    home: {
        title: 'Веганская кухня',
        description:
            'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
        cards: [
            {
                title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
                description:
                    'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
                badgeCategory: 'Вторые блюда',
                badgeIcon: 'SecondCourseIcon',
                bookmark: 1,
                emoji: 1,
                svgId: 'rel_home_1',
            },
            {
                title: 'Капустные котлеты',
                description:
                    'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
                badgeCategory: 'Вторые блюда',
                badgeIcon: 'SecondCourseIcon',
                bookmark: 2,
                emoji: 1,
                svgId: 'rel_home_2',
            },
        ],
        list: [
            {
                title: 'Стейк для вегетарианцев',
                icon: 'SecondCourseIcon',
                svgId: 'rel_home_3',
            },
            {
                title: 'Котлеты из гречки и фасоли',
                icon: 'SecondCourseIcon',
                svgId: 'rel_home_4',
            },
            {
                title: 'Сырный суп с лапшой и брокколи',
                icon: 'FirstCourseIcon',
                svgId: 'rel_home_5',
            },
        ],
    },
    best: {
        title: 'Веганская кухня',
        description:
            'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
        cards: [
            {
                title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
                description:
                    'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
                badgeCategory: 'Вторые блюда',
                badgeIcon: 'SecondCourseIcon',
                bookmark: 1,
                emoji: 1,
                svgId: 'rel_best_1',
            },
            {
                title: 'Капустные котлеты',
                description:
                    'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
                badgeCategory: 'Вторые блюда',
                badgeIcon: 'SecondCourseIcon',
                bookmark: 2,
                emoji: 1,
                svgId: 'rel_best_2',
            },
        ],
        list: [
            {
                title: 'Стейк для вегетарианцев',
                icon: 'SecondCourseIcon',
                svgId: 'rel_best_3',
            },
            {
                title: 'Котлеты из гречки и фасоли',
                icon: 'SecondCourseIcon',
                svgId: 'rel_best_4',
            },
            {
                title: 'Сырный суп с лапшой и брокколи',
                icon: 'FirstCourseIcon',
                svgId: 'rel_best_5',
            },
        ],
    },
    vegan: {
        title: 'Десерты, выпечка',
        description:
            'Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.',
        cards: [
            {
                title: 'Бананово-молочное желе',
                description:
                    'Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.',
                badgeCategory: 'Детские блюда',
                badgeIcon: 'ChildIcon',
                bookmark: 1,
                emoji: 1,
                svgId: 'rel_vegan_1',
            },
            {
                title: 'Нежный сливочно-сырный крем для кексов',
                description:
                    'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
                badgeCategory: 'Детские блюда',
                badgeIcon: 'ChildIcon',
                bookmark: 2,
                emoji: 1,
                svgId: 'rel_vegan_2',
            },
        ],
        list: [
            {
                title: 'Домашние сырные палочки',
                icon: 'ChildIcon',
                svgId: 'rel_vegan_3',
            },
            {
                title: 'Панкейки',
                icon: 'NationalIcon',
                svgId: 'rel_vegan_4',
            },
            {
                title: 'Воздушное банановое печенье на сковороде',
                icon: 'VeganIcon',
                svgId: 'rel_vegan_5',
            },
        ],
    },
};
