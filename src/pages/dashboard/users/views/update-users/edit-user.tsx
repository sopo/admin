import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { RegisterProps } from "../../../../../interfaces/interfaces";
import { useAtom } from "jotai";
import { UserAtom } from "../../../../../store/auth";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getUser } from "../../../../../api/get-user";
import { editUser } from "../../../../../api/edit-user";
const { Item } = Form;

const EditUser: React.FC = () => {
  const [user] = useAtom(UserAtom);
  const [form] = useForm();
  const { id } = useParams();
  
  const { data, isLoading, isError, error } = useQuery(
    ["user", id],
    () =>(id ? getUser(id) : Promise.reject("undefined Id")),
    {
      enabled: !!id,
      onSuccess: (userData) => {
        form.setFieldsValue({
          email: userData?.email,
          password: "",
        });
      },
    }
  );
  
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Error"}</div>;
  }
  if (!user) {
    return <Navigate to="/sign-in" />;
  }
  const handleSubmit = (values: RegisterProps) => {
    editUser(id, values)
    console.log(values);
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center mx-auto my-5 md:my-20 w-96">
      <h1 className="text-xl font-semibold text-gray-900">Edit User</h1>
      <Form
        name="basic"
        initialValues={{ email: data?.email || "", password: "" }}
        form={form}
        onFinish={handleSubmit}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        className="w-full"
      >
        <Item
          label="Email"
          name="email"
          rules={[{ required: false, message: "Enter user Email" }]}
        >
          <Input placeholder="Enter new email" />
        </Item>

        <Item
          label="Password"
          name="password"
          rules={[{ required: false, message: "Enter password" }]}
        >
          <Input placeholder="Enter new password" />
        </Item>
        <Item label={null}>
          <Button type="primary" htmlType="submit" block>
            Save
          </Button>
        </Item>
      </Form>
    </div>
  );
};
export default EditUser;
