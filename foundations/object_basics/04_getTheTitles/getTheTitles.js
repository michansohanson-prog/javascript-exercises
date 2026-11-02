const books = [
	{
		title: "Book",
		author: "Name",
	},
	{
		title: "Book2",
		author: "Name2",
	},
];

const getTheTitles = (x) => x.map((book) => book.title);
getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
