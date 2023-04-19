module.exports = function(option) {
    const metadata = {
        name: 'monocart-test',
        env: 'prod',
        url: 'https://github.com/cenfun/monocart',
        debug: false
    };

    return {
        metadata,
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
