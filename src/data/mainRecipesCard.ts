import cabbageImg from '../assets/images/recipes/cabbage_patties.jpg';
import garlicImg from '../assets/images/recipes/garlic_potato.jpg';
import lasagnaImg from '../assets/images/recipes/lasagna.jpg';
import meatballsImg from '../assets/images/recipes/meatballs.jpg';
import noodlesImg from '../assets/images/recipes/noodles.jpg';
import potatoImg from '../assets/images/recipes/potato.jpg';
import puriImg from '../assets/images/recipes/puri.jpg';
import rollsImg from '../assets/images/recipes/rolls.jpg';
import saladImg from '../assets/images/recipes/salad.jpg';
import solyankaImg from '../assets/images/recipes/solyanka.jpg';
import tomyumImg from '../assets/images/recipes/tom-yum.jpg';
import * as iconTypes from '../components/icon/icons/Icons';

type KeyOfIconTypes = keyof typeof iconTypes;

export interface Ingredients {
    title: string;
    count: string;
    measureUnit: string;
}

export interface RecipeCard {
    title: string;
    description: string;
    imageUrl: string;
    category: string[];
    subcategory: string[];
    badgeCategory: string[];
    badgeIcon: KeyOfIconTypes[];
    bookmark?: number;
    emoji?: number;
    personAvatarRecommendation?: string;
    personNameRecommendation?: string;
    ingredients?: Ingredients[];
    meat?: string;
    side?: string;
    author?: string;
}

export const recipesHome: RecipeCard[] = [
    {
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: noodlesImg,
        badgeCategory: [
            'Вторые блюда',
            'Национальные блюда',
            'Вторые блюда',
            'Вторые блюда',
            'Вторые блюда',
        ],
        badgeIcon: [
            'SecondCourseIcon',
            'NationalIcon',
            'SecondCourseIcon',
            'SecondCourseIcon',
            'SecondCourseIcon',
        ],
        category: ['Национальные блюда'],
        subcategory: ['Паназиатская кухня'],
        bookmark: 258,
        emoji: 342,
        personAvatarRecommendation: 'src/assets/images/avatars/alex.png',
        personNameRecommendation: 'Alex Cook',
        ingredients: [
            { title: 'лапша', count: '200', measureUnit: 'г' },
            { title: 'курица', count: '300', measureUnit: 'г' },
            { title: 'шафран', count: '1', measureUnit: 'ч. л.' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
    },
    {
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: tomyumImg,
        badgeCategory: ['Национальные'],
        badgeIcon: ['NationalIcon'],
        category: ['Национальные блюда'],
        subcategory: ['Паназиатская кухня'],
        bookmark: 124,
        emoji: 324,
    },
    {
        title: 'Лапша с курицей и шафраном',
        description: 'Ароматная лапша с курицей и шафраном, идеальное сочетание для сытного обеда.',
        imageUrl: noodlesImg,
        badgeCategory: ['Национальные'],
        badgeIcon: ['NationalIcon'],
        category: ['Национальные блюда'],
        subcategory: ['Паназиатская кухня'],
        bookmark: 2,
        emoji: 1,
        ingredients: [
            { title: 'лапша', count: '200', measureUnit: 'г' },
            { title: 'курица', count: '300', measureUnit: 'г' },
            { title: 'шафран', count: '1', measureUnit: 'ч. л.' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
    },
    {
        title: 'Гриль-салат с овощами',
        description: 'Салат с обжаренными на гриле овощами и легкой заправкой.',
        imageUrl: saladImg,
        badgeCategory: ['Национальные'],
        badgeIcon: ['NationalIcon'],
        category: ['Национальные блюда'],
        subcategory: ['Паназиатская кухня'],
        bookmark: 2,
        emoji: 1,
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'баклажан', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '0', measureUnit: 'по вкусу' },
        ],
    },
];

export const recipesBest: RecipeCard[] = [
    {
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: noodlesImg,
        badgeCategory: ['Вторые блюда'],
        badgeIcon: ['SecondCourseIcon'],
        category: ['Национальные блюда'],
        subcategory: ['Паназиатская кухня'],
        bookmark: 258,
        emoji: 342,
        personAvatarRecommendation: 'src/assets/images/avatars/alex.png',
        personNameRecommendation: 'Alex Cook',
        ingredients: [
            { title: 'лапша', count: '200', measureUnit: 'г' },
            { title: 'курица', count: '300', measureUnit: 'г' },
            { title: 'шафран', count: '1', measureUnit: 'ч. л.' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
    },
    {
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: tomyumImg,
        badgeCategory: ['Национальные'],
        badgeIcon: ['NationalIcon'],
        category: ['Национальные блюда'],
        subcategory: ['Паназиатская кухня'],
        bookmark: 124,
        emoji: 324,
    },
    {
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        imageUrl: lasagnaImg,
        badgeCategory: ['Блюда на гриле'],
        badgeIcon: ['GrillIcon'],
        category: ['Национальные блюда'],
        subcategory: ['Паназиатская кухня'],
        bookmark: 85,
        emoji: 152,
    },
    {
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        imageUrl: meatballsImg,
        badgeCategory: ['Вторые блюда'],
        badgeIcon: ['SecondCourseIcon'],
        category: ['Национальные блюда'],
        subcategory: ['Паназиатская кухня'],
        bookmark: 85,
        emoji: 150,
    },
];

export const recipesVegan: RecipeCard[] = [
    {
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        imageUrl: potatoImg,
        badgeCategory: ['Национальные'],
        badgeIcon: ['NationalIcon'],
        category: ['Веганская кухня', 'Вторые блюда'],
        subcategory: ['Закуски', 'Овощные'],
        bookmark: 85,
        emoji: 152,
        ingredients: [
            { title: 'картошка', count: '4', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '2', measureUnit: 'шт.' },
            { title: 'фасоль', count: '200', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        meat: '',
        side: 'Картошка',
    },
    {
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        imageUrl: rollsImg,
        badgeCategory: ['Детские блюда'],
        badgeIcon: ['ChildIcon'],
        category: ['Веганская кухня', 'Закуски'],
        subcategory: ['Закуски', 'Теплые закуски'],
        bookmark: 85,
        emoji: 152,
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        side: 'Картошка',
    },
    {
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: tomyumImg,
        badgeCategory: ['Национальные'],
        badgeIcon: ['NationalIcon'],
        category: ['Национальные блюда'],
        subcategory: ['Паназиатская кухня'],
        bookmark: 124,
        emoji: 324,
    },
    {
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        imageUrl: lasagnaImg,
        badgeCategory: ['Блюда на гриле'],
        badgeIcon: ['GrillIcon'],
        category: ['Веганская кухня', 'Вторые блюда', 'Национальные блюда'],
        subcategory: ['Вторые блюда', 'Овощные', 'Итальянская кухня', 'Закуски'],
        bookmark: 85,
        emoji: 152,
        ingredients: [
            { title: 'лаваш', count: '3', measureUnit: 'листов' },
            { title: 'овощной соус', count: '300', measureUnit: 'мл' },
            { title: 'соус бешамель', count: '200', measureUnit: 'мл' },
            { title: 'сыр', count: '100', measureUnit: 'г' },
        ],
    },
    {
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        imageUrl: meatballsImg,
        badgeCategory: ['Вторые блюда'],
        badgeIcon: ['SecondCourseIcon'],
        category: ['Веганская кухня', 'Вторые блюда'],
        subcategory: ['Вторые блюда', 'Из птицы'],
        bookmark: 85,
        emoji: 152,
        ingredients: [
            { title: 'булгур', count: '150', measureUnit: 'г' },
            { title: 'чечевица', count: '100', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
    },
    {
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        imageUrl: garlicImg,
        badgeCategory: ['Национальные'],
        badgeIcon: ['NationalIcon'],
        category: ['Веганская кухня', 'Вторые блюда'],
        subcategory: ['Гарниры', 'Вторые блюда', 'Овощные'],
        bookmark: 124,
        emoji: 322,
        ingredients: [
            { title: 'картошка', count: '6', measureUnit: 'шт.' },
            { title: 'чеснок', count: '5', measureUnit: 'зубчиков' },
            { title: 'масло', count: '50', measureUnit: 'мл' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        side: 'Картошка',
    },
    {
        title: 'Пури',
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста. Рецепт лепешек пури требует самых доступных ингредиентов, и  времени на приготовление хрустящих лепешек уйдет мало.',
        imageUrl: puriImg,
        category: ['Национальные блюда'],
        subcategory: ['Американская кухня'],
        badgeCategory: ['Национальные'],
        badgeIcon: ['NationalIcon'],
        bookmark: 124,
        emoji: 324,
    },
    {
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных блюд.',
        imageUrl: cabbageImg,
        badgeCategory: ['Национальные'],
        badgeIcon: ['NationalIcon'],
        category: ['Веганская кухня'],
        subcategory: ['Вторые блюда', 'Закуски'],
        bookmark: 2,
        emoji: 1,
        ingredients: [
            { title: 'капуста', count: '300', measureUnit: 'г' },
            { title: 'мука', count: '50', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
    },
    {
        title: 'Овощное рагу',
        description: 'Сытное рагу из сезонных овощей, приправленное травами.',
        imageUrl: solyankaImg,
        badgeCategory: ['Национальные'],
        badgeIcon: ['NationalIcon'],
        category: ['Веганская кухня', 'Вторые блюда'],
        subcategory: ['Гарниры', 'Овощные', 'Закуски'],
        bookmark: 2,
        emoji: 1,
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'морковь', count: '1', measureUnit: 'шт.' },
            { title: 'картошка', count: '2', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
    },
];
