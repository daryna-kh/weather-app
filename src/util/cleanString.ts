export function cleanString(s: string): string {
  return s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^A-Za-zА-Яа-я0-9]/gu, "")
    .toLowerCase();
}
