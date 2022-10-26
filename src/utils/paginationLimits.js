export default function paginationLimits(page, numOfPages, maxNumOfBtns) {
    let start = page - 5;
    let end = page + 4;
    if (start < 0) {
      end = maxNumOfBtns;
      start = 0;
    }
    if (end > numOfPages) {
      start = numOfPages - maxNumOfBtns;
      end = numOfPages;
    }
    return {start, end}
  }