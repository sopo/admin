import { ArticleProps } from "@/interfaces/types";
import { Button, Form, FormInstance, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Trans, useTranslation } from "react-i18next";

const { Item } = Form;

interface ArticleFormProps {
  initialValues?: ArticleProps;
  onSubmit: (values: ArticleProps) => void;
  form: FormInstance;
}

const ArticleForm: React.FC<ArticleFormProps> = ({
  initialValues,
  onSubmit,
  form,
}) => {
  const { t } = useTranslation();

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
        label={t("dashboard.articles.form.titleEn")}
        name="title_en"
        rules={[
          {
            required: true,
            message: <Trans>dashboard.articles.form.required</Trans>,
          },
        ]}
      >
        <Input placeholder={t("dashboard.articles.form.titleEn")} />
      </Item>

      <Item
        label={t("dashboard.articles.form.titleKa")}
        name="title_ka"
        rules={[
          {
            required: true,
            message: <Trans>dashboard.articles.form.required</Trans>,
          },
        ]}
      >
        <Input placeholder={t("dashboard.articles.form.titleKa")} />
      </Item>

      <Item
        label={t("dashboard.articles.form.descriptionEn")}
        name="description_en"
        rules={[
          {
            required: true,
            message: <Trans>dashboard.articles.form.required</Trans>,
          },
        ]}
      >
        <TextArea placeholder={t("dashboard.articles.form.descriptionEn")} />
      </Item>

      <Item
        label={t("dashboard.articles.form.descriptionKa")}
        name="description_ka"
        rules={[
          {
            required: true,
            message: <Trans>dashboard.articles.form.required</Trans>,
          },
        ]}
      >
        <TextArea placeholder={t("dashboard.articles.form.descriptionKa")} />
      </Item>

      <Item label={null}>
        <Button type="primary" htmlType="submit" block>
          {t("dashboard.articles.form.cta")}
        </Button>
      </Item>
    </Form>
  );
};

export default ArticleForm;
