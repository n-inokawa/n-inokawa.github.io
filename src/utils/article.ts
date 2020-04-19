import fs from "fs";
import path from "path";

export const readArticles = () => {
  const dirPath = path.join(process.cwd(), "./src/articles");
  const filenames = fs.readdirSync(dirPath);

  return filenames.map((filename) => {
    const filePath = path.join(dirPath, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return {
      id: path.basename(filename, path.extname(filename)),
      content: fileContents,
    };
  });
};
