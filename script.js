function Book(title, author, year) { 
    this.title = title; 
    this.author = author; 
    this.year = year;
 }
 const book1 = new Book ('Hippie', 'Paulo Coelho', '2018');
 console.log(book1);

 // if we want to create more than one book just we call function book with new keyword.
 const book2 = new Book ('The Alchemist', 'Paulo Coelho', '1988');