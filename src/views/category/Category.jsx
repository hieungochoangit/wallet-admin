import { CButton, CSpinner } from "@coreui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import categoryApi from "src/api/categoryApi";
import CategoryList from "./categoryList/CategoryList";
import { updateListCategory } from "./categorySlice";
import { toast } from "react-toastify";

const Category = () => {
    const dispatch = useDispatch();
    const [paginationParams, setPaginationParams] = useState({
        page: 1,
        limit: 10,
    });
    const [isLoading, setIsLoading] = useState(false);
    const dataCategory = useSelector((state) => state.category.list);

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            const response = await categoryApi.getListCategory();

            if (response.statusCode === 0) {
                dispatch(updateListCategory(response.data.categories));
            }
        })();
        setIsLoading(false);
    }, []);

    const handleClickDelete = async (id) => {
        const isDelete = confirm("Bạn có muốn xoá danh mục này không?");

        if (isDelete) {
            const response = await categoryApi.deleteCategory(id);

            if (response.statusCode === 0) {
                toast(response.data.message);
                setPaginationParams((prevState) => {
                    return { ...prevState };
                });
            }
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-end">
                <Link to="/category/create">
                    <CButton className="mb-4">Thêm danh mục</CButton>
                </Link>
            </div>
            {isLoading ? <CSpinner /> : <CategoryList onDelete={handleClickDelete} data={dataCategory} />}
        </div>
    );
};

export default Category;
