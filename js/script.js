$('#search-button').on('click', function () {
	$('#hasil').html('');
	$.ajax({
		url: 'https://api.binderbyte.com/v1/track?api_key=465614f965f8daf08f937aa9b43e02a8b61f0fc69bae37357972766b471112f1',
		type: 'get',
		dataType: 'json',
		data: {
			'courier': $('#ekspedisi').val(),
			'awb': $('#search-input').val()
		},
		success: function(result){
			if (result.status == 200) {
				let resi = result.data;
				let history = result.data.history;
				console.log(resi);
				console.log(history);
				$('#hasil').html(`<table class="table table-hover">
                          <tbody>
                            <tr>
                              <td>STATUS</td>
                              <td>` + resi.summary.status + `</td>
                            </tr>
                            <tr>
                              <td>EKSPEDISI</td>
                              <td>` + resi.summary.courier + `</td>
                            </tr>
                          </tbody>`)
				$.each(history, function(i, data){
					$('#hasil').append(`<table class="table">
					  <tbody>
					    <tr>
					      <td>` + data.date + `</td>
                          <td>` + data.desc + `</td>
					    </tr>
					  </tbody>
					</table>`)
				});
				
			}
		},
		error: function(){
			$('#hasil').html(`<p class="tulisan" style="text-align: center; margin-top: 75px; margin-bottom: 75px;">Tidak di temukan</p>`)
		}
	});
});