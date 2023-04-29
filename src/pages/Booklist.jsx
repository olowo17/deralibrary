import BookTable from "../components/BookTable";

const Booklist = () => {
  return (
    <div className="text-center text-xl ">
      <section className="flex justify-around  bg-slate-400 py-2">
        <h1 className="  font-bold text-green-800 text-2xl">
          List of Available Books
        </h1>
      </section>
      <BookTable />
    </div>
  );
};

export default Booklist;
