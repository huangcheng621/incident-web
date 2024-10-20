import React from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import IncidentItem from '../IncidentItem';

function IncidentList(props) {
    let incidentList = props.IncidentList

    return (
        <List
            locale={{
                emptyText: "There's nothing to do :("
            }}
            dataSource={incidentList}
            renderItem={Incident => (<IncidentItem item={Incident} />)}
            pagination={{
                position: 'bottom',
                pageSize: 10
            }}
        />
    );
}

const mapStateToProps = state => {
    const IncidentList = state.IncidentList
    return { IncidentList }
  };
  
export default connect(mapStateToProps, null)(IncidentList);