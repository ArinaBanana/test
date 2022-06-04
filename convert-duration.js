const leadingZero = (num, size) => {
    return String(num).padStart(size, '0');
};

const convertDuration = (seconds) => {
    const allMinutes = Math.floor(seconds / 60);
    const hours = Math.floor(allMinutes / 60);
    const hoursInMin = hours * 60;
    const minutes = allMinutes - hoursInMin;

    if (hours === 0) {
        return `${leadingZero(minutes, 2)}m`;
    }

    return `${leadingZero(hours, 2)}h ${leadingZero(minutes, 2)}m`;
};

module.exports = convertDuration;
