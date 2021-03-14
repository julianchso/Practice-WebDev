function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry(
  {
    name: "John",
  },
  {
    name: "Ann",
  }
);

console.log(family);

delete family.father;
delete family.mother.husband;
console.log(family);

// we pass two objects as arguments -

// {name: "John"} and {name: "Ann"}

so,
  (man = {
    name: "John",
  });
and,
  (woman = {
    name: "Anna",
  });

here,
  (woman = {
    husband: man,
  });

and,
  (man = {
    wife: woman,
  });

// Replacing with the values, it turns,

woman = {
  husband: "John",
};
man = {
  wife: "Anna",
};

// The two objects "man" and "woman" are getting interlinked [married]

// Here a new object is being returned and assigned to family

family = {
  father: man,
  mother: woman,
};

// which actually means,

family = {
  father: {
    name: "John",
  },
  mother: {
    name: "Anna",
  },
};
