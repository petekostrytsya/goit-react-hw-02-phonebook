import styled from "styled-components";


export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactName = styled.p`
  font-family: 'Segoe UI';
  font-weight: 500;
  margin: 0;
`;

export const ContactNumber = styled.span`
  margin-left: 10px;
`;

export const Button = styled.button`
  margin: 8px;
  padding: 4px 14px;
  border-radius: 5px;
  cursor: pointer;
`;