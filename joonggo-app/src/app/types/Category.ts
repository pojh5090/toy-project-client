export class Category {
    id: string;
    name: string;
    parentId: string | null;
    subCategoryList: Category[] | null;

    constructor(id: string, name: string, parentId: string|null, subCategoryList: Category[]) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
        this.subCategoryList = subCategoryList;
    }

}