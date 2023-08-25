export const formatFileSize = (sizeInBytes) => {
  const sizeInKB = sizeInBytes / 1024;

  if (sizeInKB < 1000) {
    return `${sizeInKB.toFixed(0)} KB`;
  } else {
    const sizeInMB = sizeInKB / 1024;
    return `${sizeInMB.toFixed(2)} MB`;
  }
};
