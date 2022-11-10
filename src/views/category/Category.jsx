import { CButton } from "@coreui/react";
import React from "react";
import CategoryTable from "./categoryTable/CategoryTable";

const dataCategory = [
    {
        id: 1,
        categoryName: "Ví da",
        categorySlug: "vi-da",
        categoryDesc: "Cac loai vi da vip",
        categoryType: "VIP",
        activity: "10 sec ago",
    },
    {
        id: 2,
        categoryName: "Ví da",
        categorySlug: "vi-da",
        categoryDesc: "Cac loai vi da vip",
        categoryType: "VIP",
        activity: "10 sec ago",
    },
];

const Category = () => {
    return (
        <div>
            <div className="d-flex justify-content-end">
                <CButton className="mb-4">Thêm danh mục</CButton>
            </div>
            <CategoryTable data={dataCategory} />
        </div>
    );
};

export default Category;
