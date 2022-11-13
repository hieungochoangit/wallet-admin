import React from "react";
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton } from "@coreui/react";
import { Link } from "react-router-dom";

const CategoryTable = (props) => {
    const { data } = props;

    return (
        <>
            {data.length <= 0 ? (
                <div>
                    Chưa có danh mục con, bạn có muốn <Link to="/category/create">thêm</Link> không?
                </div>
            ) : (
                <>
                    <div className="mb-3">
                        <Link to="/category/create">Thêm danh mục con</Link>
                    </div>
                    <CTable hover bordered>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Tên danh mục</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Đường dẫn</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Tuỳ chọn</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {data.map((category) => {
                                return (
                                    <CTableRow key={category.id}>
                                        <CTableHeaderCell scope="row">{category.id}</CTableHeaderCell>
                                        <CTableHeaderCell scope="row">{category.categoryName}</CTableHeaderCell>
                                        <CTableHeaderCell scope="row">{category.categorySlug}</CTableHeaderCell>
                                        <CTableHeaderCell scope="row" style={{ width: "160px" }}>
                                            <div className="d-flex gap-2">
                                                <Link>
                                                    <CButton color="primary" size="sm">
                                                        Xem
                                                    </CButton>
                                                </Link>
                                                <Link>
                                                    <CButton color="info" size="sm">
                                                        Sửa
                                                    </CButton>
                                                </Link>
                                                <Link>
                                                    <CButton color="dark" size="sm">
                                                        Xoá
                                                    </CButton>
                                                </Link>
                                            </div>
                                        </CTableHeaderCell>
                                    </CTableRow>
                                );
                            })}
                        </CTableBody>
                    </CTable>
                </>
            )}
        </>
    );
};

export default CategoryTable;
