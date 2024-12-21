import { RegisterProps } from "@/interfaces/interfaces";
import { Button, Form, FormInstance, Input } from "antd";
import { Trans, useTranslation } from "react-i18next";

const { Item } = Form;

interface EditUserFormProps {
  initialValues?: RegisterProps;
  onSubmit: (values: RegisterProps) => void;
  form: FormInstance
}

const EditUserForm: React.FC<EditUserFormProps> = ({ initialValues, onSubmit, form }) => {
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
