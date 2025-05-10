import { CategorySliceProps } from '~/store/categories-slice';

export function getTitleFromUrl(categories: CategorySliceProps[], url: string, sub?: string) {
    const categoryObj = categories.find((item) => item.category === url);
    if (sub && categoryObj?.subCategories) {
        const subcategory = categoryObj.subCategories.find((item) => item.category === sub);
        return subcategory?.title;
    } else {
        return categoryObj?.title;
    }
}
