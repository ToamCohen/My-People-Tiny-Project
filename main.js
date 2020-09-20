const renderer = new Renderer()

const myPeople = function (data) {
	renderer.render(data)
}

$.get("https://randomuser.me/api/?results=20", myPeople)
