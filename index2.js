const calculateAge = (birthYear) => {
  const currentYear = 2024;
  return currentYear - birthYear;
};

const greetFriendsWithAge = (
  name1,
  birthYear1,
  name2,
  birthYear2,
  name3,
  birthYear3
) => {
  const age1 = calculateAge(birthYear1);
  const age2 = calculateAge(birthYear2);
  const age3 = calculateAge(birthYear3);

  console.log(
    `Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}`
  );
};

const name1 = "Sam";
const birthYear1 = 1990;
const name2 = "Max";
const birthYear2 = 1995;
const name3 = "Paul";
const birthYear3 = 2000;

greetFriendsWithAge(name1, birthYear1, name2, birthYear2, name3, birthYear3);
