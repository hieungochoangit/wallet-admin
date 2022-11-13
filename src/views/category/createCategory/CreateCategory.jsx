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
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { convertToSlug } from "src/common/functions";
import { useSelector } from "react-redux";
import categoryChildrenApi from "src/api/categoryChildren";

const CreateCategory = () => {
    const navigate = useNavigate();
    const categories = useSelector((state) => state.category.list);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const categorySlug = convertToSlug(data.categoryName);
        data.categorySlug = categorySlug;

        const response = await categoryChildrenApi.createCategory(data);

        if (response) {
            toast(response.data.message);
            navigate("/category");
        }
    };

    return (
        <>
            <div className="d-flex justify-content-end">
                <Link to="/category">
                    <CButton className="mb-4">Quay lại</CButton>
                </Link>
            </div>
            <CCard className="mb-4">
                <CCardHeader>
                    <h1>Tạo danh mục</h1>
                </CCardHeader>
                <CCardBody>
                    <CForm onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">
                                Tên danh mục <span style={{ color: "red" }}>*</span>
                            </CFormLabel>
                            <CFormInput
                                {...register("categoryName", { required: true })}
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
                                Thuộc danh mục <span style={{ color: "red" }}>*</span>
                            </CFormLabel>
                            <CFormSelect {...register("categoryId")} aria-label="Default select example">
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.categoryName}
                                    </option>
                                ))}
                            </CFormSelect>
                        </div>
                        <CButton type="submit">Tạo</CButton>
                    </CForm>
                </CCardBody>
            </CCard>
        </>
    );
};

export default CreateCategory;
