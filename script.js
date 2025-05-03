let Calculate = () => {
  let dobInput = document.getElementById("dob").value;
  let dob = new Date(dobInput);
  let today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let dates = today.getDate() - dob.getDate();

  if (dates < 0) {
    months--;
    const lastmonth = new Date(today.getFullYear(), today.getMonth(), 0);
    dates += lastmonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  let result = document.getElementById("h3");
  result.innerHTML = `Your Age is : ${years} years, ${months} months, ${dates} days`;
  console.log(years, months, dates);
};
