import React, { useContext, useState } from "react";
import {
  Layout,
  Input,
  Row,
  Col,
  Divider,
  Form,
  Button,
  Checkbox,
  Space,
} from "antd";
import { useForm } from "react-hook-form";
import classnames from "classnames";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { GraduateContext } from "../context/graduate-context";
import { flashErrorMessage } from "./flash-message";

//Form Layout
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const GraduateAdd = ({ graduate }) => {
  const [state, dispatch] = useContext(GraduateContext);
  const [redirect, setRedirect] = useState(false);
  const { register, errors, handleSubmit } = useForm({
    defaultValues: graduate,
  });

  const { TextArea } = Input;
  //Form logic
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //Checkboxes
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  const createGraduate = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3030/graduates",
        data,
      );
      dispatch({
        type: "CREATE_GRADUATE",
        payload: response.data,
      });
      setRedirect(true);
    } catch (error) {
      flashErrorMessage(dispatch, error);
    }
  };

  const updateGraduate = async (data) => {
    try {
      const response = await axios.patch(
        `http://localhost:3030/graduates/${graduate._id}`,
        data,
      );
      dispatch({
        type: "UPDATE_GRADUATE",
        payload: response.data,
      });
      setRedirect(true);
    } catch (error) {
      flashErrorMessage(dispatch, error);
    }
  };

  const onSubmit = async (data) => {
    if (graduate._id) {
      await updateGraduate(data);
    } else {
      await createGraduate(data);
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <Divider orientation="left">
        <h1 style={{ marginTop: "1em" }}>
          {graduate._id ? "Edit Your Profile" : "Add Your Profile"}
        </h1>
      </Divider>
      <Row>
        <Col span={16}>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onSubmit={handleSubmit(onSubmit)}
            loading={state.loading}
            layout="vertical"
            style={{ marginLeft: 30 }}
          >
            <Form.Item
              label="Full Name"
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <Input id="graduate.fullname" name="graduate.fullname" />
            </Form.Item>

            <Form.Item
              label="Headline"
              name="headline"
              rules={[
                {
                  required: true,
                  message: "Please input your headline!",
                },
              ]}
            >
              <Input id="graduate.fullname" name="graduate.fullname" />
            </Form.Item>
            <Form.Item
              label="Current Location"
              name="current_location"
              rules={[
                {
                  required: true,
                  message: "Please input your current Location!",
                },
              ]}
            >
              <Input
                placeholder="Current Location"
                id="graduate.fullname"
                name="graduate.fullname"
              />
            </Form.Item>
            <Form.Item
              label="Language"
              name="languages"
              rules={[
                {
                  required: true,
                  message: "Please input your headline!",
                },
              ]}
            >
              <Input
                placeholder="Enter your languages"
                id="graduate.languages"
                name="graduate.languages"
              />
            </Form.Item>
            <Form.Item
              label="Headline"
              name="headline"
              rules={[
                {
                  required: true,
                  message: "Please input your headline!",
                },
              ]}
              tooltip="Enter Languages seperated by commas"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Headline"
              name="headline"
              rules={[
                {
                  required: true,
                  message: "Please input your headline!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Divider orientation="left">Work Type</Divider>
            <Space>
              <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
                <Row>
                  <Col span={8}>
                    <Checkbox value="A">A</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="B">B</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="C">C</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="D">D</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox value="E">E</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Space>

            <Col span={8} style={{ float: "right" }}>
              <TextArea showCount maxLength={2000} />
            </Col>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};

export default GraduateAdd;
