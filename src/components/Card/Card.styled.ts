import styled from "styled-components";

export const Container = styled.div`
    max-width: 350px;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 1.5rem;
    background-color: white;
    border-radius: 20px;
    border: 2px solid #121212;
    box-shadow: 7px 7px 0px #121212;
`

export const BannerImgContainer = styled.div`
    display: flex;
    border-radius: 20px;
    overflow: hidden;
`

export const BannerImg = styled.img`
    width: 100%;
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`

export const Status = styled.span`
    width: max-content;
    padding: .5rem 1rem;
    font-weight: 900;
    background-color: #f4d04e;
    border-radius: 5px;
`

export const DateInfo = styled.span`
    color: #121212;
`

export const Title = styled.h1`
    font-size: 1.3rem;
    font-weight: 900;
    color: #121212;

    &:hover {
        cursor: pointer;
        color: #f4d04e;
    }
`

export const Description = styled.p`
    color: #6b6b6b;
    line-height: 1.5rem;
`

export const UserInfo = styled.div`
    display: flex;
    column-gap: .5rem;
    align-items: center;
`

export const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
`

export const UserName = styled.span`
    font-weight: 900;
`