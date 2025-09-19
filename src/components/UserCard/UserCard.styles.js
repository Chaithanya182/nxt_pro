import { Card, Avatar } from 'antd';
import styled from 'styled-components';

export const CardContainer = styled(Card)`
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
  
  .ant-card-head {
    min-height: 80px;
  }
  
  .ant-card-meta-title {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const UserAvatar = styled(Avatar)`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f2f5;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UserActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;