import React from "react";
import { Form, Row, Col, Input, Checkbox, Card, Divider, Button } from "antd";

const GraduateSearch = () => {
  const [form] = Form.useForm();

  // const CheckboxGroup = Checkbox.Group;

  // const workOptions1 = ["Full time", "Part time", "Internship"];
  // const workOptions2 = ["Relocate", "Remote", "Temp/Contract"];
  // const defaultCheckedList = [];

  // const [checkedList, setCheckedList] = React.useState(defaultCheckedList);

  // const onChange = (list) => {
  //   setCheckedList(list);
  // };
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title=" Our amazing and talented graduates are looking for new
        opportunities. Check out our graduate directory to see if they may
        be right fit for you"
        bordered={false}
        style={{ width: "100%", textAlign: "center" }}
      >
        <Form
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish}
        >
          <Row gutter={120}>
            <Col span={8}>
              <Form.Item
                name="current_location"
                label="Current Location"
                rules={[
                  {
                    required: true,
                    message: "Input something!",
                  },
                ]}
              >
                <Input placeholder="Current Location" />
              </Form.Item>
            </Col>
            <Col>
              <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
                <Row>
                  <Checkbox value="fulltime">Full Time</Checkbox>

                  <Checkbox value="partime">Part Time</Checkbox>

                  <Checkbox value="Internship">Temp</Checkbox>
                </Row>
              </Checkbox.Group>
            </Col>
          </Row>

          <Row gutter={120}>
            <Col span={8}>
              <Form.Item
                name="languages"
                label="Language Spoken"
                rules={[
                  {
                    required: true,
                    message: "Input something!",
                  },
                ]}
              >
                <Input placeholder="Language Spoken" />
              </Form.Item>
            </Col>
            <Col>
              <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
                <Row>
                  <Checkbox value="willing_remote">Remote</Checkbox>

                  <Checkbox value="willing_relocate">Relocate</Checkbox>

                  <Checkbox value="temp">Temp/Contract</Checkbox>
                </Row>
              </Checkbox.Group>
            </Col>
          </Row>
          <Row>
            <Col
              span={24}
              style={{
                textAlign: "right",
              }}
            >
              {/* <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button> */}
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default GraduateSearch;
