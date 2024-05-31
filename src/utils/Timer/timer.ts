enum TimerType {
	SECOND = 1,
	MINUTE = 60,
	HOUR = 3600,
}

const getTimer = (time: number, type: TimerType) => {
	return time * type * 1000;
};
export { TimerType, getTimer };
