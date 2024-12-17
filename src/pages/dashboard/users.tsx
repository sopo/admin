import { Table } from "antd";
import { getUsers } from "../../api/get-users";
import { useQuery } from "react-query";
import { mapUsersList } from "../../utils/map-users-list";

const {Column} = Table;
const Users: React.FC = () => {

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
    <Table bordered dataSource={mappedUsers}>
      <Column title="E-mail" dataIndex="email"/>
      <Column title="Registration date" dataIndex="createdAt"/>
      <Column title="Last sign in" dataIndex="lastSignIn"/>

    </Table>
  );
};
export default Users;
