exports.handler = async (event, context) => {
    const htmlContent = `
        <html>
        <head>
            <meta http-equiv="refresh" content="0;url=emaildashboard://callback">
            <script type="text/javascript">
                setTimeout(function() {
                    window.location = "emaildashboard://callback";
                }, 0);
            </script>
        </head>
        <body>
            Redirecting...
        </body>
        </html>
    `;

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: htmlContent,
    };
};
