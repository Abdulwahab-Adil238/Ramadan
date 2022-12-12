// Collecting the input Field Data
const name = document.querySelector(".name");
const phone = document.querySelector(".phone");
const Money = document.querySelector(".Money");
const submit = document.querySelector(".btn");

// collecting All personsData
let persons = [];
// when submit the data
submit.addEventListener('click', (e) => {
  e.preventDefault()
  const personName = name.value.trim();
  const personPhone = phone.value.trim();
  const personMoney = Money.value.trim();
  if (personName == '') {
    alert('name is required');
  }
  if (personPhone == '' || !(+personPhone)) {
    if (!personPhone) {
      alert('phone is required');
    }
  }
  if (!personMoney) {
    alert('money is required')
  }
  else if (personMoney <= 0) {
    alert('money is less then 0')
  }
  else if (personName == '' && personPhone == '' && !(+personPhone) && personMoney <= 0 && !personMoney) {
    alert('all filed is empty')
    return;
  }
  else if (personName && personPhone && personMoney) {
    let person = { name: personName, phone: personPhone, Money: personMoney }
    persons.push(person)
    console.log(persons)
    alert('success')
  }
}
);
