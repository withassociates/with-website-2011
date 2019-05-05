$(document).ready(function() {
	$(document).bind("WithHistory.urlDidChange", function() {
		$.ajax(window.withHistory.url(), {
			dataType: "html",
			success: function(response) {
				var body = response.match(/<body.*?>([\s\S]+?)<\/body>/)[1];
				var tmp = $("<div />");
				tmp.html(body);
				var newContent = tmp.find("#pagecontent").html();
				
				$("#pagecontent").animate({ opacity: 0 }, 250);
				$("html, body").animate({ scrollTop: 0}, 250, function() {
					$("#pagecontent").html(newContent).animate({ opacity: 1 }, 500);
				});
			}
		})
	});
	
	window.withHistory = new WithHistory();

	$("a.ajax").live("click", function(event) {
		event.preventDefault();
		event.stopPropagation();
		window.withHistory.pushState($(this).attr("href"));
	});
});
