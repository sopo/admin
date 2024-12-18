import { useAtom } from "jotai";
import {  Navigate, useNavigate,} from "react-router-dom";
import { RegisterProps } from "../../../../interfaces/interfaces";
import { UserAtom } from "../../../../store/auth";
import EditUserForm from "../components/user-form";
import { useMutation } from "react-query";
import { AddUser as AddUserApi} from "../../../../api/users/add-user";


const AddUser:React.FC = () => {
  const [user] = useAtom(UserAtom);

  const navigate = useNavigate()
  
  const mutation = useMutation(
    (values: RegisterProps) => {
        return AddUserApi(values);
    },
    {
      onSuccess: () => {
        navigate("/users");
      },
    }
  );

  const handleSubmit = (values: RegisterProps) => {
    mutation.mutate(values);
  }

  if(!user){
    return <Navigate to="/sign-in" />;
  }
    return(
        <div className="flex flex-col gap-10 justify-center items-center mx-auto my-5 md:my-20 w-96">
        <h1 className="text-xl font-semibold text-gray-900">Add User</h1>
        <EditUserForm 
        onSubmit={handleSubmit}
      />
      </div>
    )
}
export default AddUser