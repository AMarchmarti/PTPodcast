enum TimerType {
	SECOND = 1,
	MINUTE = 60,
	HOUR = 3600,
}

const getTimer = (time: number, type: TimerType) => {
	return time * type * 1000;
};

const formatTime = (milliseconds: number): string => {
	const seconds = Math.floor(milliseconds / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;
	const remainingSeconds = seconds % 60;
	const formattedHours = String(hours).padStart(2, "0");
	const formattedMinutes = String(remainingMinutes).padStart(2, "0");
	const formattedSeconds = String(remainingSeconds).padStart(2, "0");
	return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
export { TimerType, getTimer, formatTime };
