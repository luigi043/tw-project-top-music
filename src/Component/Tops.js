function Tops() {
	
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://devru-raaga-v1.p.rapidapi.com/json/homepage-v3.asp',
  params: {l: 'H'},
  headers: {
    'x-rapidapi-key': 'c6e0902a58mshab0b80f56b4ad87p1b5fffjsnd1dcb5b02ddd',
    'x-rapidapi-host': 'devru-raaga-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
    return (
      <div>
		<header>
			<div class="topnav">
				<a href="index.html" >Home</a>
				<a class="active right"href="Top Artists.html">Top Music & Artis</a>
				<a href="share.html">Share</a>
				<a href="about.html" >About</a>
			</div>
		</header>
		<body>
		
		<body/>
		fhf

      </div>
    	);	
                }
export default Tops ;
