import styled from "styled-components/native";

export interface ProfilePicProps {
  url: any;
}

export const ProfilePic = ({ url }: ProfilePicProps) => {
  return <ProfilePicArea source={url} />;
};

const ProfilePicArea = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 20px;
`;
