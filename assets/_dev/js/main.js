
Vue.component('reviews-list', {
	components: {},
	props: ['amount', 'featured'],
	data: function() {
			return {
				review_limit: this.amount,
				isFeatured: this.featured,
				reviews: [
					// these reviews can be requseted form an API
					{
						title: 'Amazing',
						text: 'I love the Gtech air ram. It\'s light weight, easy to manoeuvre and just a lovely product. Highly recommended.',
						author: 'Janet A.',
						stars: 5,
						id: 1,
						isVarified: false,
						help: {
							yes: 15,
							no: 1
						}
					},
					{
						title: 'Amzing !!!',
						text: 'It is amazing. ... so easy to use, powerful but light weight. And the best bit is that my daughter loves using so she hoovers every day, without being',
						author: 'Mairi H.',
						stars: 5,
						id: 2,
						isVarified: false,
						help: {
							yes: 4,
							no: 9
						}
					},
					{
						title: 'Gtech Air Ram',
						text: 'This is one of the best products I have purchased for a very long time, should have bought one earlier dog hair no longer a problem.',
						author: 'Marianne F.',
						stars: 5,
						id: 3,
						isVarified: false,
						help: {
							yes: 2,
							no: 0
						}
					},
					{
						title: 'AirRam K9',
						text: 'Light in weight and works beautifully. No wires, it does what it says on the box!',
						author: 'Edward P',
						stars: 4,
						id: 4,
						isVarified: false,
						help: {
							yes: 15,
							no: 1
						}
					}
				]
			};
	},
	computed: {
    reviewsToDisplay: function() {
      if (this.review_limit) {
        return this.reviews.slice(0, this.review_limit);
      } else {
        return this.reviews;
      }
    }
  },
	template: `
		<div class="row reviews featured" v-if="isFeatured">
			<div class="col-sm-3 review" v-for="review in reviewsToDisplay">
				<div class="review__stars">
					<div class="star" v-for="stars in review.stars">&#9733</div>
				</div>
				<h4>{{ review.title }}</h4>
				<blockquote class="review__text">{{ review.text }}</blockquote>
				<p class="review__author">{{ review.author }}</p> 
			</div>
		</div>
		<div class="row reviews" v-else>
			<div class="col-sm-6 review" v-for="review in reviewsToDisplay">
				<div class="review__stars">
					<div class="star" v-for="stars in review.stars">&#9733</div>
					<p>
						<span>{{ review.stars }}/5</span>
					</p>
				</div>
				<h4>{{ review.title }}</h4>
				<blockquote class="review__text">{{ review.text }}</blockquote>
				<p class="review__author">{{ review.author }} <span v-if="review.isVarified">- Verified Buyer</span></p> 
				<p class="review__help">Was This Review Helpful?  <span>Yes {{ review.help.yes }}</span> - <span>No {{ review.help.no }}</span></p>
			</div>
		</div>
	`,
	
});

new Vue({
		el: '#app',
		data: {
				'appName': 'Gtech'
		},
		// components: {
		//     blogPost: blogPost
		// }
});