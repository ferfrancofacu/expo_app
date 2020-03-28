/**
 * Convert firebase snapshot object to array
 * @param  {[type]} snapshot [description]
 * @return {[type]}          [description]
 */
export const snapshotToArray = (snapshot) => {
  const returnArr = [];

  snapshot.docs.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    returnArr.push(item);
  });

  return returnArr;
};