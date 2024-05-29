export function getRandomItem(list: any[]) {
  if (list.length === 0) {
    return null; // 리스트가 비어있을 경우 null을 반환합니다.
  }
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

export function removeDuplicates<T>(list: T[], key: keyof T): T[] {
  const uniqueValues = new Set();
  const result = [];

  for (const item of list) {
    const keyValue = item[key];
    if (!uniqueValues.has(keyValue)) {
      uniqueValues.add(keyValue);
      result.push(item);
    }
  }

  return result;
}
