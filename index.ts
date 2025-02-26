//Напишите и типизируйте функцию, выполняющую запрос за данными по переданному URL. Выведите их в консоль в формате: "ID: id, Email: email".

interface Comment {
  id: number;
  email: string;
}
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = (url: string): Promise<Comment[]> => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data as Comment[]);
}

getData(COMMENTS_URL)
  .then(data => {
    data.forEach(item => {
      console.log(`ID: ${item.id}, Email: ${item.email}`);
    });
   
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */