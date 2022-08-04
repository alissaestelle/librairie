# librairie

## Date: 8/3/22
#### By: Alissa Wiley
<br>

## **_Description_**


This app serves as a personal book tracker where you can manage your collection by adding, updating, or deleting books. It features a scrollable "bookshelf" of daily recommendations hosted by [Google Books API](https://developers.google.com/books/docs/v1/using) as well as an interactive table to manage personal book preferences.

<br>

![](BookBar.gif)

The user's personal book collection is formatted as a paginated list that displays 5 books per page. The maximum amount of pages are set to dynamically update as books are added/deleted. This list also contains a check in/out status for each book. Whenever a book is checked in/out, its status is updated within the database. Books can also be sorted by status.

---

**_Getting Started_**
-
Repo can be forked & cloned, and dependencies can be installed by running: _npm i_.
<br><br>
Note: This app has Concurrently installed. In the terminal, /cd into the server file and run *npm run dev*.
<br>

1. To add a new book to the collection, click _Add Book_.
2. To update a book, click on the book's title.
3. To delete a book, click _Delete_.
4. To check a book in or out, click the checkbox in its table row.
5. To filter books by status, select an option from the drop-down menu in the book status column.
<br><br>
Note: A starter collection has been seeded from the database!

---

**_Technologies_**
- 

- Postgres/PSQL
- Sequelize
- Express/Cors/Morgan
- Node/Nodemon
- Google Books API

---

**_Credits_**
-

Pagination:
[Academind](https://academind.com/tutorials/reactjs-pagination) | [LogRocket Blog](https://blog.logrocket.com/react-pagination-scratch-hooks/) | [freeCodeCamp](https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/)

APIs: [Google Books API]((https://developers.google.com/books/docs/v1/using))




