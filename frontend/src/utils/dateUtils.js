// YYYY-MM-DD formátum
export const formatDate = (date) =>
    date.toISOString().split('T')[0];

// dátumtartomány -> naplista
export const getDaysBetween = (start, end) => {
    const days = [];
    let current = new Date(start);
    const last = new Date(end);

    while (current <= last) {
        days.push(formatDate(current));
        current.setDate(current.getDate() + 1);
    }

    return days;
};

// tartalmaz-e foglalt napot
export const rangeHasBlockedDay = (start, end, blockedDays) => {
    return getDaysBetween(start, end).some(day =>
        blockedDays.includes(day)
    );
};
