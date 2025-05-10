import { THE_JUICIEST } from '~/constants/paths';
import { CategorySliceProps } from '~/store/types';

export function generateUrl(
    categories: CategorySliceProps[],
    categoryTitle: string,
    subcategoryIndex: number,
) {
    const categoryObj = categories.find((item: CategorySliceProps) => item.title === categoryTitle);
    const categorySlug = categoryObj?.category;

    if (categoryObj?.subCategories) {
        const subcategorySlug = categoryObj.subCategories[subcategoryIndex].category;
        return `/${categorySlug}/${subcategorySlug}`;
    } else {
        return `${THE_JUICIEST}`;
    }
}
