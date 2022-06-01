module.exports = function(option) {
    const config = {
        name: 'monocart-test',
        env: 'prod',
        url: 'https://github.com/cenfun/monocart',
        debug: false
    };

    return {
        use: {
            config: config
        },
        projects: [
            // {
            //     name: 'Desktop Firefox',
            //     use: {
            //         browserName: 'firefox',
            //         viewport: {
            //             width: 1280,
            //             height: 720
            //         }
            //     }
            // },
            {
                name: 'Desktop Chromium',
                use: {
                    browserName: 'chromium',
                    viewport: {
                        width: 1280,
                        height: 720
                    }
                }
            }
        ]
    };
};
