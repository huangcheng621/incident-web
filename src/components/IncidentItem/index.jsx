import React from 'react';
import {connect} from 'react-redux';
import { message } from 'antd';
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import {deleteIncidentAction, checkIncidentAction} from '../../actions/IncidentActions';
import IncidentService from '../../services/IncidentService';
import '../../style/IncidentItem.css';

function IncidentItem(props) {

    const item = props.item;

    console.log(item);

    return (
        <List.Item>
            <div className="incident-item">
                <div className="incident-field">
                    <Tooltip title={item.name}>
                        <span>{item.name}</span>
                    </Tooltip>
                </div>
                <div className="incident-field">
                    <Tooltip title={item.description}>
                        <span>{item.description}</span>
                    </Tooltip>
                </div>
                <div className="incident-field">
                    <Tooltip title={item.status}>
                        <span>{item.status}</span>
                    </Tooltip>
                </div>
                <div className="incident-field">
                    <Tooltip title={item.severity}>
                        <span>{item.severity}</span>
                    </Tooltip>
                </div>
                <div className="incident-field">
                    <Tooltip title={item.category}>
                        <span>{item.category}</span>
                    </Tooltip>
                </div>
                <div className="incident-actions">
                    <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={() => removeItem(props, item)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="link">Delete</Button>
                    </Popconfirm>
                </div>
            </div>
        </List.Item>);
}

function removeItem(props, item) {
    IncidentService.remove(item.id)
        .then(_ => {
            props.deleteItem(item.id);
            message.success('Item removed');
        })
        .catch(e => {
            message.error("Failed to remove item");
        });
}

const mapDispatchToProps = {
    deleteItem: deleteIncidentAction
};

export default connect(null, mapDispatchToProps)(IncidentItem);