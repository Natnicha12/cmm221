exports.index = function(req, res) {

	let content = {
		highlight: {
			url: '/assets/images/home/banner/highlight.jpg',
			title: 'bordinsz'
		},
		thumbnail: [
		  {
		  	url: '/assets/images/home/banner/thumbnail-1.jpg',
		  	title: 'ชั้น4 ครุศาสตร์'

		   },
		  {
		  	url: '/assets/images/home/banner/thumbnail-2.jpg',
		  	title: 'อยู่ปี1'
		  	
		  },
		  {
		  	url: '/assets/images/home/banner/thumbnail-3.jpg',
		  	title: 'เครื่องกล'
		  	
		  },
		  {
		  	url: '/assets/images/home/banner/thumbnail-4.jpg',
		  	title: 'พระจอม'
		  	
		  }
		]
	}

	res.render('home.twig', content)
}




 // exports.index = function(req, res) {
//   let content = {
//   	banner: [
//      {
//      	id: 1,
//      	url: '//image/img-1.jpg'
//      },
//      {
//      	id: 2,
//      	url: '//image/img-1.jpg'
//      }
//     ]

//   }
//   res.json(content)
// }