import React from 'react';
import { Card, Button } from 'antd';
import { HeartOutlined, HeartFilled, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { CardContainer, UserAvatar } from './UserCard.styles';

const UserCard = ({ user, onLike, onEdit, onDelete }) => {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  return (
    <CardContainer
      cover={
        <UserAvatar
          src={avatarUrl}
          alt={`${user.name}'s avatar`}
        />
      }
      actions={[
        <Button
          type="text"
          icon={user.liked ? <HeartFilled /> : <HeartOutlined />}
          onClick={() => onLike(user.id)}
          style={{ color: user.liked ? '#eb2f96' : 'inherit' }}
        >
          {user.liked ? 'Liked' : 'Like'}
        </Button>,
        <Button
          type="text"
          icon={<EditOutlined />}
          onClick={() => onEdit(user)}
        >
          Edit
        </Button>,
        <Button
          type="text"
          icon={<DeleteOutlined />}
          onClick={() => onDelete(user.id)}
          danger
        >
          Delete
        </Button>
      ]}
    >
      <Card.Meta
        title={user.name}
        description={
          <div>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
          </div>
        }
      />
    </CardContainer>
  );
};

export default UserCard;