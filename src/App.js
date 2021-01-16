import "./App.less";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, PageHeader } from "antd";
import logo from "./logo.png";
import GraduateHomePage from "./pages/graduate-home-page";
import GraduateAddPage from "./pages/graduate-add-page";
import GraduateListPage from "./pages/GraduateListPage";
import GraduateProfilePage from "./pages/GraduateProfilePage";

import NotFound from "./pages/NotFound";
import ContactForm from "./pages/ContactForm";
import AuthNav from "./pages/AuthNav";

// import GraduateAdd from "./components/graduate-add";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <NavBar />
        <Content style={{ padding: "0 20px" }}>
          <PageHeader
            className="site-page-header"
            title="Graduates Directory"
          />
        </Content>

        <Switch>
          <Route exact path="/" component={GraduateHomePage} />
          <Route exact path="/graduates" component={GraduateListPage} />
          <Route
            exact
            path="/graduates/delete/:_id"
            component={GraduateAddPage}
          />
          <Route exact path="/graduates/new" component={GraduateAddPage} />
          <Route path="/graduates/edit/:_id" component={GraduateAddPage} />
          <Route exact path="/graduates/:_id" component={GraduateProfilePage} />
          <Route exact path="/contact" component={ContactForm} />

          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer style={{ textAlign: "center" }}>
          Copyright @ 2021 Code Your Future
        </Footer>
      </Layout>
    </Router>
  );
};

const NavBar = () => {
  return (
    <>
      <Header>
        <Link to="/">
          <span>
            <img src={logo} className="logo" alt="logo" />
          </span>
        </Link>

        <Menu style={{ float: "right" }} theme="dark" mode="horizontal">
          <Menu.Item key="2">
            <Link activeClassName="active" to="/graduates/new">
              Add Graduate
            </Link>
          </Menu.Item>
          <Menu.Item key="1">
            <AuthNav />
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default App;
