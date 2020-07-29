import { SourceFile, FormatCodeSettings } from 'ts-morph';

const formatSettings: FormatCodeSettings = { indentSize: 2 };

const saveSourceFile = async (sourceFile: SourceFile) => {
  // TODO: find a fast way of removing not needed imports
  // sourceFile.organizeImports(formatSettings);
  sourceFile.formatText(formatSettings);
  await sourceFile.save();
};

export default saveSourceFile;
