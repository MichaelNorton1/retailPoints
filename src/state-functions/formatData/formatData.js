const formatData = (finalUsers) => {
  let finalArr = [];
  for (let each in finalUsers) {
    finalArr.push({
      name: finalUsers[each].name,
      id: each,
      data: finalUsers[each],
    });
  }

  return finalArr;
};

export default formatData;
