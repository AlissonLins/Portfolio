import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyle'
import ProjectCard from '../Cards/Projectcard'
import { projects } from '../../data/constants'


const Projects = ({openModal, setOpenModal}) => {
    const [toggle, setToogle] = useState("all");
    return (
        <Container id="projects">
            <Wrapper>
            <Title>Projetos</Title>
                <Desc>
                Trabalhei em uma gama de projetos. Aqui estão alguns dos meus projetos
                </Desc>
                <ToggleButtonGroup >
                    {toggle === "all"? 
                    <ToggleButton active value="all" onClick={() => setToogle("all")}>ALL</ToggleButton>
                     : 
                    <ToggleButton value="all" onClick={() => setToogle("all")}>ALL</ToggleButton>
                    }
                    <Divider />
                    {toggle === "web"? 
                        <ToggleButton active value="web" onClick={() => setToogle("web")}>WEB APP</ToggleButton>
                        : 
                        <ToggleButton value="web" onClick={() => setToogle("web")}>WEB APP</ToggleButton>
                    }
                    <Divider />
                    {toggle === "software"? 
                        <ToggleButton active value="software" onClick={() => setToogle("software")}>SOFTWARE</ToggleButton>
                        : 
                        <ToggleButton value="software" onClick={() => setToogle("software")}>SOFTWARE</ToggleButton>
                    }
                </ToggleButtonGroup>
                <CardContainer>
                    {toggle === 'all' && projects
                    .map((project) => (
                        <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                    ))}
                 {projects
                    .filter((item) => item.category === toggle)
                    .map((project) => (
                        <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects;