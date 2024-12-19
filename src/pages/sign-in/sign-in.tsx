import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { AuthProps } from "@/interfaces/interfaces";
import { login } from "@/api/authorization";


const SignIn: React.FC = () => {
  const {t} = useTranslation()
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
      <h1 className="text-xl font-semibold text-gray-900">{t("signIn.title")}</h1>
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
          label={t("signIn.email")}
          name="email"
          rules={[{ required: true, message: <Trans>signIn.required</Trans> }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<AuthProps>
          label={t("signIn.password")}
          name="password"
          rules={[{ required: true, message: <Trans>signIn.required</Trans>}]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<AuthProps>
          name="remember"
          valuePropName="checked"
          label={null}
        >
          <Checkbox>{t("signIn.rememberMe")}</Checkbox>
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" block>
          {t("signIn.cta")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
