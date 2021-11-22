/*jshint esversion: 6 */
`use strict`;

//import { showNextSlide } from './slider_service';

class Reviews {
  constructor({ url, commentsContainerClass, commentsItemClass }) {
    this.url = url;
    this.commentsContainer = document.querySelector(`.${commentsContainerClass}`);
    this.commentsContainer.innerHTML = "";

    this.commentsItemClass = commentsItemClass;

    this.fetchCommentsData(url)
      .then(data => {
        this.createListOfComments(data.comments);
        this.showComments();
      });
  }


  fetchCommentsData(url) {
    return fetch(url)
      .then(response => response.json())
      .catch(error => console.log('error', error));
  }

  buildCommentHtml(comment) {
    const commentItem = document.createElement('div');
    commentItem.classList.add('review-margin-bottom', 'row', `${this.commentsItemClass}`);

    if (comment.id % 2 != 0) {
      commentItem.innerHTML = `
    		<div class="col-xs-3 col-sm-2">
    			<div class="review-user">
    				<img src="images/users/${comment.image}" alt="" class="img-responsive avatar">
    			</div>
    		</div>
    		<div class="col-xs-9 col-sm-9">
    			<div class="review-inner review-green review-arrow review-arrow-left">
    				<p class="text-normal">${comment.author}</p>
    				<p>${comment.comment}</p>
    			</div>
    		</div>
      `;
    } else if (comment.id % 2 === 0) {
      commentItem.innerHTML = `
				<div class="col-xs-9 col-sm-9">
					<div class="review-inner review-gray review-arrow review-arrow-right">
						<p class="text-normal">${comment.author}</p>
						<p>${comment.comment}</p>
					</div>
				</div>
				<div class="col-xs-3 col-sm-2">
					<div class="review-user">
						<img src="images/users/${comment.image}" alt="" class="img-responsive avatar">
					</div>
				</div>
      `;
    }
    return commentItem;
  }

  createListOfComments(rawData) {
    if (rawData == null) return;

    rawData.forEach(comment => {
      const commentHtml = this.buildCommentHtml(comment);
      this.commentsContainer.append(commentHtml);
    });
  }

  showComments() {
    // const sliderForReviewsOpts = {
    //   sliderItemsClass: 'this.commentsItemClass',
    //   highResolutionSlides: 3,
    //   lowResolutionSlides: 1
    // };

    // const sliderForReviews = new SliderService(sliderForReviewsOpts);
  }
}


export default Reviews;