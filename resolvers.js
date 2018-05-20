const authors = [{
    id: 21,
    age: 55,
    name: 'JK Rowling',
    books: ['Harry Potter and the Goblet of fire', 'Harry Potter and the Prisoner of Azkaban']
}, 
{
    id: 54,
    age: 70,
    name: 'George RR Martin',
    books: ['GOT - Song of ice and fire','GOT - Mother of dragons']
}, 
{
    id: 87,
    age: 60,
    name: 'Stephen Kings',
    books: ['Carrie','The bride']
}];

const resolvers = {
    Query: {
        authors: () => {
            return authors;
        },
        author: (root, {id}) => {
            //let id = args.id;
            return authors.find(author => id === author.id);
        }
    }
};

export default resolvers;