import React from 'react';
import {connect} from 'react-redux';
import { Menu } from 'antd';
import { Row, Col, Card } from 'antd';
import IncidentForm from '../../components/IncidentForm';
import IncidentList from '../../components/IncidentList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import IncidentService from '../../services/IncidentService';
import { loadAllIncidentsAction } from '../../actions/IncidentActions';

function IncidentApp(props) {
  retrieveIncidents(props);

  return (
    <Router>
      <Row
        justify="center"
        align="middle"
        gutter={[0, 20]}
        className="Incidents-container"
      >
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="horizontal">
            <Menu.Item key="1">
                <span>All</span>
                <Link to="/" />
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/in-progress">
          <Show completed={false}/>
        </Route>
        <Route path="/completed">
          <Show completed={true}/>
        </Route>
        <Route path="/">
          <Show />
        </Route>
      </Switch>
  </Router>
  );
}

const retrieveIncidents = (props) => {
  IncidentService.getAll()
    .then(response => {
      // console.log(response.data);
      props.loadAll(response.data);
    })
    .catch(e => {
      console.error(e);
    });
};

function Show(props) {
  return (
    <Row
      justify="center"
      align="middle"
      gutter={[0, 20]}
      className="Incidents-container"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Create a new Incident">
          <IncidentForm />
        </Card>
      </Col>
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Incident List">
          <IncidentList/>
        </Card>
      </Col>
    </Row>
    );
}

const mapDispatchToProps = {
  loadAll: loadAllIncidentsAction
};

export default connect(null, mapDispatchToProps)(IncidentApp);
