import { BannerImg, BannerImgContainer, Container, ContentContainer, DateInfo, Description, Status, Title, UserAvatar, UserInfo, UserName } from "./Card.styled"

export const Card = () => {
    return (
        <Container>
            <BannerImgContainer>
                <BannerImg src={`${process.env.PUBLIC_URL}/assets/images/illustration-article.svg`} alt="Banner Image" />
            </BannerImgContainer>

            <ContentContainer>
                <Status>Learning</Status>
                <DateInfo>Published 21 Dec 2023</DateInfo>
                <Title>HTML & CSS foundations</Title>
                <Description>These languages are the backbone of every website, defining structure, content, and presentation.</Description>
                <UserInfo>
                    <UserAvatar src={`${process.env.PUBLIC_URL}/assets/images/image-avatar.webp`} alt="User image" />
                    <UserName>Greg Hooper</UserName>
                </UserInfo>
            </ContentContainer>
        </Container>
    )
}