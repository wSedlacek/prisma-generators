import path from 'path';

const generateArtifactsDirPath = (folderSuffix: string): string => {
  const randomNumber = Math.random().toFixed(18).slice(2);
  return path.join(
    __dirname,
    '../artifacts',
    `${randomNumber}-${folderSuffix}`
  );
};

export default generateArtifactsDirPath;
