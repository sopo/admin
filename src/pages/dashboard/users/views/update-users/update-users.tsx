import {Button, Form, Input} from "antd";
import { useForm } from "antd/es/form/Form";
import {  RegisterProps } from "../../../../../interfaces/interfaces";
import { useAtom } from "jotai";
import { UserAtom } from "../../../../../store/auth";
import { Navigate } from "react-router-dom";
const {Item} = Form;

const UpdateUsers:React.FC = () => {
    const [user] = useAtom(UserAtom); 
    const [form] = useForm()
    if (!user) {
        return <Navigate to="/sign-in" />;
      }
    const handleSubmit = (values: RegisterProps) => {
        console.log(values)
    }
    return(
        <div className="flex flex-col gap-10 justify-center items-center mx-auto my-5 md:my-20 w-96">
        <h1 className="text-xl font-semibold text-gray-900">Edit User</h1>
        <Form
          name="basic"
          initialValues={{ remember: true }}
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
            rules={[{ required: true, message: "Enter user Email" }]}
          >
            <Input />
          </Item>
  
          <Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Enter password" }]}
          >
            <Input.Password />
          </Item>
          <Item label={null}>
            <Button type="primary" htmlType="submit" block>
             Save
            </Button>
          </Item>
        </Form>
      </div>
    )
}
export default UpdateUsers