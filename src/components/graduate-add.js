import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { inputField } from "../pages/Inputs";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { GraduateContext } from "../context/graduate-context";
import { flashErrorMessage } from "./flash-message";
import {
  Layout,
  Divider,
  Row,
  Button,
  Space,
  Checkbox,
  Col,
  Upload,
  message,
  Input,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
// import useGraduatesData from "../utils/useGraduateData";

const GraduateAdd = ({ graduate }) => {
  // const [graduates] = useGraduatesData();
  const [state, dispatch] = useContext(GraduateContext);
  const [redirect, setRedirect] = useState(false);
  const { control, errors, handleSubmit, reset } = useForm({
    defaultValues: graduate,
  });

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
    console.log(data);
  };
  // console.log(graduates);

  // const onSubmit = async (data) => {
  //   await createGraduate(data);
  // };

  if (redirect) {
    return <Redirect to="/" />;
  }

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

  //File upload
  const { Dragger } = Upload;

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

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
  const { TextArea } = Input;

  return (
    <Layout>
      <Divider orientation="left">
        <h1 style={{ marginTop: "1em" }}>
          {graduate._id ? "Edit Your Profile" : "Add Your Profile"}
        </h1>
      </Divider>
      <Row style={{ width: "60%" }} wrap={false}>
        <Col flex="none">
          <div style={{ padding: "0 40px" }}></div>
        </Col>
        <Col flex="auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            loading={state.loading}
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
          >
            <div className="input-group">
              <label className="label">Full Name</label>
              <Controller
                as={inputField("fullname")}
                name="fullname"
                control={control}
                defaultValue=""
                rules={{ required: true }}
              />
              {errors.fullname && (
                <span className="error">This field is required</span>
              )}
            </div>
            <div className="input-group">
              <label className="label">Headline</label>
              <Controller
                as={inputField("headline")}
                name="headline"
                control={control}
                defaultValue=""
                rules={{ required: true }}
              />
              {errors.headline && (
                <span className="error">This field is required</span>
              )}
            </div>
            <div className="input-group">
              <label className="label">Language</label>
              <Controller
                as={inputField("languages")}
                name="languages"
                control={control}
                defaultValue=""
                rules={{ required: true }}
              />
              {errors.languages && (
                <span className="error">This field is required</span>
              )}
            </div>
            <div className="input-group">
              <label className="label">Current Location</label>
              <Controller
                as={inputField("current_location")}
                name="current_location"
                control={control}
                defaultValue=""
                rules={{ required: true }}
              />
              {errors.current_location && (
                <span className="error">This field is required</span>
              )}
            </div>
            <Divider orientation="left">Work Types</Divider>
            <Space>
              <Row>
                <div className="input-group">
                  <Controller
                    control={control}
                    name="full_time"
                    render={({ onChange, onBlur, value, name, ref }) => (
                      <Checkbox
                        onBlur={onBlur}
                        onChange={(e) => onChange(e.target.checked)}
                        checked={value}
                        inputRef={ref}
                        defaultValue={false}
                      >
                        Full Time
                      </Checkbox>
                    )}
                  />
                </div>
                <div className="input-group">
                  <Controller
                    control={control}
                    name="part_time"
                    render={({ onChange, onBlur, value, name, ref }) => (
                      <Checkbox
                        onBlur={onBlur}
                        onChange={(e) => onChange(e.target.checked)}
                        checked={value}
                        inputRef={ref}
                        defaultValue={false}
                      >
                        Part Time
                      </Checkbox>
                    )}
                  />
                </div>
                <div className="input-group">
                  <Controller
                    control={control}
                    name="willing_relocate"
                    render={({ onChange, onBlur, value, name, ref }) => (
                      <Checkbox
                        onBlur={onBlur}
                        onChange={(e) => onChange(e.target.checked)}
                        checked={value}
                        inputRef={ref}
                        defaultValue={false}
                      >
                        Relocate
                      </Checkbox>
                    )}
                  />
                </div>
                <div className="input-group">
                  <Controller
                    control={control}
                    name="willing_remote"
                    render={({ onChange, onBlur, value, name, ref }) => (
                      <Checkbox
                        onBlur={onBlur}
                        onChange={(e) => onChange(e.target.checked)}
                        checked={value}
                        inputRef={ref}
                        defaultValue={false}
                      >
                        Remote
                      </Checkbox>
                    )}
                  />
                </div>
                <div className="input-group">
                  <Controller
                    control={control}
                    name="internship"
                    render={({ onChange, onBlur, value, name, ref }) => (
                      <Checkbox
                        onBlur={onBlur}
                        onChange={(e) => onChange(e.target.checked)}
                        checked={value}
                        inputRef={ref}
                        defaultValue={false}
                      >
                        Internship
                      </Checkbox>
                    )}
                  />
                </div>
              </Row>
              <br />
              <Row>
                <div className="input-group">
                  <Controller
                    control={control}
                    name="contract"
                    render={({ onChange, onBlur, value, name, ref }) => (
                      <Checkbox
                        onBlur={onBlur}
                        onChange={(e) => onChange(e.target.checked)}
                        checked={value}
                        inputRef={ref}
                        defaultValue={false}
                      >
                        Contract
                      </Checkbox>
                    )}
                  />
                </div>
                <div className="input-group">
                  <Controller
                    control={control}
                    name="temp"
                    render={({ onChange, onBlur, value, name, ref }) => (
                      <Checkbox
                        onBlur={onBlur}
                        onChange={(e) => onChange(e.target.checked)}
                        checked={value}
                        inputRef={ref}
                        defaultValue={false}
                      >
                        Temp
                      </Checkbox>
                    )}
                  />
                </div>
              </Row>
            </Space>

            <Divider orientation="left">Work Media</Divider>
            <Space>
              <div className="input-group">
                <label className="label">Website</label>
                <Controller
                  as={inputField("Website")}
                  name="website"
                  control={control}
                  defaultValue=""
                />
              </div>
              <div className="input-group">
                <label className="label">Linkedin</label>
                <Controller
                  as={inputField("linkedin")}
                  name="linkedin"
                  control={control}
                  defaultValue=""
                />
              </div>
              <div className="input-group">
                <label className="label">Github Link</label>
                <Controller
                  as={inputField("github")}
                  name="github"
                  control={control}
                  defaultValue=""
                />
              </div>
            </Space>
            <Divider orientation="left">Private Details</Divider>
            <Space>
              <div className="input-group">
                <label className="label">Mobile</label>
                <Controller
                  as={inputField("Mobile Number")}
                  name="mobile"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                />
                {errors.languages && (
                  <span className="error">Please enter your mobile number</span>
                )}
              </div>

              <div className="input-group">
                <label className="label">Email</label>
                <Controller
                  as={inputField("Email")}
                  name="Email"
                  control={control}
                  defaultValue=""
                />
              </div>
            </Space>
            <Divider />
            <div className="input-group">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag your CV to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Dragger>
            </div>
            <Divider />
            <div className="input-group">
              <label className="label">Resume Text</label>
              <Controller
                as={<TextArea showCount maxLength={2000} rows={20} />}
                name="resume_text"
                control={control}
                defaultValue=""
              />
            </div>
            <Divider />

            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </form>
        </Col>
      </Row>
    </Layout>
  );
};

export default GraduateAdd;
