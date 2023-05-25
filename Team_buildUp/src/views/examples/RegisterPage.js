/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import axios from "axios";
import {useState, useEffect} from "react";

const baseUrl = "";

function handleClick(e){
  window.location.href="/register"
}


function RegisterPage() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChange_email = (e)=>{
    e.preventDefault();
    setEmail(e.target.value);
  }
  const handleChange_password = (e)=>{
    e.preventDefault();
    setPassword(e.target.value);
  }

  
  const handleSubmit = async(e) => {
    console.log("submit clicked!!!");
    e.preventDefault();
    await axios
    .post(baseUrl +"/api/member",{
      email:email,
      password:password,
    })
    // console.log(email)
    // console.log(password)

    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form">
                  <label>Email</label>
                  <Input value={email} placeholder="Email" type="text" onChange={handleChange_email}/>
                  <label>Password</label>
                  <Input value={password} placeholder="Password" type="password" onChange={handleChange_password} />
                  <Button block className="btn-round" color="danger"
                  // onClick={(e) => e.preventDefault()
                    onClick={(e) => handleSubmit()}
                  >
                    LOGIN {/* 이걸 Login button 으로 바꾸기  */}
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={() => handleClick()}
                  >
                    SIGN UP {/* 이걸 register button 으로 바꾸기 */}
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
