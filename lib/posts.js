import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

// posts directory path
const postsDirectory = path.join(process.cwd(), "posts");

export const getSortedPostsData = () => {
  // get file names under '/posts'
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // read markdown file as a string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // use gray-matter to parse the post metadata section
    const matterRes = matter(fileContents);

    // combine the data with the id
    return {
      id,
      ...matterRes.data,
    };
  });

  // sort posts by date
  return allPostsData.sort((a, b) => {
    a.date < b.date ? 1 : -1;
  });
};

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

export const getPostData = async (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // parse the post metadata section w/ gray-matter
  const matterRes = matter(fileContents);

  // convert markdown into HTML string using remark
  const processedContent = await remark().use(html).process(matterRes.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterRes.data,
  };
};
