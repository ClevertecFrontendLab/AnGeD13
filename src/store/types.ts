export type RecipesSlice = {
    recipes: TRecipe[];
};

export type NutritionValueType = {
    calories: number;
    proteins?: number;
    protein?: number;
    fats: number;
    carbohydrates: number;
};

export type TRecipe = {
    _id: string;
    title: string;
    description: string;
    time: number;
    image: string;
    meat?: string[];
    garnish?: string[];
    authorId?: string;
    categoriesIds: string[];
    portions: number;
    steps: {
        stepNumber: number;
        description: string;
        image: string;
    }[];
    nutritionValue: NutritionValueType;
    ingredients: {
        title: string;
        count: string;
        measureUnit: string;
    }[];
    likes?: number;
    views?: number;
    bookmarks?: number;
    createdAt: string;
    authorData: {
        login: string;
        firstName: string;
        lastName: string;
        subscribers: string[];
    };
};

export type TMeta = {
    total: number;
    totalPages: number;
    page: number;
    limit: number;
};

export type TParams = {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: string;
    allergens?: string[];
    searchString?: string;
    categoryId?: string;
    meat?: string[];
    garnish?: string[];
    subcategoriesIds?: string[];
};

export type TSubCategory = {
    _id: string;
    title: string;
    category: string;
    rootCategoryId: string;
};

export type TCategory = {
    _id: string;
    title: string;
    category: string;
    icon: string;
    description: string;
    subCategories: TSubCategory[];
    rootCategoryId?: string;
};
