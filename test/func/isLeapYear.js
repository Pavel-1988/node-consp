

const isLeapYear = (year) => {


  if (year === undefined) {
    throw new Error('year be exist')
  }

  if(typeof year !== "number") {
        throw new Error('year must be number')
  }
  
  if (!Number.isInteger(year)) {
    throw new Error('year must be interger')
  }

  if (year < 42) {
    throw new Error('year must 42 or more')
  }

  const date = new Date(year, 2, 0);
  const days = date.getDate();
  return (29 === days);
}

module.exports = isLeapYear;