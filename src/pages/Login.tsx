import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useEffect, useState } from "react";
import {
  clearRememberEmail,
  getRememberEmail,
  setRememberEmail,
} from "../utils/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../actions/Action";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const loginLoad = useSelector((state: any) => state.loginLoad);

  useEffect(() => {
    const savedMail = getRememberEmail();
    if (savedMail) {
      form.setFieldsValue({ email: savedMail, remember: true });
    }
  }, [form]);

  useEffect(() => {
    if (loginLoading === true && loginLoad === false) {
      setLoginLoading(false);
      navigate("/user/view");
    }
  }, [loginLoading, loginLoad]);

  const handleLogin = (values: any) => {
    const { email, remember, password } = values;
    if (remember) {
      setRememberEmail(email);
    } else {
      clearRememberEmail();
    }

    let payload = {
      email: email,
      password: password,
    };

    dispatch(loginAction(payload));
    setLoginLoading(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
      <div className="p-4 rounded shadow bg-white" style={{ width: "32%" }}>
        <Form
          form={form}
          name="login"
          onFinish={handleLogin}
          layout="vertical"
          initialValues={{ remember: false }}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter valid email!" },
            ]}
          >
            <Input
              style={{ borderRadius: 2 }}
              placeholder="Email"
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input
              style={{ borderRadius: 2 }}
              placeholder="Password"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ borderRadius: 2 }}
              htmlType="submit"
              block
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
