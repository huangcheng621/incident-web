import React from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';
import { Form, Row, Col, Button, Input } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { addIncidentAction } from '../../actions/IncidentActions';
import IncidentService from '../../services/IncidentService';

function IncidentForm(props) {
    const [form] = Form.useForm();

    const onFinish = (props) => {
        const inputName = form.getFieldValue('name');
        const inputDesc = form.getFieldValue('description');
        const inputStatus = form.getFieldValue('status');
        const inputCategory = form.getFieldValue('category');
        const inputSeverity = form.getFieldValue('severity');

        const newItem = {
            name: inputName,
            description: inputDesc,
            status: inputStatus,
            severity: inputSeverity,
            category: inputCategory
        };

        addNewItem(props, newItem);
        form.resetFields();
    };

    return (
        <Form form={form} onFinish={() => onFinish(props)} layout="horizontal" className="Incident-form">
            <Row gutter={20}>
                <Col xs={24} sm={24} md={17} lg={19} xl={20}>
                    <Form.Item
                        name={'name'}
                        rules={[{ required: true, message: 'This field is required' }]}
                    >
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        name={'description'}
                        rules={[{ required: true, message: 'This field is required' }]}
                    >
                        <Input placeholder="Description" />
                    </Form.Item>
                    <Form.Item
                        name={'status'}
                        rules={[{ required: true, message: 'This field is required' }]}
                    >
                        <Input placeholder="Status" />
                    </Form.Item>
                    <Form.Item
                        name={'severity'}
                        rules={[{ required: true, message: 'This field is required' }]}
                    >
                        <Input placeholder="Severity" />
                    </Form.Item>
                    <Form.Item
                        name={'category'}
                        rules={[{ required: true, message: 'This field is required' }]}
                    >
                        <Input placeholder="Category" />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={7} lg={5} xl={4}>
                    <Button type="primary" htmlType="submit" block>
                        <PlusCircleFilled />
                        Add Incident
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

function addNewItem(props, content) {
    const newItem = content;
    IncidentService.create(newItem)
        .then(response => {
            console.log(`New item added: ${JSON.stringify(response.data)}`);
            props.addItem(response.data);
            message.success("Item added");
        })
        .catch(e => {
            console.error(e);
            message.error("Failed to add item");
        });
}

const mapDispatchToProps = {
    addItem: addIncidentAction
};

export default connect(null, mapDispatchToProps)(IncidentForm);

