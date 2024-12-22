import { Button, Table } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { mapUsersList } from "@/utils/map-users-list";
import { USERS_PATHS } from "../users-routes";
import useGetUsers from "@/hooks/use-get-users";

const { Column } = Table;
const Users: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleEditClick = (id: string) => {
    navigate(`/${USERS_PATHS.USERS}/${USERS_PATHS.USERS_EDIT}/${id}`);
  };

  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useGetUsers({ queryOptions: { select: mapUsersList } });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Error"}</div>;
  }

  return (
    <Table
      title={() => (
        <Button
          onClick={() =>
            navigate(`/${USERS_PATHS.USERS}/${USERS_PATHS.USERS_ADD}`)
          }
        >
          {" "}
          {t("dashboard.users.cta")}
        </Button>
      )}
      bordered
      dataSource={users}
    >
      <Column title={t("dashboard.users.columns.email")} dataIndex="email" />
      <Column
        title={t("dashboard.users.columns.registrationDate")}
        dataIndex="created_at"
      />
      <Column
        title={t("dashboard.users.columns.lastSignedIn")}
        dataIndex="lastSignIn"
      />
      <Column
        title={t("dashboard.users.columns.actions")}
        render={(_, row) => {
          return (
            <EditOutlined
              className="text-xl text-gray-600 hover:cursor-pointer"
              onClick={() => {
                handleEditClick(row.key);
              }}
            />
          );
        }}
      />
    </Table>
  );
};
export default Users;
