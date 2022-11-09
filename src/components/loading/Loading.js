import React from "react";
import { CButton, CSpinner } from "@coreui/react";

const Loading = () => {
    return (
        <CButton disabled>
            <CSpinner component="span" size="sm" variant="grow" aria-hidden="true" />
        </CButton>
    );
};

export default Loading;
