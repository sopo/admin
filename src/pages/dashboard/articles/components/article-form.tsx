import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { ArticleProps } from "../../../../interfaces/types";

const { Item } = Form;

interface ArticleFormProps {
  initialValues?: ArticleProps;
  onSubmit: (values: ArticleProps) => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({ initialValues, onSubmit }) => {
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
        label="Title En"
        name="titleEn"
        rules={[{ required: true, message: "Enter English title" }]}
      >
        <Input placeholder="Enter English title" />
      </Item>

      <Item
        label="Title Ka"
        name="titleKa"
        rules={[{ required: true, message: "Enter Georgian title" }]}
      >
        <Input placeholder="Enter Georgian title" />
      </Item>

      <Item
        label="Description En"
        name="descriptionEn"
        rules={[{ required: true, message: "Enter English description" }]}
      >
        <TextArea placeholder="Enter English description" />
      </Item>

      <Item
        label="Description Ka"
        name="descriptionKa"
        rules={[{ required: true, message: "This field is required" }]}
      >
        <TextArea placeholder="Enter Georgian description" />
      </Item>

     

      <Item label={null}>
        <Button type="primary" htmlType="submit" block>
          Save
        </Button>
      </Item>
    </Form>
  );
};

export default ArticleForm;
