const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop()
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop()
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-2xl text-color-primary">
      {page <= 1 ? null :
        <button
          className="transition-all hover:text-color-accent"
          onClick={handlePrevPage}> Prev </button>
      }
      <p>
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null :
        <button className="transition-all hover:text-color-accent"
          onClick={handleNextPage}> Next </button>
      }
    </div>
  );
};

export default Pagination;
