import React from "react";
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CRow,
    CFormSelect,
    CFormText,
} from "@coreui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { convertToSlug } from "src/common/functions";
import categoryApi from "src/api/categoryApi";
import { useEffect } from "react";
import { useState } from "react";

const EditCategory = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [category, setCategory] = useState({});

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        (async () => {
            const response = await categoryApi.getDetailCategory(params.id);

            if (response.statusCode === 0) {
                setCategory(response.data.data);
            }
        })();
    }, [params.id]);

    const onSubmit = async (data) => {
        const categorySlug = convertToSlug(data.categoryName);
        data.categorySlug = categorySlug;
        data.categoryId = params.id;

        const response = await categoryApi.updateCategory(data);
        if (response.statusCode === 0) {
            toast(response.data.message);
            navigate(`/category/${params.id}`);
        } else {
            toast(response.data.message);
        }
    };

    return (
        <>
            <div className="d-flex justify-content-end">
                <Link to={`/category/${params.id}`}>
                    <CButton className="mb-4">Quay lại</CButton>
                </Link>
            </div>
            <CCard className="mb-4">
                <CCardHeader>
                    <h1>Sửa danh mục</h1>
                </CCardHeader>
                <CCardBody>
                    <CForm onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">
                                Tên danh mục <span style={{ color: "red" }}>*</span>
                            </CFormLabel>
                            <CFormInput
                                {...register("categoryName", { required: true })}
                                defaultValue={category.categoryName}
                                type="text"
                                placeholder="tên danh mục"
                            />
                            {errors.categoryName?.type === "required" && (
                                <CFormText style={{ color: "red" }} className="help-block mb-2">
                                    Vui lòng nhập tên danh mục
                                </CFormText>
                            )}
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">
                                Mô tả danh mục <span style={{ color: "red" }}>*</span>
                            </CFormLabel>
                            <CFormInput
                                {...register("categoryDesc", { required: true })}
                                defaultValue={category.categoryDesc}
                                type="text"
                                placeholder="mô tả danh mục"
                            />
                            {errors.categoryDesc?.type === "required" && (
                                <CFormText style={{ color: "red" }} className="help-block mb-2">
                                    Vui lòng nhập mô tả danh mục
                                </CFormText>
                            )}
                        </div>
                        <CButton type="submit">Cập nhật</CButton>
                    </CForm>
                </CCardBody>
            </CCard>
        </>
    );
};

export default EditCategory;
