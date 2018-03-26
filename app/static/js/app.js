/* Add your Application JavaScript */
Vue.component('app-header', {
    template: `
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
              <a class="navbar-brand" href="#">VueJS App</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                  </li>
                </ul>
              </div>
            </nav>
        </header>    
    `,
    data: function() {}
});

Vue.component('app-footer', {
    template: `
        <footer>
            <div class="container">
                <p>Copyright &copy {{ year }} Flask Inc.</p>
            </div>
        </footer>
    `,
    data: function() {
        return {
            year: (new Date).getFullYear()
        }
    }
})

Vue.component('app-news-list', {
    template:`
        <section id="blog">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-lg-offset-3 text-center">
                    <h2><span class="ion-minus"></span>News<span class="ion-minus"></span></h2>
                </div>
            </div>
    
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12" v-for="article in articles">
                    <div class="blog column text-center">
                        <img :src='article.urlToImage' alt="" width="100%">
                        <h4>{{ article.title }}</h4>
                        <p>{{ article.description }}</p>
                        <a  :href='article.url'>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    `,
    created: function() {
        let self = this;
        
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=')
        .then(function(response) {
        return response.json();
        })
        .then(function(data) {
        console.log(data);
        self.articles = data.articles;
        });
    },
    data: function(){
        return {
            articles: []
        }
    }
})

let app = new Vue({
    el: '#app',
    data: {
        welcome: 'Hello World! Welcome to VueJS'
    }
});

