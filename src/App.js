import "./App.less";
import { NavLink, Route } from "react-router-dom";
import { Layout, Menu, PageHeader } from "antd";
import logo from "./logo.png";
import GraduateHomePage from "./pages/graduate-home-page";
import GraduateAddPage from "./pages/graduate-add-page";

// import GraduateAdd from "./components/graduate-add";

const App = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout className="layout">
      <Header>
        <span>
          <img src={logo} className="logo" alt="logo" />
        </span>
        <Menu
          style={{ float: "right" }}
          theme="dark"
          mode="horizontal"

        >
          {/* <Menu.Item key="1">Student</Menu.Item> */}
          <Menu.Item key="2">
            <NavLink exact activeClassName="active" to="/graduates/new">
              Add Graduate
            </NavLink>
          </Menu.Item>
          <Menu.Item key="1">
            <NavLink exact to="/Login">
              Login
            </NavLink>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <PageHeader className="site-page-header" title="Graduates Directory" />
        <GraduateHomePage />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Copyright @ 2021 Code Your Future
      </Footer>
      <Route exact path="/" component={GraduateHomePage} />
      <Route exact path="/graduates/new" component={GraduateAddPage} />
      <Route exact path="/graduates/edit/:_id" component={GraduateAddPage} />
    </Layout>
  );
};

export default App;
