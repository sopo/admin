import { RegisterProps } from "@/interfaces/interfaces";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { Trans, useTranslation } from "react-i18next";

const { Item } = Form;

interface EditUserFormProps {
  initialValues?: RegisterProps;
  onSubmit: (values: RegisterProps) => void;
}

const EditUserForm: React.FC<EditUserFormProps> = ({ initialValues, onSubmit }) => {
  const [form] = useForm();
  const {t} = useTranslation()

  return (
    <Form
      name="basic"
      initialValues={initialValues}
      form={form}
      onFinish={onSubmit}
      autoComplete="off"
      layout="vertical"
      className="w-full"
    >
      <Item
        label={t("dashboard.users.form.email")} 
        name="email"
        rules={[{ required: true, message:<Trans>dashboard.users.form.required</Trans> }]}
      >
        <Input placeholder={t("dashboard.users.form.email")}  />
      </Item>

      <Item
        label={t("dashboard.users.form.password")} 
        name="password"
        rules={[{ required: true, message:<Trans>dashboard.users.form.required</Trans>  }]}
      >
        <Input placeholder={t("dashboard.users.form.password")} />
      </Item>

      <Item label={null}>
        <Button type="primary" htmlType="submit" block>
        {t("dashboard.users.form.cta")} 
        </Button>
      </Item>
    </Form>
  );
};

export default EditUserForm;
