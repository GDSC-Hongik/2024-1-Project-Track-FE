export async function getFoods() {
  const response = await fetch('https://learn.codeit.kr/{네자리번호}/foods');
  const body = await response.json();
  return body;
}