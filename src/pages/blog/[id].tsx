import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { extractFrontmatter, Frontmatter } from "../../utils/markdown";
import { readArticle, readArticles } from "../../utils/article";
import ArticleHeader from "../../components/ArticleHeader";
import Article from "../../components/Article";
import ArticleWrapper from "../../components/ArticleWrapper";
import Toc from "../../components/Toc";

type Param = { id: string };
type Prop = {
  mdText: string;
  frontmatter: Frontmatter;
};

const Page: NextPage<Prop> = ({ mdText, frontmatter }) => {
  return (
    <div>
      <ArticleWrapper>
        <ArticleHeader frontmatter={frontmatter} />
        <Article md={mdText} />
      </ArticleWrapper>
      <Toc md={mdText} />
      <style jsx>
        {`
          div {
            display: flex;
            flex: 1,
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-around;
          }
        `}
      </style>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Prop, Param> = async ({
  params,
}) => {
  const article = readArticle(params?.id || "");
  return {
    props: {
      mdText: article.content,
      frontmatter: extractFrontmatter(article.content),
    },
  };
};

export const getStaticPaths: GetStaticPaths<Param> = async () => {
  const articles = readArticles();
  return {
    paths: articles.map((d) => ({ params: { id: d.id } })),
    fallback: false,
  };
};

export default Page;
