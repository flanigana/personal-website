import React from 'react';
import AboutPage from './AboutPage';
// import EducationPage from './EducationPage';
import SkillsPage from './SkillsPage';
import ProjectsPage from './ProjectsPage';
import InterestsPage from './InterestsPage';
import ContactPage from './ContactPage';

const PageContainer = () => (
    <>
    <AboutPage />
    {/* <EducationPage /> */}
    <SkillsPage />
    <ProjectsPage />
    <InterestsPage />
    <ContactPage />
    </>
);

export default PageContainer;