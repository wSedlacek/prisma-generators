// TODO: support not string args
export const modelAttributeRegex = /(@@NestJS\.)+([A-z])+(\(")+([A-z])+("\))+/;
export const fieldAttributeRegex = /(@NestJS\.)+([A-z])+(\(")+([A-z])+("\))+/;
export const attributeNameRegex = /(?:\.)+([A-Za-z])+(?:\()+/;
export const attributeArgsRegex = /(?:\(")+([A-Za-z])+(?:"\))+/;

export const parseDocumentationAttributes = (
  documentation: string | undefined,
  expectedAttributeName: string,
  expectedAttributeKind: 'model' | 'field'
) => {
  const attributeRegex =
    expectedAttributeKind === 'model'
      ? modelAttributeRegex
      : fieldAttributeRegex;
  const attribute = documentation?.match(attributeRegex)?.[0];
  const attributeName = attribute?.match(attributeNameRegex)?.[0]?.slice(1, -1);
  if (attributeName !== expectedAttributeName) {
    return undefined;
  }

  return attribute?.match(attributeArgsRegex)?.[0]?.slice(1, -1);
};
