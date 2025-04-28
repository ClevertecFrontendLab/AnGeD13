export const breadcrumbsMapping = [
    {
        name: 'Главная',
        path: '/',
    },
    {
        name: 'Самое сочное',
        path: 'the-juiciest',
    },

    {
        id: 0,
        name: 'Салаты',
        path: 'salads',
        subcategories: [
            { id: 0, name: 'Мясные салаты', path: 'meat-salads' },
            { id: 1, name: 'Рыбные салаты', path: 'fish-salads' },
            { id: 2, name: 'Овощные салаты', path: 'vegetable-salads' },
            { id: 3, name: 'Теплые салаты', path: 'warm-salads' },
        ],
    },

    {
        id: 1,
        name: 'Закуски',
        path: 'snacks',
        subcategories: [
            { id: 0, name: 'Мясные закуски', path: 'meat-snacks' },
            { id: 1, name: 'Рыбные закуски', path: 'fish-snacks' },
            { id: 2, name: 'Овощные закуски', path: 'vegetable-snacks' },
            { id: 3, name: 'Теплые закуски', path: 'warm-snacks' },
            { id: 4, name: 'Бутерброды', path: 'sandwiches' },
            { id: 5, name: 'Фастфуд', path: 'fastfood' },
        ],
    },

    {
        id: 2,
        name: 'Первые блюда',
        path: 'first-dish',
        subcategories: [
            { id: 0, name: 'Мясные супы', path: 'meat-soups' },
            { id: 1, name: 'Овощные супы', path: 'vegetable-soups' },
            { id: 2, name: 'Бульоны', path: 'broths' },
            { id: 3, name: 'Холодные супы', path: 'cold-soups' },
            { id: 4, name: 'Диетические супы', path: 'diet-soups' },
        ],
    },

    {
        id: 3,
        name: 'Вторые блюда',
        path: 'second-dish',
        subcategories: [
            { id: 0, name: 'Мясные', path: 'meat' },
            { id: 1, name: 'Рыбные', path: 'fish' },
            { id: 2, name: 'Овощные', path: 'vegetables' },
            { id: 3, name: 'Из птицы', path: 'poultry-dish' },
            { id: 4, name: 'Из грибов', path: 'mushroom' },
            { id: 5, name: 'Из субпродуктов', path: 'offal' },
            { id: 6, name: 'На пару', path: 'steamed' },
            { id: 7, name: 'Пельмени, вареники', path: 'dumplings' },
            { id: 8, name: 'Мучные гарниры', path: 'flour-side' },
            { id: 9, name: 'Овощные гарниры', path: 'vegatable-side' },
            { id: 10, name: 'Пицца', path: 'pizza' },
            { id: 11, name: 'Суши', path: 'sushi' },
        ],
    },

    {
        id: 4,
        name: 'Десерты и выпечка',
        path: 'desserts',
        subcategories: [
            { id: 0, name: 'Блины и оладьи', path: 'pancakes-and-fritters' },
            { id: 1, name: 'Пироги и пончики', path: 'pies-and-donats' },
            { id: 2, name: 'Торты', path: 'cakes' },
            { id: 3, name: 'Рулеты', path: 'rolls' },
            { id: 4, name: 'Кексы и маффины', path: 'cupcakes-and-muffins' },
            { id: 5, name: 'Сырники и ватрушки', path: 'cheesecakes' },
            { id: 6, name: 'Из слоеного теста', path: 'from-puff-pastry' },
            { id: 7, name: 'Из заварного теста', path: 'from-custard-pastry' },
            { id: 8, name: 'Из дрожжевого теста', path: 'from-yeast-dough' },
            { id: 9, name: 'Булочки и сдоба', path: 'buns' },
            { id: 10, name: 'Хлеб', path: 'bread' },
            { id: 11, name: 'Тесто на пиццу', path: 'pizza-dough' },
            { id: 12, name: 'Кремы', path: 'creams' },
        ],
    },

    {
        id: 5,
        name: 'Блюда на гриле',
        path: 'grills',
        subcategories: [
            { id: 0, name: 'Говядина', path: 'beef' },
            { id: 1, name: 'Свинина', path: 'pork' },
            { id: 2, name: 'Птица', path: 'chicken' },
            { id: 3, name: 'Рыба', path: 'fish' },
            { id: 4, name: 'Грибы', path: 'mushrooms' },
            { id: 5, name: 'Овощи', path: 'vegatables' },
        ],
    },

    {
        id: 6,
        name: 'Веганская кухня',
        path: 'vegan',
        subcategories: [
            { id: 0, name: 'Закуски', path: 'snacks' },
            { id: 1, name: 'Первые блюда', path: 'first-dish' },
            { id: 2, name: 'Вторые блюда', path: 'second-dish' },
            { id: 3, name: 'Гарниры', path: 'side-dishes' },
            { id: 4, name: 'Десерты', path: 'desserts' },
            { id: 5, name: 'Выпечка', path: 'pastry' },
            { id: 6, name: 'Сыроедческие блюда', path: 'raw-dishes' },
            { id: 7, name: 'Напитки', path: 'drinks' },
        ],
    },

    {
        id: 7,
        name: 'Детские блюда',
        path: 'child',
        subcategories: [
            { id: 0, name: 'Первые блюда', path: 'first-dish' },
            { id: 1, name: 'Вторые блюда', path: 'second-dish' },
            { id: 2, name: 'Гарниры', path: 'side-dishes' },
            { id: 3, name: 'Выпечка', path: 'pastry' },
            { id: 4, name: 'Без глютена', path: 'gluten-free' },
            { id: 5, name: 'Без сахара', path: 'sugar-free' },
            { id: 6, name: 'Без аллергенов', path: 'allergen-free' },
            { id: 7, name: 'Блюда для прикорма', path: 'complementary-food' },
        ],
    },

    {
        id: 8,
        name: 'Лечебное питание',
        path: 'medical',
        subcategories: [
            { id: 0, name: 'Детская диета', path: 'children-diet' },
            { id: 1, name: 'Диета №1', path: 'diet-1' },
            { id: 2, name: 'Диета №2', path: 'diet-2' },
            { id: 3, name: 'Диета №3', path: 'diet-3' },
            { id: 4, name: 'Диета №5', path: 'diet-5' },
            { id: 5, name: 'Диета №6', path: 'diet-6' },
            { id: 6, name: 'Диета №7', path: 'diet-7' },
            { id: 7, name: 'Диета №8', path: 'diet-8' },
            { id: 8, name: 'Диета №9', path: 'diet-9' },
            { id: 9, name: 'Диета №10', path: 'diet-10' },
            { id: 10, name: 'Диета №11', path: 'diet-11' },
            { id: 11, name: 'Диета №12', path: 'diet-12' },
            { id: 12, name: 'Диета №13', path: 'diet-13' },
            { id: 13, name: 'Диета №14', path: 'diet-14' },
            { id: 14, name: 'Диета №15', path: 'diet-15' },
            { id: 15, name: 'Без глютена', path: 'gluten-free' },
            { id: 16, name: 'Без аллергенов', path: 'allergen-free' },
        ],
    },

    {
        id: 9,
        name: 'Национальные блюда',
        path: 'national',
        subcategories: [
            { id: 0, name: 'Американская кухня', path: 'american-cuisine' },
            { id: 1, name: 'Армянская кухня', path: 'armenian-cuisine' },
            { id: 2, name: 'Греческая кухня', path: 'greek-cuisine' },
            { id: 3, name: 'Грузинская кухня', path: 'georgian-cuisine' },
            { id: 4, name: 'Итальянская кухня', path: 'italian-cuisine' },
            { id: 5, name: 'Испанская кухня', path: 'spanish-cuisine' },
            { id: 6, name: 'Китайская кухня', path: 'chinese-cuisine' },
            { id: 7, name: 'Мексиканская кухня', path: 'mexican-cuisine' },
            { id: 8, name: 'Паназиатская кухня', path: 'pan-asian-cuisine' },
            { id: 9, name: 'Русская кухня', path: 'russian-cuisine' },
            { id: 10, name: 'Турецкая кухня', path: 'turkish-cuisine' },
            { id: 11, name: 'Французская кухня', path: 'french-cuisine' },
            { id: 12, name: 'Шведская кухня', path: 'swedish-cuisine' },
            { id: 13, name: 'Японская кухня', path: 'japanese-cuisine' },
            { id: 14, name: 'Другая кухня', path: 'another-cuisine' },
        ],
    },

    {
        id: 10,
        name: 'Соусы',
        path: 'sauces',
        subcategories: [
            { id: 0, name: 'Соусы мясные', path: 'meat-sauces' },
            { id: 1, name: 'Соусы сырные', path: 'cheesy-sauces' },
            { id: 2, name: 'Маринады', path: 'marinades' },
        ],
    },

    {
        id: 11,
        name: 'Домашние заготовки',
        path: 'homemade',
        subcategories: [
            { id: 0, name: 'Мясные заготовки', path: 'homemade-meat' },
            { id: 1, name: 'Рыбные заготовки', path: 'homemade-fish' },
            { id: 2, name: 'Из огурцов', path: 'cucumbers' },
            { id: 3, name: 'Из томатов', path: 'tomatos' },
            { id: 4, name: 'Из грибов', path: 'mushrooms' },
            { id: 5, name: 'Овощные заготовки', path: 'homemade-vegetable' },
            { id: 6, name: 'Салаты, икра', path: 'salads-caviar' },
            { id: 7, name: 'Из фруктов и ягод', path: 'from-fruits-and-berries' },
        ],
    },

    {
        id: 12,
        name: 'Напитки',
        path: 'drinks',
        subcategories: [
            { id: 0, name: 'Соки и фреши', path: 'juices-and-fresh-drinks' },
            { id: 1, name: 'Смузи', path: 'smoothie' },
            { id: 2, name: 'Компоты', path: 'compotes' },
            { id: 3, name: 'Кисели', path: 'jelly' },
            { id: 4, name: 'Кофе', path: 'coffee' },
            { id: 5, name: 'Лечебный чай', path: 'medicinal-tea' },
            { id: 6, name: 'Квас', path: 'kvass' },
            { id: 7, name: 'Коктейли', path: 'cocktails' },
            { id: 8, name: 'Алкогольные', path: 'alcoholic' },
        ],
    },
];

export function generateUrl(categoryTitle: string, subcategoryIndex: number) {
    const categoryObj = breadcrumbsMapping.find((item) => item.name === categoryTitle);
    const categorySlug = categoryObj?.path;

    if (categoryObj?.subcategories) {
        const subcategorySlug = categoryObj.subcategories[subcategoryIndex].path;
        return `/${categorySlug}/${subcategorySlug}`;
    } else {
        return `/${categorySlug}`;
    }
}

export function getTitleFromUrl(url: string, sub?: string) {
    const categoryObj = breadcrumbsMapping.find((item) => item.path === url);
    if (sub && categoryObj?.subcategories) {
        const subcategory = categoryObj.subcategories.find((item) => item.path === sub);
        return subcategory?.name;
    } else {
        return categoryObj?.name;
    }
}
