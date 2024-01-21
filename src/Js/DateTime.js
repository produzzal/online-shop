import React from 'react';

const DateTime = () => {
	var showDate = new Date();
	var displayTodaysDate = showDate.getDate()+'/'+showDate.getMonth()+'/'+showDate.getFullYear();
	return (
		<div>
			<input type='text' value={displayTodaysDate} readOnly="true"/>
		</div>
	);
};

export default DateTime;