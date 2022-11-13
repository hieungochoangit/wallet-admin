import React from "react";
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CButton } from "@coreui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ButtonGroupAction from "src/components/button/ButtonGroupAction";
import BaseModal from "src/components/modal/Modal";
import { useState } from "react";
import categoryChildrenApi from "src/api/categoryChildren";
import { toast } from "react-toastify";

const CategoryTable = (props) => {
    const { data, categoryIdParent } = props;
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState(null);

    const navigate = useNavigate();

    const handleClickGoToPage = (type, id) => {
        switch (type) {
            case "view":
                navigate(`/category/${id}`);
                break;
            case "edit":
                navigate(`/category/edit/${id}`);
                break;
            case "delete":
                setVisible(true);
                setId(id);
                break;
        }
    };

    const handleClickAccess = async () => {
        const response = await categoryChildrenApi.deleteCategory(id);

        if (response.statusCode === 0) {
            navigate("/category");
            toast("Xoá danh mục thành công");
        } else {
            navigate("/category");
            toast("Xoá danh mục thất bại");
        }

        setVisible(false);
    };

    return (
        <>
            {data.length <= 0 ? (
                <div className="d-flex justify-content-between align-items-center">
                    <span>
                        Chưa có danh mục con, bạn có muốn <Link to="/category/create">thêm</Link> không?
                    </span>
                    <div className="d-flex gap-2">
                        <ButtonGroupAction actions={handleClickGoToPage} id={categoryIdParent} />
                    </div>
                </div>
            ) : (
                <>
                    <div className="mb-3 d-flex justify-content-between align-items-center">
                        <Link to="/category/create">Thêm danh mục con</Link>
                        <div className="d-flex gap-2">
                            <ButtonGroupAction actions={handleClickGoToPage} id={categoryIdParent} />
                        </div>
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
                                        <CTableHeaderCell scope="row" style={{ width: "130px" }}>
                                            <div className="d-flex gap-2">
                                                <ButtonGroupAction actions={handleClickGoToPage} id={category.id} />
                                            </div>
                                        </CTableHeaderCell>
                                    </CTableRow>
                                );
                            })}
                        </CTableBody>
                    </CTable>
                </>
            )}

            {/* Dialog delete */}
            <BaseModal visible={visible} setVisible={setVisible} onClickAccess={handleClickAccess}>
                Bạn có muốn xoá danh mục này không?
            </BaseModal>
        </>
    );
};

export default CategoryTable;
