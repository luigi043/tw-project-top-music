
function App() {
  function getdata(){
  var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://devru-raaga-v1.p.rapidapi.com/json/search-v2.asp',
  params: {p: '1', c: '500', l: 'H', q: 'the weeknd'},
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
  }
    return (
      <div>
          <header>
            <div className="header"> </div>
            <div className="navbar">
              <a href="root" className="active">Home</a>
              <a href="Top.html">Top Music & Artis</a>
              <a href="Share.html">Share</a>
              <a href="About.html" className="right">About</a>
            </div>
          </header>
        <div id="searchbar">
          <form method="post">
              <section>
                {" "}
                <div id="imageLogo"></div>
              </section>
              <nav>
                <input
                  id="query"
                  type="text"
                  name="query"
                  placeholder="Search ......"
                  autocomplete="off"
                  autofocus=""
                ></input>
                <button id="button" type="submit" onClick={getdata}
                >
                  <i class="fa fa-search">search </i>
                </button>
                <div class="clear"></div>
              </nav>
          </form>


          <body>
         
          <div >  
                    About
              <p>Welcome to M-tunes - a search engine and tool for the best artists and songs. just type</p>
              <p>your search query, choose the sources you would like to search and click the search button. The search goes</p>
              <p>only take a while (if you select all fonts, it may take a little longer). As soon as we find some</p>
              <p>results that match your search query - you'll get a list of your results. It's that simple.</p>

              <p>Alternatively, you can also paste a video URL and click the audio search button.</p>
              <p> After clicking the search button, video conversion will begin. As soon as</p>
              <p>is ready, you can download the converted file.</p>

              <p>Use of our website is free and requires no software or registration. Using our</p>
              <p> site you accept our Terms of Use.</p>

              <p>Have fun and enjoy using our website.</p>
             
          </div>
          </body>



          
        </div>
      </div>
    );
                }
export default App;
