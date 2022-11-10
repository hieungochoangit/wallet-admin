import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CButton } from "@coreui/react";
import categoryApi from "src/api/categoryApi";

const DetailCategory = () => {
    const params = useParams();

    const [category, setCategory] = useState(null);

    useEffect(() => {
        console.log(params);
        (async () => {
            const response = await categoryApi.getDetailCategory(params.id);

            if (response.statusCode === 0) {
                setCategory(response.data.data);
            }
        })();
    }, [params.id]);

    return (
        <div className="d-flex gap-4 align-items-center gap-14">
            <h1>Danh mục: {category?.categoryName}</h1>
            <Link to={`/category/edit/${category?.id}`}>
                <CButton size="sm">Sửa</CButton>
            </Link>
        </div>
    );
};

export default DetailCategory;
