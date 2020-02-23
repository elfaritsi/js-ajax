$('#search-button').on('click', function(){
	$.ajax({

		url : 'http://www.omdbapi.com/?apikey=8dd7cc4a&s=' + $('#user-search').val(),
		success : m =>{
			let hasil = '';
			let movies = m.Search;

			
			movies.forEach(mov => {

				hasil += `
				
		          <div class="card mb-4 mr-4 ml-3">
		            <img src="${mov.Poster}" class="card-img-top" alt="...">
		              <div class="card-body">
		                <h5 class="card-title ">${mov.Title}</h5>
		                 <p class="card-text text-muted">${mov.Year}</p>
		                   <a href="#" class="btn btn-primary modal-detail" data-toggle="modal" data-target="#movieDetail" data-id="${mov.imdbID}">See Details</a>
		              </div>
		          </div>
				`;
			
			})

			$('#movie-list').html(hasil);

			$('.modal-detail').on('click', function(){
				
				$.ajax({
					url : 'http://www.omdbapi.com/?apikey=8dd7cc4a&i=' + $(this).data('id'),
					success : result =>{
						let hasil = '';
							
							hasil += `
							<div class="container-fluid">
						        <div class="row">
						          <div class="col-md-4">
						            <img src="${result.Poster}" class="img-fluid">
						          </div>
						          <div class="col-md-8">
						            <ul class="list-group">						            
						              <li class="list-group-item"><h4>${result.Title} |  ${result.Year}</h4></li>
						              <li class="list-group-item">Director : <b>${result.Director}</b></li>
						              <li class="list-group-item">Actors : <b>${result.Actors}</b></li>
						              <li class="list-group-item">Writer : <b>${result.Writer}</b></li>
						              <li class="list-group-item">Plot : <b>${result.Plot}</b></li>
						            </ul>
						          </div>
						        </div>
						      </div>`;
						
						$('.modal-body').html(hasil);
					} 
				});
			})
		}

	});
});