import { Button, Table } from "antd";
import { useQuery } from "react-query";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { getArticles } from "../../../../api/get-articles";
import { mapArticlesList } from "../../../../utils/map-articles-list";

const {Column} = Table;
const Articles: React.FC= () => {
  const navigate = useNavigate()
  const handleEditClick = (id: string) => {
    navigate(`/articles/edit/${id}`)
  }
  const {
    data: articles,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Error"}</div>;
  }
  
  const mappedArticles = articles ? mapArticlesList(articles) : [];

  return (
    <Table title={() => <Button onClick={() => navigate("/users/add")}>Add User</Button>} bordered dataSource={mappedArticles}>
      <Column title="Author En" dataIndex="author_en"/>
      <Column title="Author Ka" dataIndex="author_ka"/>
      <Column title="Date added" dataIndex="createdAt"/>
      <Column title="Title En" dataIndex="title_en"/>
      <Column title="Title ka" dataIndex="title_ka"/>
      <Column title="Description en" dataIndex="description_en"/>
      <Column title="Description ka" dataIndex="description_ka"/>
      <Column title="Actions" render={((_, row) => {
        return <EditOutlined className="text-xl text-gray-600 hover:cursor-pointer" onClick={() => {
          handleEditClick(row.key)
        }}/>
      })}/>

    </Table>
  );
};
export default Articles;

