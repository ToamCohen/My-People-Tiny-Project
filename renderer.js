class Renderer {
	
	render (data) {
		 const source = $("#people-template").html()
		 const template = Handlebars.compile(source)
		 const peopleHTML = template({people: data.results})
		 $("#container").append(peopleHTML)
	}
}



