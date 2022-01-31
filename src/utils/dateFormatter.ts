
export const dateCustomFormatter = (dateISOString: string) => {
    const date = new Date(dateISOString);
    const month = date.getMonth()+1;
    const day = date.getDay();
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}