import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Row, Col } from 'antd';
import TableComp from './TableComp';
import FormLogin from './form';

const ContentComp = () => {
    return  (<>
    <Row>
    <TableComp/>
      <Col span={24}>col</Col>
    </Row>
    <Row>
        <FormLogin/>
      <Col span={12} style={{backgroundColor:'blue'}}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </>)
};

export default ContentComp;