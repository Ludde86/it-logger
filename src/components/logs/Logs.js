import React, { useState, useEffect } from 'react';

const Logs = () => {
	const [ logs, setLogs ] = useState([]);
	const [ loading, setLoading ] = useState(false);

	// -> then call getLogs in useEfftect
	useEffect(() => {
		getLogs();
	}, []);

	// get logs function
	// fetch logs enpoint
	// format data as json
	// set data as state
	const getLogs = async () => {
		setLoading(true);

		const res = await fetch('/logs');
		const data = await res.json();

		setLogs(data);
		setLoading(false);
	};

	// return if loading
	if (loading) {
		return <h4>Loading...</h4>;
	}

	// return unsorted list -> with list items -> with header4
	// map no logs if not loading and no logs in state, else map logs
	return (
		<ul className="collection-with-header">
			<li className="collection-header">
				<h4 className="center">System Logs</h4>
			</li>

			{!loading && logs === 0 ? (
				<p className="center">No logs to show...</p>
			) : (
				logs.map((log) => <li key={log.id}>{log.message}</li>)
			)}
		</ul>
	);
};

export default Logs;
