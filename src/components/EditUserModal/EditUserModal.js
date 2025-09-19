import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const EditUserModal = ({ visible, user, onUpdate, onCancel }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        company: user.company.name
      });
    }
  }, [user, form]);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      
      const updatedUser = {
        ...user,
        name: values.name,
        username: values.username,
        email: values.email,
        phone: values.phone,
        website: values.website,
        address: {
          street: values.street,
          suite: values.suite,
          city: values.city,
          zipcode: values.zipcode
        },
        company: {
          name: values.company
        }
      };
      
      onUpdate(updatedUser);
    } catch (error) {
      console.error('Validation failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Edit User"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleSubmit}>
          Update
        </Button>
      ]}
      width={700}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter the name' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Please enter the username' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter the email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: 'Please enter the phone number' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="website"
          label="Website"
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="street"
          label="Street"
          rules={[{ required: true, message: 'Please enter the street' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="suite"
          label="Suite"
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="city"
          label="City"
          rules={[{ required: true, message: 'Please enter the city' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="zipcode"
          label="Zipcode"
          rules={[{ required: true, message: 'Please enter the zipcode' }]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          name="company"
          label="Company"
          rules={[{ required: true, message: 'Please enter the company name' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUserModal;