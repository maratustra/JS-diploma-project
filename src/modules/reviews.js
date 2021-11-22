/*jshint esversion: 6 */
`use strict`;

import SliderService from './slider_service';

class Reviews {
  constructor({ url, commentsContainerClass, commentsItemClass, slidingInterval }) {
    this.url = url;
    this.commentsContainer = document.querySelector(`.${commentsContainerClass}`);
    this.commentsContainer.innerHTML = "";
    this.slidingInterval = slidingInterval;
    this.commentsItemClass = commentsItemClass;
    this.loader = document.querySelector('.loader-area');

    this.showLoading();

    setTimeout(() => this.fetchCommentsData(url)
      .then(data => {
        this.createListOfComments(data.comments);
        this.showComments();
      })
      .finally(() => this.hideLoading()), 2000);
  }


  fetchCommentsData(url) {
    return fetch(url)
      .then(response => response.json())
      .catch(error => console.log('error', error));
  }

  createOddCommentHtml(comment) {
    const image = comment.image === "" ? "review.jpg" : comment.image;

    return `
    		<div class="col-xs-3 col-sm-2">
    			<div class="review-user">
    				<img src="images/users/${image}" alt="" class="img-responsive avatar">
    			</div>
    		</div>
    		<div class="col-xs-9 col-sm-9">
    			<div class="review-inner review-green review-arrow review-arrow-left">
    				<p class="text-normal">${comment.author}</p>
    				<p>${comment.comment}</p>
    			</div>
    		</div>
      `;
  }

  createEvenCommentHtml(comment) {
    const image = comment.image === "" ? "review.jpg" : comment.image;

    return `
				<div class="col-xs-9 col-sm-9">
					<div class="review-inner review-gray review-arrow review-arrow-right">
						<p class="text-normal">${comment.author}</p>
						<p>${comment.comment}</p>
					</div>
				</div>
				<div class="col-xs-3 col-sm-2">
					<div class="review-user">
						<img src="images/users/${image}" alt="" class="img-responsive avatar">
					</div>
				</div>
      `;
  }

  createListOfComments(rawData) {
    if (rawData == null) return;

    rawData.forEach((comment, index) => {
      const commentItem = document.createElement('div');
      commentItem.classList.add('review-margin-bottom', 'row', this.commentsItemClass);

      commentItem.innerHTML = index % 2 !== 0 ? this.createOddCommentHtml(comment) : this.createEvenCommentHtml(comment);

      this.commentsContainer.append(commentItem);
    });
  }

  showComments() {
    const sliderForReviewsOpts = {
      sliderItemsClass: this.commentsItemClass,
      highResolutionSlides: 3,
      lowResolutionSlides: 1
    };

    this.sliderForReviews = new SliderService(sliderForReviewsOpts);
    this.autoSlide();
  }

  autoSlide() {
    const slideIndefinitely = true;

    setInterval(() => {
      this.sliderForReviews.showNextSlide(slideIndefinitely);
    }, this.slidingInterval);
  }

  showLoading() {
    this.loader.style.display = 'block';
  }

  hideLoading() {
    this.loader.style.display = 'none';
  }
}


export default Reviews;