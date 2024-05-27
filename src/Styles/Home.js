import styled from 'styled-components';

const Cores = {
    PinkClean: 'hsl(295, 41%, 79%)',
    White: 'hsl(300, 35%, 92%)'
    }

export const SectionHome = styled.section`
    margin: 15px;
    color: ${Cores.PinkClean};
    padding-left: 150px;
    padding-right: 150px;
`
export const ImgHome = styled.img`
    width: 800px;
    height: 570px;
`
export const H1Home = styled.h1`
    font-size: 50px;
`
export const H3Home = styled.h3`
    font-size: 27px;
    padding-bottom: 15px;
`
export const PHome = styled.p`
    font-size: 20px;
    text-align: justify;
`
