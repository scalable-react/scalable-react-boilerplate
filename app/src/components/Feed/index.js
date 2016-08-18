import React, { Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { ref } from '../../config/constants';
import { Title } from 'components';
import { ContentRenderer } from 'components';

class Feed extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = { articles: [] };
  }

  componentWillMount() {
    ref.child('articles').on('value', (snapshot) => {
      const allArticles = snapshot.val();
      const arr = Object.keys(allArticles).map((k) => allArticles[k]);
      this.setState({ articles: arr });
      console.log(this.state.articles);
    });
  }

  render() {
    return (
      <div className={styles.feed}>
        {this.state.articles.map((a) => {
          return (
            <div>
              <Title content={a.title} key={a.articleId} />
              <ContentRenderer contentBlocks={a.contentBlocks} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default cssModules(Feed, styles);
