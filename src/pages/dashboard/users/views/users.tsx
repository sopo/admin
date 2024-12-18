import { Button, Table } from "antd";
import { useQuery } from "react-query";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { mapUsersList } from "../../../../utils/map-users-list";
import { getUsers } from "../../../../api/users/get-users";


const {Column} = Table;
const Users: React.FC= () => {
  const navigate = useNavigate()
  const handleEditClick = (id: string) => {
    navigate(`/users/edit/${id}`)
  }
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Error"}</div>;
  }
  
  const mappedUsers = users ? mapUsersList(users) : [];

  return (
    <Table title={() => <Button onClick={() => navigate("/users/add")}>Add User</Button>} bordered dataSource={mappedUsers}>
      <Column title="E-mail" dataIndex="email"/>
      <Column title="Registration date" dataIndex="createdAt"/>
      <Column title="Last sign in" dataIndex="lastSignIn"/>
      <Column title="Actions" render={((_, row) => {
        return <EditOutlined className="text-xl text-gray-600 hover:cursor-pointer" onClick={() => {
          handleEditClick(row.key)
        }}/>
      })}/>

    </Table>
  );
};
export default Users;
