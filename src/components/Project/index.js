import React from 'react';
import Bounce from 'react-reveal/Bounce';
import { Container, ImgProject } from './style';

import project1 from '../../assets/dev.finance.png';
import project2 from '../../assets/challenge.jpg';
import project3 from '../../assets/To-do.png';
import project4 from '../../assets/spiderman.png';
import project5 from '../../assets/chatbot.png';
import project6 from '../../assets/dev.finance.png';

export default function Project() {
    return (
        <Container className="container-image">
            <Bounce effect="fadeInUp">
                <a href="http://elbertribeiro.github.io/MaratonaDiscover/">
                    <ImgProject src={project1} alt="" /></a>
                <a href="./">
                    <ImgProject src={project2} alt="" /></a>
                <a href="./">
                    <ImgProject src={project3} alt="" /></a>
                <a href="./">
                    <ImgProject src={project4} alt="" /></a>
                <a href="./">
                    <ImgProject src={project5} alt="" /></a>
                <a href="./">
                    <ImgProject src={project6} alt="" /></a>
            </Bounce >
        </Container>
    );
}


