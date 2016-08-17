import { ref } from '../config/constants';

export function saveArticle(article) {
  const articleId = ref.child('articles').push().key;
  const articlePromise = ref.child(`articles/${articleId}`).set({ ...{contentBlocks: article}, articleId });
}
