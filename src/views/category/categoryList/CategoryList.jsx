import React from "react";
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from "@coreui/react";
import CategoryTable from "./categoryTable/CategoryTable";

const CategoryList = (props) => {
    const { data, onDelete } = props;
    return (
        <div>
            <CAccordion>
                {data &&
                    data.map((category) => (
                        <CAccordionItem key={category.id} itemKey={category.id}>
                            <CAccordionHeader>{category.categoryName}</CAccordionHeader>
                            <CAccordionBody>
                                <CategoryTable data={category.categoryChildren} />
                            </CAccordionBody>
                        </CAccordionItem>
                    ))}
            </CAccordion>
        </div>
    );
};

export default CategoryList;
