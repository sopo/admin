import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { useMutation } from "react-query";
import { login } from "../../api/authorization";
import { useNavigate } from "react-router-dom";
import { AuthProps } from "../../interfaces/interfaces";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      navigate(`/`);
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });
  const onFinish: FormProps<AuthProps>["onFinish"] = (values) => {
    handleLogin(values);
  };

  const onFinishFailed: FormProps<AuthProps>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center mx-auto my-5 md:my-20 w-96">
      <h1 className="text-xl font-semibold text-gray-900">Log in</h1>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        className="w-full"
      >
        <Form.Item<AuthProps>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<AuthProps>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<AuthProps>
          name="remember"
          valuePropName="checked"
          label={null}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
