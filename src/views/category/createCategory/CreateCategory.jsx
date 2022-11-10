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
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const CreateCategory = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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
                            <CFormLabel htmlFor="exampleFormControlTextarea1">Slug</CFormLabel>
                            <CFormInput {...register("categorySlug")} type="text" disabled placeholder="slug" />
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">
                                Mô tả danh mục <span style={{ color: "red" }}>*</span>
                            </CFormLabel>
                            <CFormInput
                                {...register("categoryDesc", { required: true })}
                                type="text"
                                placeholder="mô tả danh mục"
                            />
                            {errors.categoryDesc?.type === "required" && (
                                <CFormText style={{ color: "red" }} className="help-block mb-2">
                                    Vui lòng nhập mô tả danh mục
                                </CFormText>
                            )}
                        </div>
                        <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">
                                Loại danh mục <span style={{ color: "red" }}>*</span>
                            </CFormLabel>
                            <CFormSelect {...register("categoryType")} aria-label="Default select example">
                                <option value="1">VIP</option>
                                <option value="2">NORMAL</option>
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
