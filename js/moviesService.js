var moviesService = (function() {

    var root = 'http://www.omdbapi.com/';

    var getList = function(title,genre) {
         return $.ajax({
            url: root + '?s=' + title + '&type=' + genre,
            method: 'GET'
        });
    }

    var getMovie = function(id){
    	 return $.ajax({
            url: root + '?i=' + id,
            method: 'GET'
        });
    }

    //API
    return {
        getList: getList,
        getMovie: getMovie
    }
})();
