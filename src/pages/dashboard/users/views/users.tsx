import { Button, Table } from "antd";
import { useQuery } from "react-query";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getUsers } from "@/api/users/get-users";
import { mapUsersList } from "@/utils/map-users-list";

const {Column} = Table;
const Users: React.FC= () => {
  const {t} = useTranslation()
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
    <Table title={() => <Button onClick={() => navigate("/users/add")}> {t("dashboard.users.cta")}</Button>} bordered dataSource={mappedUsers}>
      <Column title={t("dashboard.users.columns.email")} dataIndex="email"/>
      <Column  title={t("dashboard.users.columns.registrationDate")} dataIndex="createdAt"/>
      <Column  title={t("dashboard.users.columns.lastSignedIn")} dataIndex="lastSignIn"/>
      <Column  title={t("dashboard.users.columns.actions")} render={((_, row) => {
        return <EditOutlined className="text-xl text-gray-600 hover:cursor-pointer" onClick={() => {
          handleEditClick(row.key)
        }}/>
      })}/>

    </Table>
  );
};
export default Users;
