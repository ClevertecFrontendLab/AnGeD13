import * as iconTypes from '../components/icon/icons/Icons';

export interface RecipeCard {
    title: string;
    description: string;
    imageUrl: string;
    badgeCategory: string;
    badgeIcon: keyof typeof iconTypes;
    bookmark?: number;
    emoji?: number;
    personAvatarRecommendation?: string;
    personNameRecommendation?: string;
    svgId: string;
}

export const recipesHome: RecipeCard[] = [
    {
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: 'src/assets/images/recipes/quenelle.jpg',
        badgeCategory: 'Вторые блюда',
        badgeIcon: 'SecondCourseIcon',
        bookmark: 85,
        emoji: 152,
        svgId: 'home1',
    },
    {
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: 'src/assets/images/recipes/ham.jpg',
        badgeCategory: 'Вторые блюда',
        badgeIcon: 'SecondCourseIcon',
        bookmark: 159,
        emoji: 257,
        personAvatarRecommendation: 'src/assets/images/avatars/elena.png',
        personNameRecommendation: 'Елена Высоцкая',
        svgId: 'home2',
    },
    {
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: 'src/assets/images/recipes/noodles.jpg',
        badgeCategory: 'Вторые блюда',
        badgeIcon: 'SecondCourseIcon',
        bookmark: 258,
        emoji: 342,
        personAvatarRecommendation: 'src/assets/images/avatars/alex.png',
        personNameRecommendation: 'Alex Cook',
        svgId: 'home3',
    },
    {
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: 'src/assets/images/recipes/tom-yum.jpg',
        badgeCategory: 'Национальные',
        badgeIcon: 'NationalIcon',
        bookmark: 124,
        emoji: 324,
        svgId: 'home4',
    },
];

export const recipesBest: RecipeCard[] = [
    {
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: 'src/assets/images/recipes/noodles.jpg',
        badgeCategory: 'Вторые блюда',
        badgeIcon: 'SecondCourseIcon',
        bookmark: 258,
        emoji: 342,
        personAvatarRecommendation: 'src/assets/images/avatars/alex.png',
        personNameRecommendation: 'Alex Cook',
        svgId: 'best1',
    },
    {
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: 'src/assets/images/recipes/tom-yum.jpg',
        badgeCategory: 'Национальные',
        badgeIcon: 'NationalIcon',
        bookmark: 124,
        emoji: 324,
        svgId: 'best2',
    },
    {
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: 'src/assets/images/recipes/ham.jpg',
        badgeCategory: 'Вторые блюда',
        badgeIcon: 'SecondCourseIcon',
        bookmark: 159,
        emoji: 257,
        personAvatarRecommendation: 'src/assets/images/avatars/elena.png',
        personNameRecommendation: 'Елена Высоцкая',
        svgId: 'best3',
    },
    {
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: 'src/assets/images/recipes/quenelle.jpg',
        badgeCategory: 'Вторые блюда',
        badgeIcon: 'SecondCourseIcon',
        bookmark: 124,
        emoji: 231,
        svgId: 'best4',
    },
    {
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        imageUrl: 'src/assets/images/recipes/potato.jpg',
        badgeCategory: 'Вторые блюда',
        badgeIcon: 'SecondCourseIcon',
        bookmark: 120,
        emoji: 180,
        svgId: 'best5',
    },
    {
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        imageUrl: 'src/assets/images/recipes/rolls.jpg',
        badgeCategory: 'Детские блюда',
        badgeIcon: 'ChildIcon',
        bookmark: 85,
        emoji: 180,
        svgId: 'best6',
    },
    {
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        imageUrl: 'src/assets/images/recipes/lasagna.jpg',
        badgeCategory: 'Блюда на гриле',
        badgeIcon: 'GrillIcon',
        bookmark: 85,
        emoji: 152,
        svgId: 'best7',
    },
    {
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        imageUrl: 'src/assets/images/recipes/meatballs.jpg',
        badgeCategory: 'Вторые блюда',
        badgeIcon: 'SecondCourseIcon',
        bookmark: 85,
        emoji: 150,
        svgId: 'best8',
    },
];

export const recipesVegan: RecipeCard[] = [
    {
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        imageUrl: 'src/assets/images/recipes/potato.jpg',
        badgeCategory: 'Национальные',
        badgeIcon: 'NationalIcon',
        bookmark: 85,
        emoji: 152,
        svgId: 'vegan1',
    },
    {
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        imageUrl: 'src/assets/images/recipes/rolls.jpg',
        badgeCategory: 'Детские блюда',
        badgeIcon: 'ChildIcon',
        bookmark: 85,
        emoji: 152,
        svgId: 'vegan2',
    },
    {
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: 'src/assets/images/recipes/tom-yum.jpg',
        badgeCategory: 'Национальные',
        badgeIcon: 'NationalIcon',
        bookmark: 124,
        emoji: 324,
        svgId: 'vegan3',
    },
    {
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        imageUrl: 'src/assets/images/recipes/lasagna.jpg',
        badgeCategory: 'Блюда на гриле',
        badgeIcon: 'GrillIcon',
        bookmark: 85,
        emoji: 152,
        svgId: 'vegan4',
    },
    {
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        imageUrl: 'src/assets/images/recipes/meatballs.jpg',
        badgeCategory: 'Вторые блюда',
        badgeIcon: 'SecondCourseIcon',
        bookmark: 85,
        emoji: 152,
        svgId: 'vegan5',
    },
    {
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        imageUrl: 'src/assets/images/recipes/meatballs.jpg',
        badgeCategory: 'Вторые блюда',
        badgeIcon: 'SecondCourseIcon',
        bookmark: 85,
        emoji: 152,
        svgId: 'vegan6',
    },
    {
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        imageUrl: 'src/assets/images/recipes/garlic_potato.jpg',
        badgeCategory: 'Национальные',
        badgeIcon: 'NationalIcon',
        bookmark: 124,
        emoji: 322,
        svgId: 'vegan7',
    },
    {
        title: 'Пури',
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        imageUrl: 'src/assets/images/recipes/puri.jpg',
        badgeCategory: 'Национальные',
        badgeIcon: 'NationalIcon',
        bookmark: 124,
        emoji: 324,
        svgId: 'vegan8',
    },
];
