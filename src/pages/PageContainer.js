import React from 'react';
import PageComponent from '../components/PageComponent';
import pagesContent from '../pages-content.js';

const PageContainer = () => (
    <>
    {pagesContent.map((page, key) => (
        <PageComponent name={page.name} html={page.html} key={key} />
    ))}
    </>
);

export default PageContainer;