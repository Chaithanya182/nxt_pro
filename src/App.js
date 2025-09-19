import React, { useState, useEffect } from 'react';
import { Row, Col, message } from 'antd';
import UserCard from './components/UserCard/UserCard';
import EditUserModal from './components/EditUserModal/EditUserModal';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import { AppContainer } from './App.styles';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // Fetch user data
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      
      // Add liked property to each user
      const usersWithLikes = data.map(user => ({
        ...user,
        liked: false
      }));
      
      setUsers(usersWithLikes);
    } catch (error) {
      message.error('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleLike = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, liked: !user.liked } : user
    ));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsModalVisible(true);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    message.success('User deleted successfully');
  };

  const handleUpdate = (updatedUser) => {
    setUsers(users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ));
    setIsModalVisible(false);
    message.success('User updated successfully');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <AppContainer>
      <h1>User Profiles</h1>
      
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Row gutter={[16, 16]}>
          {users.map(user => (
            <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
              <UserCard 
                user={user} 
                onLike={handleLike} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
              />
            </Col>
          ))}
        </Row>
      )}

      <EditUserModal
        visible={isModalVisible}
        user={editingUser}
        onUpdate={handleUpdate}
        onCancel={handleCancel}
      />
    </AppContainer>
  );
};

export default App;