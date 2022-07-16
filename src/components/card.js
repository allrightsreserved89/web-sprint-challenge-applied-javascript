import axios from 'axios';
const Card = (article) => {
  const articleCard = document.createElement('div');
  const articleHeadline = document.createElement('div');
  const articleAuthor = document.createElement('div');
  const authorImageContainer = document.createElement('div');
  const authorImage = document.createElement('img');
  const authorName = document.createElement('span');

  articleCard.appendChild(articleHeadline);
  articleCard.appendChild(articleAuthor);
  articleAuthor.appendChild(authorImageContainer);
  authorImageContainer.appendChild(authorImage);
  articleAuthor.appendChild(authorName);

  articleHeadline.textContent = article.headline;
  authorImage.src = article.authorPhoto;
  authorName.textContent = article.authorName;
  
  articleCard.classList.add('card')
  articleHeadline.classList.add('headline')
  articleAuthor.classList.add('author')
  authorImageContainer.classList.add('img-container')

  articleCard.addEventListener('click', evt=>{
    console.log(article.headline)
  })

  return articleCard
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  axios.get("http://localhost:5001/api/articles")
  .then(resp =>{
    const cardsCont = document.querySelector(selector);
    const articles = resp.data["articles"];

    for (const key in articles){
      const topic = articles[key];
      topic.forEach(article =>{
        const newCard = Card(article);
        cardsCont.appendChild(newCard);
      });
    }
  })
  .catch(err =>
      console.error(err)
  );
};
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

export { Card, cardAppender }