import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import path from 'path'
import fs from 'fs'
import App from './src/App.tsx';
import { StaticRouter } from "react-router-dom/server";


const PORT = process.env.PORT || 8080;
const server = express();
const html = fs.readFileSync(path.resolve(__dirname, 'build', 'index.html'), 'utf8');
const generateResponse = (content, helmet) => {
	const responseHtml = html
		.replace('<div id="root"></div>', `<div id="root">${content}</div>`)
		.replace('</head>', `${helmet.title.toString()}${helmet.meta.toString()}</head>`);

	return responseHtml;
};

server.use(express.static('./build', { index: false }));
server.get('/*', (req, res) => {
	const helmetContext = {};
	const app = (
		<StaticRouter location={req.url}>
			<HelmetProvider context={helmetContext}>
				<App />
			</HelmetProvider>
		</StaticRouter>
	);

	const content = ReactDOMServer.renderToString(app);
	const { helmet } = helmetContext;
	const responseHtml = generateResponse(content, helmet);
	res.send(responseHtml);
});

server.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});
