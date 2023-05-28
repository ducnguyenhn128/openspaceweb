
const getTimeNow = () => {
    const time1 = new Date();
    const year = time1.getFullYear();
    const month = String(time1.getMonth() + 1).padStart(2, '0');
    const day = String(time1.getDate()).padStart(2, '0');
    const timeNow = `${year}-${month}-${day}`;

    return timeNow
}

export default getTimeNow