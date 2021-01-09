import "./App.less";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Link,
} from "react-router-dom";
import { Layout, Menu, PageHeader } from "antd";
import logo from "./logo.png";
import GraduateHomePage from "./pages/graduate-home-page";
import GraduateAddPage from "./pages/graduate-add-page";
import GraduateListPage from "./pages/GraduateListPage";
import GraduateInfoPage from "./pages/GraduateInfoPage";
import Login from "./pages/Login";

// import GraduateAdd from "./components/graduate-add";

const App = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <span>
            <img src={logo} className="logo" alt="logo" />
          </span>
          <Menu style={{ float: "right" }} theme="dark" mode="horizontal">
            <Menu.Item key="2">
              <Link activeClassName="active" to="/graduates/new">
                Add Graduate
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/graduates">Graduates</Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/Login">Login</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <PageHeader
            className="site-page-header"
            title="Graduates Directory"
          />
        </Content>

        <Switch>
          <Route exact path="/" component={GraduateHomePage} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/graduates/" component={GraduateListPage} />
          <Route exact path="/graduates/new" component={GraduateAddPage} />
          <Route path="/graduates/edit/:_id" component={GraduateInfoPage} />
        </Switch>
        <Footer style={{ textAlign: "center" }}>
          Copyright @ 2021 Code Your Future
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
