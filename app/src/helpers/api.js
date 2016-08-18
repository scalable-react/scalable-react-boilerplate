import { ref } from '../config/constants';

export function saveArticle(title, article) {
  const articleId = ref.child('articles').push().key;
  ref.child(`articles/${articleId}`)
    .set({ ...{ contentBlocks: article }, articleId, title });
}
