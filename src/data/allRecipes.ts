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

export const getRecipeTitleById = (id: string) => {
    const recipe = allRecipes.find((item) => item.id === id);
    return recipe?.title;
};

type KeyOfIconTypes = keyof typeof iconTypes;

export interface Recipe {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string[];
    subcategory: string[];
    badgeCategory: string[];
    badgeIcon: KeyOfIconTypes[];
    bookmark?: number;
    emoji?: number;
    date: string;
    time: string;
    portions: number;
    nutritionValue: {
        calories: number;
        proteins: number;
        fats: number;
        carbohydrates: number;
    };
    ingredients: {
        title: string;
        count: string;
        measureUnit: string;
    }[];
    steps: {
        stepNumber: number;
        description: string;
        image: string;
    }[];
    meat?: string[];
    side?: string[];
}

export const allRecipes: Recipe[] = [
    {
        id: '0',
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт добавления томатной пасты.',
        category: ['vegan', 'second-dish'],
        subcategory: ['snacks', 'vegetables'],
        imageUrl: potatoImg,
        bookmark: 85,
        badgeCategory: ['Веганская кухня', 'Вторые блюда'],
        badgeIcon: ['VeganIcon', 'SecondCourseIcon'],
        emoji: 152,
        date: '2025-02-28T00:00:00Z',
        time: '40 минут',
        portions: 2,
        nutritionValue: { calories: 250, proteins: 5, fats: 8, carbohydrates: 40 },
        ingredients: [
            { title: 'картошка', count: '4', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '2', measureUnit: 'шт.' },
            { title: 'фасоль', count: '200', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать картошку и перец.',
                image: potatoImg,
            },
            {
                stepNumber: 2,
                description: 'Обжарить лук до золотистого цвета.',
                image: potatoImg,
            },
            {
                stepNumber: 3,
                description: 'Добавить картошку, перец и фасоль, залить соусом.',
                image: potatoImg,
            },
            {
                stepNumber: 4,
                description: 'Тушить на медленном огне 30 минут.',
                image: potatoImg,
            },
        ],
        meat: [''],
        side: ['potatoes'],
    },
    {
        id: '1',
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов. Готовится это блюдо без яиц, без мяса и без сыра, из самых простых ингредиентов, а получается очень вкусно и сытно. Постный рецепт картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и даже на праздничный стол!',
        category: ['vegan', 'snacks'],
        subcategory: ['snacks', 'warm-snacks'],
        badgeCategory: ['Веганская кухня', 'Закуски'],
        badgeIcon: ['VeganIcon', 'SnacksIcon'],
        imageUrl: rollsImg,
        bookmark: 85,
        emoji: 1152,
        date: '2024-02-20T00:00:00Z',
        time: '30 минут',
        portions: 2,
        nutritionValue: { calories: 180, proteins: 4, fats: 6, carbohydrates: 28 },
        ingredients: [
            { title: 'картошка', count: '3', measureUnit: 'шт.' },
            { title: 'грибы', count: '200', measureUnit: 'г' },
            { title: 'мука', count: '100', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Отварить картошку и сделать пюре.',
                image: rollsImg,
            },
            {
                stepNumber: 2,
                description: 'Обжарить грибы до готовности.',
                image: rollsImg,
            },
            {
                stepNumber: 3,
                description: 'Сформировать рулетики и обжарить.',
                image: rollsImg,
            },
        ],
        side: ['potatoes'],
    },
    {
        id: '2',
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья готовится с овощным соусом и соусом бешамель, а вместо листов для лазаньи используется тонкий лаваш.',
        category: ['vegan', 'second-dish', 'national'],
        subcategory: ['second-dish', 'vegetables', 'italian-cuisine', 'snacks'],
        badgeCategory: ['Веганская кухня', 'Вторые блюда', 'Национальные блюда'],
        badgeIcon: ['VeganIcon', 'SecondCourseIcon', 'NationalIcon'],
        imageUrl: lasagnaImg,
        bookmark: 85,
        emoji: 152,
        date: '2023-01-25T00:00:00Z',
        time: '1 час',
        portions: 1,
        nutritionValue: { calories: 300, proteins: 12, fats: 8, carbohydrates: 45 },
        ingredients: [
            { title: 'лаваш', count: '3', measureUnit: 'листов' },
            { title: 'овощной соус', count: '300', measureUnit: 'мл' },
            { title: 'соус бешамель', count: '200', measureUnit: 'мл' },
            { title: 'сыр', count: '100', measureUnit: 'г' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Приготовить соусы.',
                image: lasagnaImg,
            },
            {
                stepNumber: 2,
                description: 'Сложить слои лазаньи.',
                image: lasagnaImg,
            },
            {
                stepNumber: 3,
                description: 'Запекать 30 минут.',
                image: lasagnaImg,
            },
        ],
    },
    {
        id: '3',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        category: ['vegan', 'second-dish'],
        subcategory: ['second-dish', 'poultry-dish'],
        badgeCategory: ['Веганская кухня', 'Вторые блюда'],
        badgeIcon: ['VeganIcon', 'SecondCourseIcon'],
        imageUrl: meatballsImg,
        bookmark: 85,
        emoji: 152,
        date: '2023-02-15T00:00:00Z',
        time: '50 минут',
        portions: 4,
        nutritionValue: { calories: 200, proteins: 10, fats: 5, carbohydrates: 30 },
        ingredients: [
            { title: 'булгур', count: '150', measureUnit: 'г' },
            { title: 'чечевица', count: '100', measureUnit: 'г' },
            { title: 'томатный соус', count: '200', measureUnit: 'мл' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Смешать булгур и чечевицу.',
                image: meatballsImg,
            },
            {
                stepNumber: 2,
                description: 'Сформировать тефтели и запечь.',
                image: meatballsImg,
            },
            {
                stepNumber: 3,
                description: 'Подавать с соусом.',
                image: meatballsImg,
            },
        ],
    },
    {
        id: '4',
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        category: ['vegan', 'second-dish'],
        subcategory: ['side-dishes', 'second-dish', 'vegetables'],
        imageUrl: garlicImg,
        badgeCategory: ['Веганская кухня', 'Вторые блюда'],
        badgeIcon: ['VeganIcon', 'SecondCourseIcon'],
        bookmark: 124,
        emoji: 342,
        date: '2024-03-01T00:00:00Z',
        time: '30 минут',
        portions: 2,
        nutritionValue: { calories: 220, proteins: 4, fats: 7, carbohydrates: 35 },
        ingredients: [
            { title: 'картошка', count: '6', measureUnit: 'шт.' },
            { title: 'чеснок', count: '5', measureUnit: 'зубчиков' },
            { title: 'масло', count: '50', measureUnit: 'мл' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Очистить и нарезать картошку.',
                image: garlicImg,
            },
            {
                stepNumber: 2,
                description: 'Обжарить с чесноком.',
                image: garlicImg,
            },
            {
                stepNumber: 3,
                description: 'Подавать горячей.',
                image: garlicImg,
            },
        ],
        side: ['potatoes'],
    },
    {
        id: '5',
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных блюд.',
        category: ['vegan'],
        subcategory: ['second-dish', 'snacks'],
        imageUrl: cabbageImg,
        badgeCategory: ['Веганская кухня', 'Закуски'],
        badgeIcon: ['VeganIcon', 'SnacksIcon'],
        bookmark: 2,
        emoji: 1,
        date: '2024-02-05T00:00:00Z',
        time: '35 минут',
        portions: 4,
        nutritionValue: { calories: 150, proteins: 5, fats: 4, carbohydrates: 20 },
        ingredients: [
            { title: 'капуста', count: '300', measureUnit: 'г' },
            { title: 'мука', count: '50', measureUnit: 'г' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать капусту и отварить.',
                image: cabbageImg,
            },
            {
                stepNumber: 2,
                description: 'Смешать с мукой и сформировать котлеты.',
                image: cabbageImg,
            },
            {
                stepNumber: 3,
                description: 'Обжарить до золотистой корочки.',
                image: cabbageImg,
            },
        ],
    },
    {
        id: '6',
        title: 'Овощное рагу',
        description: 'Сытное рагу из сезонных овощей, приправленное травами.',
        category: ['vegan', 'second-dish'],
        subcategory: ['side-dishes', 'vegetables', 'snacks'],
        imageUrl: solyankaImg,
        badgeCategory: ['Веганская кухня', 'Вторые блюда'],
        badgeIcon: ['VeganIcon', 'SecondCourseIcon'],
        bookmark: 8,
        emoji: 60,
        date: '2023-03-12T00:00:00Z',
        time: '1 час',
        portions: 2,
        nutritionValue: { calories: 200, proteins: 5, fats: 8, carbohydrates: 30 },
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'морковь', count: '1', measureUnit: 'шт.' },
            { title: 'картошка', count: '2', measureUnit: 'шт.' },
            { title: 'специи', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Нарезать все овощи.',
                image: solyankaImg,
            },
            {
                stepNumber: 2,
                description: 'Обжарить на сковороде.',
                image: solyankaImg,
            },
            {
                stepNumber: 3,
                description: 'Добавить специи и тушить до готовности.',
                image: solyankaImg,
            },
        ],
    },

    {
        id: '7',
        title: 'Лапша с курицей и шафраном',
        description: 'Ароматная лапша с курицей и шафраном, идеальное сочетание для сытного обеда.',
        category: ['second-dish'],
        subcategory: ['poultry-dish'],
        imageUrl: noodlesImg,
        badgeCategory: ['Вторые блюда'],
        badgeIcon: ['SecondCourseIcon'],
        bookmark: 258,
        emoji: 1342,
        date: '2024-03-08T00:00:00Z',
        time: '40 минут',
        portions: 4,
        nutritionValue: { calories: 400, proteins: 30, fats: 15, carbohydrates: 50 },
        ingredients: [
            { title: 'лапша', count: '200', measureUnit: 'г' },
            { title: 'курица', count: '300', measureUnit: 'г' },
            { title: 'шафран', count: '1', measureUnit: 'ч. л.' },
            { title: 'лук', count: '1', measureUnit: 'шт.' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Отварить лапшу.',
                image: noodlesImg,
            },
            {
                stepNumber: 2,
                description: 'Обжарить курицу с луком и шафраном.',
                image: noodlesImg,
            },
            {
                stepNumber: 3,
                description: 'Смешать лапшу с курицей и подавать.',
                image: noodlesImg,
            },
        ],
    },
    {
        id: '8',
        title: 'Гриль-салат с овощами',
        description: 'Салат с обжаренными на гриле овощами и легкой заправкой.',
        category: ['salads'],
        subcategory: ['warm-salads'],
        imageUrl: saladImg,
        badgeCategory: ['Салаты'],
        badgeIcon: ['SaladsIcon'],
        bookmark: 10,
        emoji: 80,
        date: '2023-03-20T00:00:00Z',
        time: '25 минут',
        nutritionValue: { calories: 150, proteins: 4, fats: 6, carbohydrates: 20 },
        portions: 1,
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'баклажан', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: saladImg,
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: saladImg,
            },
        ],
    },
    {
        id: '9',
        title: 'Гриль-салат с овощами',
        description: 'Салат с обжаренными на гриле овощами и легкой заправкой.',
        category: ['salads'],
        subcategory: ['warm-salads'],
        imageUrl: saladImg,
        badgeCategory: ['Салаты'],
        badgeIcon: ['SaladsIcon'],
        bookmark: 10,
        emoji: 80,
        date: '2023-03-20T00:00:00Z',
        time: '25 минут',
        nutritionValue: { calories: 150, proteins: 4, fats: 6, carbohydrates: 20 },
        portions: 1,
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'баклажан', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: saladImg,
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: saladImg,
            },
        ],
    },
    {
        id: '10',
        title: 'Том-ям с капустой кимчи',
        description: 'Салат с обжаренными на гриле овощами и легкой заправкой.',
        category: ['salads'],
        subcategory: ['warm-salads'],
        imageUrl: tomyumImg,
        badgeCategory: ['Салаты'],
        badgeIcon: ['SaladsIcon'],
        bookmark: 10,
        emoji: 80,
        date: '2023-03-20T00:00:00Z',
        time: '25 минут',
        nutritionValue: { calories: 150, proteins: 4, fats: 6, carbohydrates: 20 },
        portions: 1,
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'баклажан', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: tomyumImg,
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: tomyumImg,
            },
        ],
    },
    {
        id: '11',
        title: 'Пури',
        description: 'Салат с обжаренными на гриле овощами и легкой заправкой.',
        category: ['salads'],
        subcategory: ['warm-salads'],
        imageUrl: puriImg,
        badgeCategory: ['Салаты'],
        badgeIcon: ['SaladsIcon'],
        bookmark: 10,
        emoji: 80,
        date: '2023-03-20T00:00:00Z',
        time: '25 минут',
        nutritionValue: { calories: 150, proteins: 4, fats: 6, carbohydrates: 20 },
        portions: 1,
        ingredients: [
            { title: 'цуккини', count: '1', measureUnit: 'шт.' },
            { title: 'болгарский перец', count: '1', measureUnit: 'шт.' },
            { title: 'баклажан', count: '1', measureUnit: 'шт.' },
            { title: 'оливковое масло', count: '0', measureUnit: 'по вкусу' },
        ],
        steps: [
            {
                stepNumber: 1,
                description: 'Обжарить овощи на гриле.',
                image: puriImg,
            },
            {
                stepNumber: 2,
                description: 'Смешать с заправкой и подавать.',
                image: puriImg,
            },
        ],
    },
];
