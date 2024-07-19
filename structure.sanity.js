import { StructureBuilder as S } from 'sanity/structure';

export const getDefaultDocumentNode = () => {
  return S.document().views([S.view.form()]);
};

export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About Me')
        .schemaType('aboutMe')
        .child(
          S.document()
            .schemaType('aboutMe')
            .documentId('aboutMeSingle')
           
        ),
      S.listItem().title('Projects').schemaType('project').child(S.documentTypeList('project').title('Projects')),
      S.listItem().title('Education').schemaType('education').child(S.documentTypeList('education').title('Education')),
      S.listItem().title('Experience').schemaType('experience').child(S.documentTypeList('experience').title('Experience Item')),
      S.listItem().title('Skills').schemaType('skill').child(S.documentTypeList('skill').title('Skills')),
      
    ]);

export default deskStructure;