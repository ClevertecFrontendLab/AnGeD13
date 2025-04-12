import * as iconTypes from '../components/icon/icons/Icons';

export interface newRecipeCard {
    title: string;
    description: string;
    imageUrl: string;
    badgeCategory: string;
    badgeIcon: keyof typeof iconTypes;
    svgId: string;
    bookmark?: number;
    emoji?: number;
}

export const newRecipes: newRecipeCard[] = [
    {
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: 'src/assets/images/recipes/solyanka.jpg',
        badgeCategory: 'Первые блюда',
        badgeIcon: 'FirstCourseIcon',
        svgId: 'new_1',
        bookmark: 1,
    },
    {
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        imageUrl: 'src/assets/images/recipes/cabbage_patties.jpg',
        badgeCategory: 'Веганская кухня',
        badgeIcon: 'VeganIcon',
        svgId: 'new_2',
        bookmark: 2,
        emoji: 1,
    },
    {
        title: `Оладьи на кефире "Пышные"`,
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        imageUrl: 'src/assets/images/recipes/pancakes.jpg',
        badgeCategory: 'Десерты, выпечка',
        badgeIcon: 'DessertIcon',
        svgId: 'new_3',
        emoji: 1,
    },
    {
        title: `Салат "Здоровье"`,
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        imageUrl: 'src/assets/images/recipes/salad.jpg',
        badgeCategory: 'Салаты',
        badgeIcon: 'SaladsIcon',
        svgId: 'new_4',
    },
    {
        title: `Салат "Здоровье"`,
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        imageUrl: 'src/assets/images/recipes/salad.jpg',
        badgeCategory: 'Салаты',
        badgeIcon: 'SaladsIcon',
        svgId: 'new_5',
    },
];
