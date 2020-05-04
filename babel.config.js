module.exports = api => {
    const isTest = api.env('test');

    const config = {
        presets: [
            [
                '@babel/preset-env',
                isTest
                    ? {
                        targets: {
                            node: 'current'
                        }
                    }
                    : {
                        targets: {
                            //browser settings
                        },
                        useBuiltIns: 'usage'
                    }
            ]
        ]
    };

    return config;
}