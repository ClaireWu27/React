const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];
  
  function getBooks() {
    return data;
  }
  
  function getBook(id) {
    return data.find((d) => d.id === id);
  }
  

const book=getBook(2);
// const title=book.title;
// const author=book.author;

//   destructuring

const {title,author,pages,genres}=book
console.log(title,author,genres)



// const primaryGenre=genres[0]
// const secondaryGenre=genres[1]

// destructing array
const[primaryGenre,secondaryGenre,...otherGenres]=genres
console.log(primaryGenre,secondaryGenre,otherGenres)

// add new value in an array
const newGenre =[...genres,'epic fantasy']
console.log(newGenre)


const updatedBook={
    ...book,
    // add new attributes in an object
     movieDate:"2024-01-05",
    //  overwrite an attribute
     pages:250}
updatedBook
const pageNum= pages>500?'over 500':'less than 500'
console.log(pageNum)
// if the first parameter is false, then the second parameter will be ignored
console.log(book.hasMovieAdaptation && 'this book has a movie')

// falsy values: 0, '',null,undefined


// if the first parameter is true, then the second one will be ignored
console.log(true || "some string")
console.log(false || "some string")
console.log(book.translations.spanish || "not translated")

function getTotalReviewCount(book){
     const goodreads=book.reviews.goodreads.reviewsCount
    //  ?optional chaining
    // if librarything is undefined or null, then it will not search for reviewsCount
    // ？？ return the right hand side value when the left hand side is null or underfined 
     const librarything=book.reviews.librarything?.reviewsCount??0
     return goodreads+librarything
}

console.log(getTotalReviewCount(getBook(3)))



// array map
const books=getBooks()
const titles=books.map(book=>book.title)
console.log(titles)
const essentialData=books.map(book=>( 
   {
    title:book.title,
    author:book.author
}));
console.log(essentialData)

// array filter
const longBooks=books.filter(book=>book.pages>500).filter(book=>book.hasMovieAdaptation)
console.log(longBooks)

const adventureBooks=books.filter(book=>book.genres.includes('adventure')).map(book=>book.title)
console.log(adventureBooks)

// entire array into one number
const pagesAllBooks=books.reduce((sum,book)=>sum+book.pages,0)
console.log(pagesAllBooks)

// array sort

const arr=[1,4,256,535,646,3,67]
const sortedAsc=arr.sort((a,b)=>a-b)
console.log(arr)
console.log(sortedAsc)
const sortedDsc=arr.sort((a,b)=>b-a)
console.log(sortedDsc)

// slice() without arguments (books.slice()) copies all the elements from the books array into a new array.
// This is important because the sort() method sorts the array in place, meaning it modifies the original array.
const sortByPages=books.slice().sort((a,b)=>b.pages-a.pages).map(book=>(
    {title:book.title,
     pages:book.pages

    }
))

    
console.log(sortByPages)


// add a book object to array
const newBook={
    id:6,
    title:'Harry Potter and the Chamber of Secrects',
    author:"J.K."
};
const newBooks=[...books,newBook]
console.log(newBooks)


// delete book object from array
const booksAfterDel=newBooks.filter(book=>book.id!==3)
console.log(booksAfterDel)  
// update book object in the array
const booksAfterUpdate=booksAfterDel.map(book=>book.id===1?{...book,pages:1200}:book)
console.log(booksAfterUpdate)

fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json()).then(data=>console.log(data))

console.log("claire")

async function getTodos(){
 const res=await   fetch('https://jsonplaceholder.typicode.com/todos/1')
 const data=await res.json()
//  console.log(data)
 return data
}
const todos=getTodos()
console.log(todos)
console.log("hhhhhh")