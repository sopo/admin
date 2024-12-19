import { Button, Table } from "antd";
import { useQuery } from "react-query";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { getArticles } from "@/api/articles/get-articles";
import { mapArticlesList } from "@/utils/map-articles-list";
import { useTranslation } from "react-i18next";


const {Column} = Table;
const Articles: React.FC= () => {
  const {t} = useTranslation()
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
    <Table title={() => <Button onClick={() => navigate("/articles/add")}>{t("dashboard.articles.cta")}</Button>} bordered dataSource={mappedArticles}>
      <Column title={t("dashboard.articles.columns.authorEn")} dataIndex="author_en"/>
      <Column title={t("dashboard.articles.columns.authorKa")} dataIndex="author_ka"/>
      <Column title={t("dashboard.articles.columns.dateAdded")} dataIndex="createdAt"/>
      <Column title={t("dashboard.articles.columns.titleEn")} dataIndex="title_en"/>
      <Column title={t("dashboard.articles.columns.titleKa")} dataIndex="title_ka"/>
      <Column title={t("dashboard.articles.columns.descriptionEn")} dataIndex="description_en"/>
      <Column title={t("dashboard.articles.columns.descriptionKa")} dataIndex="description_ka"/>
      <Column title={t("dashboard.articles.columns.actions")} render={((_, row) => {
        return <EditOutlined className="text-xl text-gray-600 hover:cursor-pointer" onClick={() => {
          handleEditClick(row.key)
        }}/>
      })}/>

    </Table>
  );
};
export default Articles;

