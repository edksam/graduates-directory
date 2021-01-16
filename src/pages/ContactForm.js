/* eslint-disable no-undef */
import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import emailjs from "emailjs-com";

class ContactForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "/*YOUR NAME OR COMPANY*/",
      subject,
      message_html: message,
    };
    emailjs.send(
      "service_eru7t5q",
      "template_3qekpor",
      templateParams,
      "user_F3i7nhSMnCilOFLVKVb9o",
    );
    this.resetForm();
    // return <Redirect to="/" />;
    const { history } = this.props;
    history.push("/");
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, subject, message, sentMessage } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{ padding: "40px" }}>
          <label>Name</label>

          <input
            name="name"
            type="text"
            placeholder="Your first and last name"
            value={name}
            onChange={this.handleChange}
          />

          <label>Email for contact</label>

          <input
            name="email"
            type="email"
            placeholder="email@gmail.com"
            value={email}
            onChange={this.handleChange}
          />

          <label>Subject</label>

          <input
            name="subject"
            type="text"
            placeholder="What is the subject?"
            value={subject}
            onChange={this.handleChange}
          />

          <label>Message</label>

          <textarea
            name="message"
            placeholder="Tell me more about..."
            value={message}
            onChange={this.handleChange}
          />

          <button color="dark">Send</button>

          <button text>Cancel</button>
        </form>
      </div>
    );
  }
}

// import React from "react";
// import * as emailjs from "emailjs-com";
// import { Form, Input, Divider, Button} from "antd";

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };

// const validateMessages = {
//   required: "${label} is required!",
//   types: {
//     email: "${label} is not a valid email!",
//     number: "${label} is not a valid number!",
//   },
// };

// class ContactForm extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       subject: "",
//       company: "",
//       message: "",
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.resetForm = this.resetForm.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const { name, email, subject, message } = this.state;
//     const templateParams = {
//       from_name: name,
//       from_email: email,
//       to_name: "/*YOUR NAME OR COMPANY*/",
//       subject,
//       message_html: message,
//     };
//     emailjs.send(
//       "service_eru7t5q",
//       "template_3qekpor",
//       templateParams,
//       "user_F3i7nhSMnCilOFLVKVb9o",
//     );
//     this.resetForm();
//   }

//   resetForm() {
//     this.setState({
//       name: "",
//       email: "",
//       subject: "",
//       company: "",
//       message: "",
//     });
//   }

//   handleChange(event) {
//     this.setState({ [event.target.name]: event.target.value });
//   }

//   // // const Demo = () => {
//   //   const onFinish = (values: any) => {
//   // /    console.log(values);
//   //   };

//   render() {
//     const { name, email, subject, message, company, sentMessage } = this.state;

//     return (
//       <>
//         <div >
//           <Divider orientation="left">Employer Contact Form</Divider>
//           <Form
//             {...layout}
//             onSubmit={this.handleSubmit}
//             // onFinish={onFinish}
//             validateMessages={validateMessages}
//             style={{margin:40}}
//           >
//             <Form.Item label="Name" rules={[{ required: true }]}>
//               <Input
//                 name="name"
//                 placeholder="Your first and last name"
//                 value={name}
//                 onChange={this.handleChange}
//               />
//             </Form.Item>
//             <Form.Item label="Email" rules={[{ type: "email" }]}>
//               <Input
//                 name="email"
//                 placeholder="Please enter your email"
//                 value={email}
//                 onChange={this.handleChange}
//               />
//             </Form.Item>
//             <Form.Item label="Subject">
//               <Input
//                 name="subject"
//                 placeholder="Subject"
//                 value={subject}
//                 onChange={this.handleChange}
//               />
//             </Form.Item>
//             <Form.Item label="Company/Organisation">
//               <Input
//                 name="company"
//                 placeholder="Your first and last name"
//                 value={company}
//                 onChange={this.handleChange}
//               />
//             </Form.Item>
//             <Form.Item label="Message">
//               <Input.TextArea
//                 name="message"
//                 placeholder="Tell me more about..."
//                 value={message}
//                 onChange={this.handleChange}
//               />
//             </Form.Item>
//             <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//               <Button type="Submit">Submit</Button>
//             </Form.Item>
//           </Form>
//         </div>
//       </>
//     );
//   }
// }

export default ContactForm;
