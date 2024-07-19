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
      
    ]);

export default deskStructure;