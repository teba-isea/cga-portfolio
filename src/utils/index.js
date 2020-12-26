export const cleanProjectsWithUrl = (projects, url) => {
  return projects.filter((project) => project.url !== url);
};
