const Book = ({ book, clearSelection }) => (
    <>
     <div className="mt-4 p-4 md:container md:mx-auto">
        <label className="font-bold text-lg">Book Details</label>
        <button className='float-right bg-transparent text-cadet-blue font-semibold py-2 px-4 border rounded' onClick={clearSelection}>Back</button>
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