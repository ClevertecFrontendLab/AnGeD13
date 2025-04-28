import * as iconTypes from '../components/icon/icons/Icons';

type KeyOfIconTypes = keyof typeof iconTypes;

export interface RecipeProps {
    id: string;
    title: string;
    description: string;
    category: string[];
    subcategory: string[];
    badgeIcon: KeyOfIconTypes[];
    image: string;
    bookmarks: number;
    likes: number;
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
}

export const test: RecipeProps = {
    id: '7',
    title: 'Лапша с курицей и шафраном',
    description: 'Ароматная лапша с курицей и шафраном, идеальное сочетание для сытного обеда.',
    category: ['Вторые блюда', 'Первые блюда'],
    subcategory: ['poultry-dish'],
    badgeIcon: ['SecondCourseIcon', 'FirstCourseIcon'],
    image: 'путь к изображению в вашем проекте',
    bookmarks: 258,
    likes: 1342,
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
            image: 'url',
        },
        {
            stepNumber: 2,
            description: 'Обжарить курицу с луком и шафраном.',
            image: 'url',
        },
        {
            stepNumber: 3,
            description: 'Смешать лапшу с курицей и подавать.',
            image: 'url',
        },
    ],
};
