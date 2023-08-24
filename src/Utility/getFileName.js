export const extractFilenameFromPath = (path) => {
  const parts = path.split("/");
  return parts[parts.length - 1];
};
