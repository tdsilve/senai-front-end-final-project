import styled from 'styled-components';

const StyledPosts = styled.section`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18px;

  a {
    margin: 18px 0;
    color: #fff;
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default StyledPosts;
