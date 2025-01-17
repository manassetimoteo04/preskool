import styled from "styled-components";

const ProfileImg = styled.img`
  object-fit: cover;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 4px solid
    var(--color-${(props) => (props.type === "active" ? "yellow" : "red")}-100);
`;
export default ProfileImg;
