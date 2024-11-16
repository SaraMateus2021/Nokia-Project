
interface PagesProps {
    currentPage: number; 
    totalPages: number; 
    handlePreviousPage: () => void; 
    handleNextPage: () => void; 
  }

const Pages = ({currentPage, totalPages, handlePreviousPage, handleNextPage }: PagesProps) => {
  return (
    <div className="d-flex align-items-center gap-3">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="btn btn-primary"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="btn btn-primary"
            >
              Next
            </button>
          </div> 
  )
}

export default Pages