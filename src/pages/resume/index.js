import React from 'react';
import { Document, Page } from 'react-pdf';

import PDd from '../../assets/docs/curriculo.pdf';

export default function Resume() {
    return (
        <div>
            <p>a</p>
            <Document file={PDd}>
                <Page pageNumber={3} />
            </Document>
        </div>
    );
}