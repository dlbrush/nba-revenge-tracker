/**
 * @param {Date} date 
 * @returns {String} The date as a string formatted as YYYYMMDD
 */
 function formatDateForSchedule(date) {
  return `${date.getFullYear()}${getTwoDigitMonth(date)}${getTwoDigitDate(date)}`
}

/**
 * @param {Date} date 
 * @returns {String} The month for the passed date, as a 2-digit string with a leading 0 for single-digit months
 */
 function getTwoDigitMonth(date) {
  let month = (date.getMonth() + 1).toString();
  if (month.length < 2) {
      month = "0" + month;
  }
  return month
}

/**
* @param {Date} date 
* @returns The date as a 2-digit string, starting with a leading 0 for single-digit dates
*/
function getTwoDigitDate(date) {
  let numDate = date.getDate().toString();
  if (numDate.length < 2) {
      numDate = "0" + numDate;
  }
  return numDate
}

export { formatDateForSchedule }