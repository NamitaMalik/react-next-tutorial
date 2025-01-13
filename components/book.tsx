const Book = ({ book }) => (
    <>
     <div className="mt-4 p-4 md:container md:mx-auto">
        <label className="font-bold text-lg">Book Details</label>
        <div className="p-2">
        <label className="font-semibold p-2">Id:</label>
        <span>{book.id}</span>
        </div>
        <div className="p-2">
        <label className="font-semibold p-2">Name:</label>
        <span>{book.name}</span>
        </div>
        <div className="p-2">
        <label className="font-semibold p-2">Author</label>
        <span>{book.price}</span>
        </div>
    </div>
    </>
    );

export default Book;