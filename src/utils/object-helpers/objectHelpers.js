export const updateObjectInArray = (items, itemsId, objectPropName, newObjProps) => {
  return items.map((user) => {
      if (user[objectPropName] === itemsId) {
        return { ...user, ...newObjProps};
      }
      return user;
    });
};
