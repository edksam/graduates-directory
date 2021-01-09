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
  const { register, handleSubmit } = useForm({
    defaultValues: graduate,
  });
  // const onSubmit = (data) => console.log("data");

  const { TextArea } = Input;
  //Form logic
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  //Checkboxes
  // function onChange(checkedValues) {
  //   console.log("checked = ", checkedValues);
  // }

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
      <Row style={{ width: "100%" }}>
        <Col span={16}>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onSubmit={handleSubmit(onSubmit)}
            loading={state.loading}
            layout="horizontal"
            style={{ marginLeft: 30 }}
          >
            <Form.Item
              htmlFor="fullname"
              label="Full Name"
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <Input type="text" ref={register} id="fullname" name="fullname" />
            </Form.Item>

            <Form.Item
              htmlFor="headline"
              label="Headline"
              rules={[
                {
                  required: true,
                  message: "Please input your headline!",
                },
              ]}
            >
              <Input type="text" id="headline" name="headline" ref={register} />
            </Form.Item>
            <Form.Item
              htmlFor="current_location"
              label="Current Location"
              rules={[
                {
                  required: true,
                  message: "Please input your current Location!",
                },
              ]}
            >
              <Input
              type="text"
                placeholder="Current Location"
                id="current_location"
                name="current_location"
                ref={register}
              />
            </Form.Item>
            <Form.Item
              htmlFor="languages"
              label="Language"
              rules={[
                {
                  required: true,
                  message: "Please input your languages!",
                },
              ]}
            >
              <Input
              type="text"
                placeholder="Enter your languages"
                id="languages"
                name="languages"
                ref={register}
              />
            </Form.Item>

            <Divider orientation="left">Work Type</Divider>
            <Space>
              <Col>
                <Row>
                  <Checkbox type="checkbox" id="fulltime" name="full_time" ref={register}>
                    Full Time
                  </Checkbox>

                  <Checkbox type="checkbox"  id="part_time" name="part_time" ref={register}>
                    Part Time
                  </Checkbox>

                  <Checkbox type="checkbox"  id="full_time" name="Internship" ref={register}>
                    Internship
                  </Checkbox>
                </Row>
              </Col>
            </Space>
            <Space>
              <Col>
                <Row>
                  <Checkbox
                  type="checkbox"
                    id="willing_remote"
                    name="willing_remote"
                    ref={register}
                  >
                    Remote
                  </Checkbox>

                  <Checkbox
                  type="checkbox"
                    id="willing_relocate"
                    name="willing_relocate"
                    ref={register}
                  >
                    Relocate
                  </Checkbox>

                  <Checkbox type="checkbox"  id="temp" name="temp" ref={register}>
                    Temp
                  </Checkbox>
                  <Checkbox type="checkbox" id="contract" name="contract" ref={register}>
                    Contract
                  </Checkbox>
                </Row>
              </Col>
            </Space>
            <br />
            <br />
            <Form.Item htmlFor="website" label="Website" name="website">
              <Input type="text"  ref={register} id="website" name="website" />
            </Form.Item>
            <Form.Item htmlFor="likedin" label="Linkedin url" name="linkedin">
              <Input type="text" ref={register} id="linkedin" name="linked" />
            </Form.Item>
            <Form.Item htmlFor="github" label="Github Handle" name="github">
              <Input type="text" ref={register} id="github" name="github" />
            </Form.Item>
            <Divider orientation="left">Hidden Details</Divider>
            <Space>
              <Form.Item htmlFor="email" label="Email Address" name="email">
                <Input
                type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  ref={register}
                />
              </Form.Item>
              <Form.Item htmlFor="mobile" label="Mobile Number" name="mobile">
                <Input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile Number"
                  ref={register}
                />
              </Form.Item>
            </Space>
            <br />
            <br />
            <Divider orientation="left">Resume Text</Divider>
            <Col style={{}}>
              <TextArea
                type="text"
                id="resume_text"
                name="resume_text"
                placeholder="Resume Text"
                ref={register}
                showCount
                maxLength={2000}
                rows={20}
              />
            </Col>

            <Form.Item {...tailLayout}>
              <Button type="submit" htmlType="submit">
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
