export const getObjKeys = (data: any[]) =>
  data?.reduce((accumulator, value) => {
    return { ...accumulator, [value]: '' };
  }, {});
