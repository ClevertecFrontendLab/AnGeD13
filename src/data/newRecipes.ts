import * as iconTypes from '../components/icon/icons/Icons';

export interface newRecipeCard {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    subcategory: string;
    badgeCategory: string;
    badgeIcon: keyof typeof iconTypes;
    bookmark?: number;
    emoji?: number;
}

export const newRecipes: newRecipeCard[] = [
    {
        id: '0',
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: 'src/assets/images/recipes/solyanka.jpg',
        category: 'first-dish',
        subcategory: 'meat-soups',
        badgeCategory: 'Первые блюда',
        badgeIcon: 'FirstCourseIcon',
        bookmark: 1,
    },
    {
        id: '1',
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        imageUrl: 'src/assets/images/recipes/cabbage_patties.jpg',
        badgeCategory: 'Веганская кухня',
        badgeIcon: 'VeganIcon',
        category: 'vegan',
        subcategory: 'second-dish',
        bookmark: 2,
        emoji: 1,
    },
    {
        id: '2',
        title: `Оладьи на кефире "Пышные"`,
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        imageUrl: 'src/assets/images/recipes/pancakes.jpg',
        badgeCategory: 'Десерты, выпечка',
        category: 'desserts',
        subcategory: 'pancakes-and-fritters',
        badgeIcon: 'DessertIcon',
        emoji: 1,
    },
    {
        id: '3',
        title: `Салат "Здоровье"`,
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        imageUrl: 'src/assets/images/recipes/salad.jpg',
        badgeCategory: 'Салаты',
        badgeIcon: 'SaladsIcon',
        category: 'salads',
        subcategory: 'vegetable-salads',
    },
    {
        id: '4',
        title: `Салат "Здоровье"`,
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        imageUrl: 'src/assets/images/recipes/salad.jpg',
        badgeCategory: 'Салаты',
        badgeIcon: 'SaladsIcon',
        category: 'salads',
        subcategory: 'vegetable-salads',
    },
];
