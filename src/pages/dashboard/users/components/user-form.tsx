import { Button, Form, Input } from "antd";
import { RegisterProps } from "../../../../interfaces/interfaces";
import { useForm } from "antd/es/form/Form";

const { Item } = Form;

interface EditUserFormProps {
  initialValues?: RegisterProps;
  onSubmit: (values: RegisterProps) => void;
}

const EditUserForm: React.FC<EditUserFormProps> = ({ initialValues, onSubmit }) => {
  const [form] = useForm();

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
        label="Email"
        name="email"
        rules={[{ required: true, message: "Enter user Email" }]}
      >
        <Input placeholder="Enter new email" />
      </Item>

      <Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Enter password" }]}
      >
        <Input placeholder="Enter new password" />
      </Item>

      <Item label={null}>
        <Button type="primary" htmlType="submit" block>
          Save
        </Button>
      </Item>
    </Form>
  );
};

export default EditUserForm;
